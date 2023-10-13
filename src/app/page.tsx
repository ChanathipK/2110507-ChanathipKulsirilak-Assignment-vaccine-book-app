import Banner from '@/components/MainBanner';
import CardPanel from '@/components/CardPanel';
import NavigateButton from '@/components/NavigateButton';

export default function Home() {
  return (
    <main className="w-full mt-14">
      <Banner />
      <NavigateButton prompt="View hospitals" path="/hospital" />
    </main>
  )
}
