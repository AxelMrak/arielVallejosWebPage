import React, { Fragment } from 'react';
import About from '../../components/About';
import MainSection from '../../components/Main';
import Proposal from '../../components/Proposal';
import TerapiasContainerHome from '../../components/TerapiasContainerHome';
import BusinessHours from '../../components/BusinessHours'
import styles from '../../styles/HomePage.module.scss';
import Locations from '../../components/Locations';
import Offices from '../../components/Offices';
import PaymentSection from '../../components/PaymentSection';

function HomePage() {
  return (
    <div className={styles.mainContainerHome}>
      <MainSection />
      <About />
      <Proposal />
      <TerapiasContainerHome/>
      <BusinessHours/>
      <Locations/>
      <Offices/>
      <PaymentSection/>
    </div>
    
  )
}

export default HomePage