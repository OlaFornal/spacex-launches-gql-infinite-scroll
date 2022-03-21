import React from 'react';
import styles from "../styles/Home.module.css";

export interface LaunchDetailsInterface {
    details: string,
    mission_name: string
}

interface LaunchProps {
    launch: LaunchDetailsInterface | null
}

export const LaunchDetails: React.FC<LaunchProps> = ({launch}) => {
    if (launch)
        return (
            <div>
                <h1 className={styles.title}>
                    {launch.mission_name}
                </h1>
                <p>{launch.details}</p>
            </div>
        )

    return <p>Not found :(</p>
}
