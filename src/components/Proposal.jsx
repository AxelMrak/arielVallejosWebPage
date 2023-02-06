import React from 'react';
import styles from '../styles/ProposalSection.module.css';
import img from '../assets/illustrationRelax.svg';

function Proposal() {
  return (
		<section className={styles.proposalMainContainer}>
			<div className={styles.proposalImg}>
				<img src={img} width='400' alt='Hombre relajado' loading='lazy' />
			</div>
			<div className={styles.proposalText}>
				<h3>¿Que te propongo?</h3>
				<p>
					Te propongo mejorar tu salud sin medicación y sin efectos secundarios.
					Hace más de 10 años me dedico a realizar Terapias Naturales para que
					mis pacientes tengan una mejor calidad de vida y salud.
				</p>
			</div>
		</section>
	);
}

export default Proposal