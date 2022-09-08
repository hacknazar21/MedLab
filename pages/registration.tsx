import {GetServerSideProps} from "next";
import {MainLayout} from "../layouts/mainLayout";
import Head from "next/head";
import Login from "../components/Auth/Login";
import {Sugar} from "../layouts/sugarLayout";
import Registration from "../components/Auth/Registration";


export default function Index({news, reviews, analysis}) {
    return (
        <>
            <Head>
                <title>Регистрация</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="wrapper another">
                <MainLayout>
                    <Sugar sugar={[{title: 'Главная', href: '/'}, {title: 'Регистрация', href: ''}]}/>
                    <main className='page'>
                        <Registration/>
                    </main>
                </MainLayout>
            </div>
        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//
// }