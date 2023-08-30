import styles from './page.module.css'
import Banner from '@/components/MainBanner';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className={styles.containerXl}>
      <Banner />
      <Card />
    </main>
  )
}
