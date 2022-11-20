import img from "../assets/mainImg.jpeg";
import styles from "../styles/MainSection.module.scss";
import CarouselComponent from "./Carousel";

function MainSection() {
	return (
		<main className={styles.mainContainer}>
			<CarouselComponent/>
			<div className={styles.textMain}>
				<h1>Terapias Holísticas <hr/> y <hr/> Alternativas </h1>
			</div>
		</main>
	);
}

export default MainSection;