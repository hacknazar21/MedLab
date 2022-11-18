// pages/_app.js
import "../src/scss/style.scss";
import useAuth from "../hooks/hooks.auth";
import { AuthContext } from "../context/AuthContext";
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  const { token, userId, login, logout } = useAuth();
  const isAuth = !!token;
  return (
    <>
      <NextNProgress
        color="#29D"
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
