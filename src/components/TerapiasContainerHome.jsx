import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/TerapiasContainer.module.scss";
import Terapia from "./Terapia";

const terapiasHome = [
	{
		title: "Quiropraxia",
		description: "Los quiroprácticos realizamos ajustes (manipulaciones) de la columna vertebral u otras partes del cuerpo.",
		img: "https://mejorconsalud.as.com/wp-content/uploads/2021/03/quiropraxia-columna-vertebral.jpg",
	},
	{
		title: "Acupuntura",
		description: "Se utiliza esta terapia para aliviar las molestias asociadas con distintas enfermedades y trastornos.",
		img: "https://mejorconsalud.as.com/wp-content/uploads/2014/01/la-acupuntura-que-es-y-cuales-son-sus-beneficios.jpg",
	},
	{
		title: "Ventosa",
		description: "Se aplica en diversos puntos de la superficie del cuerpo para atraer a ello un aflujo de los líquidos mediante el vacío que se forma por la ventosa.",
		img: "https://www.fisi-on.com/imagenes/tratamientos/ventosas-10-001.jpg",
	},
];

function TerapiasContainerHome() {

	return (
		<div className={styles.terapiasSectionContainer}>
			<h3>Algunas terapias que utilizo</h3>
			<div className={styles.terapiasContainer}>

				{
					terapiasHome.map(terapia =>
						<Terapia
							title={terapia.title}
							description={terapia.description}
							terapiaImg={terapia.img}
							key={terapia.title}
						/>
					)
				}
			</div>
			<Link className={styles.buttonKnowMore} to='/terapias'> Conoce otras terapias </Link>
		</div>

	);
}

export default TerapiasContainerHome;
