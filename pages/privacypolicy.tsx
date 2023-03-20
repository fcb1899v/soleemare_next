import type { NextPage } from 'next'
import styles from '../styles/Footer.module.css'
import Head from '../components/Head'
import Splash from '../components/Splash'
import PrivacyPolicyHeader from '../components/PrivacyPolicyHeader'
import PrivacyPolicyBody from '../components/PrivacyPolicyBody'
import Footer from '../components/Footer'

const Policy: NextPage = () => {
  return (
    <div>
      <Head/>
      <main className={styles.main}>
        <Splash/>
        <PrivacyPolicyHeader/>
        <PrivacyPolicyBody/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Policy