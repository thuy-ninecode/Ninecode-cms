import React from "react";
import styles from "./Header.module.scss";
import { menuNavigation } from "./const";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.HeaderContainer}>
            {menuNavigation.map((item: any, idx: number) => (
                <Link key={idx} to={item}>
                    {item}
                </Link>
            ))}
        </div>
    );
};

export default Header;
