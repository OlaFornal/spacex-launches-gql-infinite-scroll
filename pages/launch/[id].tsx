import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import { getApolloClient } from "../../dataProvider/client";
import { Header } from '../../components/Header';
import Link from "next/link";
import { GET_LAUNCH_DETAILS } from "../../dataProvider/launchesQueries";
import { ParsedUrlQuery } from "querystring";
import { LaunchDetails, LaunchDetailsInterface } from "../../components/LaunchDetails";
import {Footer} from "../../components/Footer";

interface LaunchProps {
    launchData: LaunchDetailsInterface
}

const Launch: NextPage<LaunchProps> = ({ launchData }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SpaceX launches - {launchData ? launchData.mission_name : 'Not Found :('}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <LaunchDetails launch={launchData} />
                <Link href="/">
                    <a>Back to homepage</a>
                </Link>
            </main>
            <Footer />
        </div>
    )
}

interface SsrParams extends ParsedUrlQuery {
    id: string;
}

export const getServerSideProps: GetServerSideProps<LaunchProps, SsrParams> = async ( context) => {
    const { id } = context.params!;
    const client = getApolloClient(true);
    const launchResponse = await client.query({ query: GET_LAUNCH_DETAILS, variables: { id: id } });

    return {
        props: {
            launchData: launchResponse.data.launch
        }
    }
}

export default Launch
