import img from "../assets/mainImg.jpeg";
import styles from "../styles/MainSection.module.scss";

function MainSection() {
	return (
		<main className={styles.mainContainer}>
			<img src={img} alt='Mujer con plantas en la cabeza y una lluvia encima que representan la alimentacion positiva de la mente. Y piedras balanceadas que representan el equilibrio espiritual.'/>
			<div className={styles.textMain}>
				<h1>Terapias alternativas</h1>
				<h2>Ariel Vallejos</h2>
			</div>
		</main>
	);
}

export default MainSection;