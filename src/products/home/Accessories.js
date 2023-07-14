import React from 'react';
import Card from '../../components/Card';

//images
import u1 from "../../assets/Products/Accessories/Car Air Freshener/1.jpg";
import u2 from "../../assets/Products/Accessories/Car Air Freshener/2.webp";
import u3 from "../../assets/Products/Accessories/Car Air Freshener/3.webp";
import u4 from "../../assets/Products/Accessories/EKYLIP Glass Rinser/1.jpg";
import u5 from "../../assets/Products/Accessories/EKYLIP Glass Rinser/2.jpg";
import u6 from "../../assets/Products/Accessories/EKYLIP Glass Rinser/3.jpg";
import u7 from "../../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/1.jpg";
import u8 from "../../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/2.jpg";
import u9 from "../../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/3.jpg";
import u10 from "../../assets/Products/Accessories/pTron Bullet  Quick Charger/1.webp";
import u12 from "../../assets/Products/Accessories/pTron Bullet  Quick Charger/2.jpg";
import u11 from "../../assets/Products/Accessories/pTron Bullet  Quick Charger/3.jpg";


const Accessories = () => {
  return (
    <div style={{ margin: 10 }}>
      <h2>Accessories</h2>
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
        <Card url1={u1}
          url2={u2}
          url3={u3}
          url4={'https://www.amazon.in/Aromahpure-Refreshing-Perfume-Hanging-splash/dp/B0C4FL1G8J/ref=sr_1_1_sspa?keywords=Car+Air+Freshener&qid=1689356786&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
          item_name='Car Air Freshener'
          item_price='₹349'
          item_specs='Scent :	Lemon & Mint'
        />
        <Card url1={u4}
          url2={u5}
          url3={u6}
          url4={'https://www.amazon.in/ALTON-ALD905-SS-304-Kitchen-Brushed/dp/B0BV69L532/ref=sr_1_1_sspa?crid=3IC372UQZ8JBW&keywords=EKYLIP+Glass+Rinser&qid=1689356876&sprefix=ekylip+glass+rinser%2Caps%2C212&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
          item_name='EKYLIP Glass Rinser'
          item_price='₹3,100'
          item_specs='Material : SS-304 Grade, Finish: Brushed Nickel'
        />
        <Card url1={u7}
          url2={u8}
          url3={u9}
          url4={'https://www.amazon.in/LUBELA-Microfiber-Cleaning-Multipurpose-CAR/dp/B0C1BK5M7F/ref=sr_1_1_sspa?crid=4MGY70OAPD97&keywords=Proxism+Microfiber+Flexible+Duster+Car+Wash&qid=1689356913&replacementKeywords=proxism+microfiber+flexible+car+wash&sprefix=proxism+microfiber+flexible+duster+car+wash%2Caps%2C208&sr=8-1-spons&vehicle=Renault%3ADuster&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
          item_name='Proxism Microfiber Flexible Duster Car Wash'
          item_price=' ₹370'
          item_specs='Special Feature :	Extendable Handle, Washable'
        />
        <Card url1={u10}
          url2={u11}
          url3={u12}
          url4={'https://www.amazon.in/PTron-Bullet-Pro-Lightweight-Smartphones/dp/B07WG8PDCW/ref=sr_1_1_sspa?crid=2B0RDIMWCBCV9&keywords=pTron+Bullet+Quick+Charger&qid=1689356953&replacementKeywords=ptron+quick+charger&sprefix=ptron+bullet+quick+charger%2Caps%2C223&sr=8-1-spons&vehicle=Royal+Enfield%3ABULLET&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
          item_name="pTron Bullet  Quick Charger"
          item_price=' ₹299'
          item_specs='Special Feature	Multiple USB port, Fast Charging'
        />
      </div>
    </div>
  )
}

export default Accessories
