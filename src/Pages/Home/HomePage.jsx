import React, { Fragment } from 'react';
import About from '../../components/About';
import MainSection from '../../components/Main';
import Proposal from '../../components/Proposal';
import Terapia from "../../components/Terapia";
import TerapiasContainerHome from '../../components/TerapiasContainerHome';
import styles from '../../styles/HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.mainContainerHome}>
      <MainSection />
      <About />
      <Proposal />
      <TerapiasContainerHome/>
    </div>
    
  )
}

export default HomePage