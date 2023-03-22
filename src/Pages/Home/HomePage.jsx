import React, { Fragment, lazy, Suspense } from 'react';
import MainSection from '../../components/Main';
import styles from '../../styles/HomePage.module.scss';
import WhatsAppGlobal from '../../components/WhatsAppGlobal';
import { Loader } from '../../components/Loader';
import Download from '../../components/Download';

const About = lazy(() => import('../../components/About'));
const Proposal = lazy(() => import('../../components/Proposal'));
const TerapiasContainerHome = lazy(() => import('../../components/TerapiasContainerHome'));
const BusinessHours = lazy(() => import('../../components/BusinessHours'));
const Locations = lazy(() => import('../../components/Locations'));
const Offices = lazy(() => import('../../components/Offices'));
const PaymentSection = lazy(() => import('../../components/PaymentSection'));

function HomePage() {
  return (
    <div className={styles.mainContainerHome}>
      <MainSection />
      <Suspense fallback={<Loader />}>
        <About />
        <Proposal />
        <TerapiasContainerHome />
        <BusinessHours />
        <Locations />
        <Offices />
        <PaymentSection />
        <Download />
      </Suspense>
      <WhatsAppGlobal />
    </div>

  )
}

export default HomePage