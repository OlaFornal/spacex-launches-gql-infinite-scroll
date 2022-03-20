import React from 'react';
import {useQuery, gql} from '@apollo/client';

interface Launch {
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
    launchesPast: Launch[];
}

interface LaunchesListVars {
    limit: number;
    offset: number;
}

const GET_LAUNCHES_PAST = gql`
  query GetLaunchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      launch_site {
        site_name_long
      }
      launch_date_utc
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

export function PastLaunchesList() {
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
    return (
        <div>
            {data && data.launchesPast.map(launch =>
                <div key={launch.id}>
                    <h4>{launch.mission_name}</h4>
                    <p>{launch.launch_date_utc}</p>
                    <hr/>
                </div>
            )}
            <button onClick={() => { loadMore() }}>Load More</button>
        </div>
    );
}
