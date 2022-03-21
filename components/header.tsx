import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Header = () =>
    <div>
        <button className={styles.button}>
            <Link href="/">
                <a>🛰 Launches</a>
            </Link>
        </button>
    </div>



