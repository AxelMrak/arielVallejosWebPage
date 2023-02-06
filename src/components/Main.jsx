import styles from "../styles/MainSection.module.scss";
import videoWebm from '../assets/video/video-main-desktop.webm';
import videoMp4 from '../assets/video/video-main-desktop.mp4';

function MainSection() {
	return (
		<main className={styles.mainContainer}>
			<video muted autoPlay playsInline preload="none" loop >
				<source src={videoMp4} type='video/mp4' />
				<source src={videoWebm} type='video/webm' />
			</video>
			<div className={styles.textMain}>
				<h1>Terapias holísticas y alternativas </h1>
			</div>
		</main>
	);
}

export default MainSection;