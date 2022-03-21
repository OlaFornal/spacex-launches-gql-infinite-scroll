import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {PastLaunchesList} from "../components/launches_list";
import {Footer} from "../components/footer";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SpaceX launches - infinite scroll</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    SpaceX Launches
                </h1>
                <p>With infinite scroll</p>
                <PastLaunchesList/>
            </main>
            <Footer />
        </div>
    )
}

export default Home
