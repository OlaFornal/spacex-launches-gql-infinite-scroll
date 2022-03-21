import {gql} from "@apollo/client";

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      details
      mission_name
    }
  }
`;

export const GET_LAUNCHES_PAST = gql`
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

