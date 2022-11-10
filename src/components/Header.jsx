import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
} from "react-router-dom/dist";
import HomePage from "../Pages/Home/HomePage";
import styles from "../styles/Header.module.css";
import img from '../assets/logo.svg';

function Header() {
	return (
		<Router>
			<header className={styles.head}>
        <img src={img} width='200' alt="Ariel Vallejos LOGO"/>
				<nav>
					<div className={styles.list}>
						<Link to="/" className={styles.unitList}>Inicio</Link>
						<Link to="/terapias" className={styles.unitList}>Terapias</Link>
						<Link to="/" className={styles.unitList}>Ubicacion</Link>
						<Link to="/" className={styles.unitList}>Contacto</Link>
					</div>
				</nav>
        </header>
				<Routes>
					{/* HomePage */}
					<Route path="/" element={<HomePage />} />
					{/* TODO: Terapias */}
					<Route path="/terapias" element={<h2>Pendiente</h2>} />
					{/* 404 */}
					<Route path="*" element={<h1>404: Not Found</h1>} />
				</Routes>
		</Router>
	);
}

export default Header;
