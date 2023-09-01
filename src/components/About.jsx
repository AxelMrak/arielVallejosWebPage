import React from 'react';
import Ariel from '../assets/Photo-Ariel.jpeg';
import styles from '../styles/AboutSection.module.css';

function About() {
  return (
		<section className={styles.aboutMainContainer}>
			<div className={styles.textContainer}>
				<h3 className={styles.subtitleAbout}>Sobre mí</h3>
				<p className={styles.textAbout}>
					Mi nombre es Ariel F. Vallejos, soy terapeuta holístico. Brindo una
					atención integral individualizada y de calidad.
				</p>
			</div>
			<div className={styles.imgContainer}>
				<img src={Ariel} width="100%" alt="Foto de Ariel Vallejos" loading='lazy' />
			</div>
		</section>
	);
}

export default About