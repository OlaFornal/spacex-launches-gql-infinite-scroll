import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PastLaunchesList } from "../components/LaunchesList";
import { Footer } from "../components/Footer";


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
                <p>(infinite scroll demo)</p>

                <PastLaunchesList/>
            </main>
            <Footer />
        </div>
    )
}

export default Home
