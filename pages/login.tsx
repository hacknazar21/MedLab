import {GetServerSideProps} from "next";
import {MainLayout} from "../layouts/mainLayout";
import Head from "next/head";
import Login from "../components/Auth/Login";
import {Sugar} from "../layouts/sugarLayout";


export default function LoginPage({news, reviews, analysis}) {
    return (
        <>
            <Head>
                <title>Логин</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="wrapper another">
                <MainLayout>
                    <Sugar sugar={[{title: 'Главная', href: '/'}, {title: 'Логин', href: ''}]}/>
                    <main className='page'>
                        <Login/>
                    </main>
                </MainLayout>
            </div>
        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//
// }
