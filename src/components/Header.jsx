import React from "react";
import styles from "../styles/Header.module.css";
import img from '../assets/logo.svg';
import { Link } from "react-router-dom";

function Header() {
	return (
			<header className={styles.head}>
				<img src={img} width='200' alt="Ariel Vallejos LOGO" />
				<nav>
					<div className={styles.list}>
						<Link to="/" className={styles.unitList}> Inicio </Link>
						<Link to="/terapias" className={styles.unitList}>Terapias</Link>
						<Link to="/contacto" className={styles.unitList}>Contacto</Link>
					</div>
				</nav>
			</header>
	);
}

export default Header;
