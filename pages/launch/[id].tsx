import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {Footer} from "../../components/footer";
import {getApolloClient} from "../../dataProvider/client";
import {gql} from "@apollo/client";

interface LaunchDetails {
    details: string,
    mission_name: string
}

interface LaunchProps {
    launchData: LaunchDetails
}

const Launch: NextPage<LaunchProps> = ({launchData}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SpaceX launches - {launchData ? launchData.mission_name : 'Not Found :('}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {launchData ?
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        {launchData.mission_name}
                    </h1>
                    <p>{launchData.details}</p>
                </main> :
                <h1>Not found</h1>}

            <Footer/>
        </div>
    )
}

const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      details
      mission_name
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params && context.params.id ? context.params.id.toString() : '1';
    const client = getApolloClient(true);
    const launchResponse = await client.query({query: GET_LAUNCH_DETAILS, variables: {id: id}});

    return {
        props: {
            launchData: launchResponse.data.launch
        }
    }
}

export default Launch
