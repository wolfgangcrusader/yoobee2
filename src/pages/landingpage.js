import NavBar from "./pagecomponents/landing page/navbar";
import HeroBanner from "./pagecomponents/landing page/herobanner";
import FlashSale from "./pagecomponents/landing page/flashsale";
import CelebZone from "./pagecomponents/landing page/celebzone";
import Campaigns from "./pagecomponents/landing page/campaigns";
import IGStore from "./pagecomponents/landing page/igstore";
import Footer from "./pagecomponents/landing page/footer"



export default function LandingPage() {

    return(     
        <>
            <NavBar/>
            <HeroBanner/>
            <FlashSale/> 
            <CelebZone/>
            <Campaigns/> 
            <IGStore/> 
            <Footer/>   
        </>
    )
}