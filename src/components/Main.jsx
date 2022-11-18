import img from "../assets/mainImg.jpeg";
import styles from "../styles/MainSection.module.scss";
import CarouselComponent from "./Carousel";

function MainSection() {
	return (
		<main className={styles.mainContainer}>
			<CarouselComponent/>
		</main>
	);
}

export default MainSection;