// pages/_app.js
import "../src/scss/style.scss";
import useAuth from "../hooks/hooks.auth";
import { AuthContext } from "../context/AuthContext";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import useHttp from "../hooks/hooks.http";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const { token, userId, login, logout, refreshToken } = useAuth();
  const [userData, setUserData] = useState(null);
  const { request } = useHttp();
  const router = useRouter();
  const isAuth = !!token;
  useEffect(() => {
    (async () => {
      if (isAuth) {
        try {
          const data = await request("/api/profile/", "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          if (data) {
            setUserData(data);
          }
        } catch (e) {
          const error = JSON.parse(e.message);
          if (error?.code === "token_not_valid") {
            try {
              const data = await request(
                "/api/auth/token/refresh",
                "POST",
                {
                  refresh: refreshToken,
                },
                {
                  "Content-Type": "application/json",
                }
              );
              if (data && data.token) {
                await login(data.token, data.refresh);
              } else {
                await logout();
              }
            } catch (e) {
              await logout();
            }
          } else if (error?.code === "user_not_found") {
            await logout();
          }
        }
      }
    })();
  }, [token, router.pathname]);
  return (
    <>
      <NextNProgress
        color="#E87C24"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuth,
        }}
      >
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
}
