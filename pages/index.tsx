import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PastLaunchesList} from "../components/launches_list";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SpaceX launches - infinite scroll</title>
                <meta name="description" content="Recruitment task"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    SpaceX Launches
                </h1>
                <p>With infinite scroll</p>
                <PastLaunchesList/>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/favicon.ico" alt="rocket" width={32} height={32}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
