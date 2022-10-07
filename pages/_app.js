// pages/_app.js
import '../src/scss/style.scss'
import useAuth from "../hooks/hooks.auth";
import {AuthContext} from '../context/AuthContext'
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
    const {token, userId, login, logout} = useAuth()
    const isAuth = !!token
    return (
        <AuthContext.Provider value={{
            token,
            login,
            logout,
            userId,
            isAuth
        }}>
            <NextNProgress
                color="#000000"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}
