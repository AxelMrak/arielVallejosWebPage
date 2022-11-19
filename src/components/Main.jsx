import img from "../assets/mainImg.jpeg";
import styles from "../styles/MainSection.module.scss";
import CarouselComponent from "./Carousel";

function MainSection() {
	return (
		<main className={styles.mainContainer}>
			<CarouselComponent/>
			<h1>Ariel Vallejos - Terapias alternativas</h1>
		</main>
	);
}

export default MainSection;