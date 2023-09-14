import Banner from '@/components/MainBanner';
import Card from '@/components/Card';
import CardFrame from '@/components/CardFrame';

let mainClass: string = "";
let mainClassArray: string[] = ["w-full", "mt-14"];
for (let i = 0; i < mainClassArray.length; i++) {
  mainClass += " " + mainClassArray[i];
}


let cardContainerClass: string = "";
let cardContainerClassArray: string[] = ["w-full", "flex", "justify-center", "max-h-fit", "mt-10"];
for (let i = 0; i < cardContainerClassArray.length; i++) {
  cardContainerClass += " " + cardContainerClassArray[i];
}

export default function Home() {
  return (
    <main className={mainClass}>
      <Banner />
      <div className={cardContainerClass}>
        <CardFrame>
          <Card hospitalName='Chulalongkorn Hospital' imgSrc='/images/chula.jpg'/>
        </CardFrame>
        <CardFrame>
          <Card hospitalName='Rajavithi Hospital' imgSrc='/images/rajavithi.jpg'/>
        </CardFrame>
        <CardFrame>
          <Card hospitalName='Thammasat Hospital' imgSrc='/images/thammasat.jpg'/>
        </CardFrame>
      </div>
    </main>
  )
}
