import React from 'react';
import {useQuery} from '@apollo/client';
import InfiniteScroll from "react-infinite-scroll-component";
import Link from 'next/link'
import {GET_LAUNCHES_PAST} from "../dataProvider/launchesQueries";

interface LaunchData {
    id: number;
    launch_site: {
        site_name_long: string
    }
    launch_date_utc: string;
    mission_name: string;
    rocket: {
        rocket_name: string
    };
}

interface LaunchesList {
    launchesPast: LaunchData[];
}

interface LaunchesListVars {
    limit: number;
    offset: number;
}

export const PastLaunchesList: React.FC = () => {
    const {loading, error, data, fetchMore} = useQuery<LaunchesList, LaunchesListVars>(
        GET_LAUNCHES_PAST,
        {variables: {limit: 10, offset: 0}}
    );

    const loadMore = (): void => {
        fetchMore({
            variables: {
                offset: data?.launchesPast.length
            }
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data && data.launchesPast.length > 0)
        return (
            <InfiniteScroll
                dataLength={data.launchesPast.length * 10}
                next={() => loadMore()}
                hasMore={data.launchesPast.length % 10 === 0} // @todo: find a better way to tell if it's an end
                loader={<p>Loading...</p>}
                endMessage={<p>You&apos;ve seen it all. How cool is that!</p>}
            >
                {data.launchesPast.map(launch =>
                    <div key={launch.id}>
                        <h4>
                        <Link href={`/launch/${launch.id}`}>
                            <a>{launch.mission_name} [{launch.rocket.rocket_name}]</a>
                        </Link>
                        </h4>
                        <p>{launch.launch_site.site_name_long}</p>
                        <p>{launch.launch_date_utc}</p>
                        <hr/>
                    </div>
                )}
            </InfiniteScroll>
        );
    return (
        <p>You&apos;ve seen it all. How cool is that!</p>
    )
}
