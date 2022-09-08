// pages/_app.js
import '../src/scss/style.scss'
import useAuth from "../hooks/hooks.auth";
import {AuthContext} from '../context/AuthContext'

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
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}