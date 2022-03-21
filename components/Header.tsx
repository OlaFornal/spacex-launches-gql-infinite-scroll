import Link from "next/link";
import styles from './Header.module.css';
import Image from "next/image";

export const Header = () =>
    <nav className={styles.header}>
        <Image src="/favicon.ico" alt="rocket" width={32} height={32}/>
        <Link href="/">
            <a>SpaceX Launches</a>
        </Link>
    </nav>



