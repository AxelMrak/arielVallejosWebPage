import React from 'react';
import pdf from '../assets/download/book.pdf';
import styles from '../styles/Download.module.css';

function Download() {
  return (
    <section className={styles.downloadMainContainer}>
      <h3>Obtén un libro para ayudarte a conseguir una alimentación saludable</h3>
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="Poder del metabolismo.pdf">Descargar PDF</a>
    </section>
  )
}

export default Download