import React from 'react';
import OfferCard from '../components/OfferCard';

//images
import u1 from "../assets/Products/Smartphones/iphone 14/2.webp";
import u2 from "../assets/Products/Smartphones/iphone 14/2.webp";
import u3 from "../assets/Products/Smartphones/iphone 14/3.webp";
import u4 from "../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/1.webp";
import u5 from "../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/2.webp";
import u6 from "../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/3.webp";
import u7 from "../assets/Products/Smartphones/Redmi 12C/1.jpg";
import u8 from "../assets/Products/Smartphones/Redmi 12C/2.webp";
import u9 from "../assets/Products/Smartphones/Redmi 12C/3.webp";
import u10 from "../assets/Products/Smartphones/realme narzo N55/1.webp";
import u12 from "../assets/Products/Smartphones/realme narzo N55/2.webp";
import u11 from "../assets/Products/Smartphones/realme narzo N55/3.webp";
import u_1 from "../assets/Products/Accessories/Car Air Freshener/1.jpg";
import u_2 from "../assets/Products/Accessories/Car Air Freshener/2.webp";
import u_3 from "../assets/Products/Accessories/Car Air Freshener/3.webp";
import u_4 from "../assets/Products/Accessories/EKYLIP Glass Rinser/1.jpg";
import u_5 from "../assets/Products/Accessories/EKYLIP Glass Rinser/2.jpg";
import u_6 from "../assets/Products/Accessories/EKYLIP Glass Rinser/3.jpg";
import u_7 from "../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/1.jpg";
import u_8 from "../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/2.jpg";
import u_9 from "../assets/Products/Accessories//Proxism Microfiber Flexible Duster Car Wash/3.jpg";
import u_10 from "../assets/Products/Accessories/pTron Bullet  Quick Charger/1.webp";
import u_12 from "../assets/Products/Accessories/pTron Bullet  Quick Charger/2.jpg";
import u_11 from "../assets/Products/Accessories/pTron Bullet  Quick Charger/3.jpg";
import u__1 from "../assets/Products/Clothes/Men Compression Pants/1.jpg";
import u__2 from "../assets/Products/Clothes/Men Compression Pants/2.jpg";
import u__3 from "../assets/Products/Clothes/Men Compression Pants/3.jpg";
import u__4 from "../assets/Products/Clothes/Men Compression T-Shirt/1.webp";
import u__5 from "../assets/Products/Clothes/Men Compression T-Shirt/2.jpg";
import u__6 from "../assets/Products/Clothes/Men Compression T-Shirt/3.jpg";
import u__7 from "../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/1.webp";
import u__8 from "../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/2.jpg";
import u__9 from "../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/3.jpg";
import u__10 from "../assets/Products/Clothes/Women's Long Sleeve Ruched/1.jpg";
import u__12 from "../assets/Products/Clothes/Women's Long Sleeve Ruched/2.jpg";
import u__11 from "../assets/Products/Clothes/Women's Long Sleeve Ruched/3.jpg";

const Accessories = () => {
  return (
    <>
      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <OfferCard url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?keywords=iphone+14&qid=1689354988&sr=8-3'}
            item_name='Iphone 14'
            item_price='₹66,999'
            item_specs='128gb 256gb 512gb'
          />
          <OfferCard url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=3HVR58U52T0XP&keywords=OnePlus+Nord+CE+2+Lite+5G&qid=1689355023&sprefix=iphone+14%2Caps%2C274&sr=8-4'}
            item_name='OnePlus Nord CE 2 Lite 5G'
            item_price='₹18,499'
            item_specs='6gb/8gb RAM , 128gb'
          />
          <OfferCard url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN4D512/ref=sr_1_4?crid=GVW6Q00EVVX2&keywords=Redmi+12C&qid=1689355056&sprefix=redmi+12c%2Caps%2C219&sr=8-4'}
            item_name='Redmi 12C'
            item_price='₹8,499'
            item_specs='128gb 256gb 512gb'
          />
          <OfferCard url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/realme-Segment-Fastest-Charging-High-res/dp/B0BZ466BWW/ref=sr_1_4?crid=2GUOZFY16RG6K&keywords=realme+narzo+N55&qid=1689355117&sprefix=realme+narzo+n55%2Caps%2C219&sr=8-4'}
            item_name='realme narzo N55 '
            item_price='₹10,999'
            item_specs='4gb Ram+64 gb 6gb Ram + 128 gb'
          />
        </div>
      </div>

      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <OfferCard url1={u_1}
            url2={u_2}
            url3={u_3}
            url4={'https://www.amazon.in/Aromahpure-Refreshing-Perfume-Hanging-splash/dp/B0C4FL1G8J/ref=sr_1_1_sspa?keywords=Car+Air+Freshener&qid=1689356786&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Car Air Freshener'
            item_price='₹349'
            item_specs='Scent :	Lemon & Mint'
          />
          <OfferCard url1={u_4}
            url2={u_5}
            url3={u_6}
            url4={'https://www.amazon.in/ALTON-ALD905-SS-304-Kitchen-Brushed/dp/B0BV69L532/ref=sr_1_1_sspa?crid=3IC372UQZ8JBW&keywords=EKYLIP+Glass+Rinser&qid=1689356876&sprefix=ekylip+glass+rinser%2Caps%2C212&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='EKYLIP Glass Rinser'
            item_price='₹3,100'
            item_specs='Material : SS-304 Grade, Finish: Brushed Nickel'
          />
          <OfferCard url1={u_7}
            url2={u_8}
            url3={u_9}
            url4={'https://www.amazon.in/LUBELA-Microfiber-Cleaning-Multipurpose-CAR/dp/B0C1BK5M7F/ref=sr_1_1_sspa?crid=4MGY70OAPD97&keywords=Proxism+Microfiber+Flexible+Duster+Car+Wash&qid=1689356913&replacementKeywords=proxism+microfiber+flexible+car+wash&sprefix=proxism+microfiber+flexible+duster+car+wash%2Caps%2C208&sr=8-1-spons&vehicle=Renault%3ADuster&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Proxism Microfiber Flexible Duster Car Wash'
            item_price=' ₹370'
            item_specs='Special Feature :	Extendable Handle, Washable'
          />
          <OfferCard url1={u_10}
            url2={u_11}
            url3={u_12}
            url4={'https://www.amazon.in/PTron-Bullet-Pro-Lightweight-Smartphones/dp/B07WG8PDCW/ref=sr_1_1_sspa?crid=2B0RDIMWCBCV9&keywords=pTron+Bullet+Quick+Charger&qid=1689356953&replacementKeywords=ptron+quick+charger&sprefix=ptron+bullet+quick+charger%2Caps%2C223&sr=8-1-spons&vehicle=Royal+Enfield%3ABULLET&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name="pTron Bullet  Quick Charger"
            item_price=' ₹299'
            item_specs='Special Feature	Multiple USB port, Fast Charging'
          />
        </div>
      </div>
      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <OfferCard url1={u__1}
            url2={u__2}
            url3={u__3}
            url4={'https://www.amazon.in/ReDesign-Apparels-Nylon-Compression-Tights/dp/B07G87MBH9/ref=sr_1_1_sspa?crid=3SEN3D0PX14PX&keywords=Men+Compression+Pants&qid=1689355917&sprefix=usb+3+micro+b+to+usb+c%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression Pants'
            item_price='₹8315'
            item_specs='X S M L XL'
          />
          <OfferCard url1={u__4}
            url2={u__5}
            url3={u__6}
            url4={'https://www.amazon.in/PROSHARX-Compression-Sleeves-T-Shirts-Performance/dp/B0BNGJSBLH/ref=sr_1_1_sspa?crid=3L88K27J3JQTF&keywords=Men+Compression+T-Shirt&qid=1689356192&sprefix=men+compression+t-shirt%2Caps%2C231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression T-Shirt'
            item_price='₹245'
            item_specs='X S M L XL'
          />
          <OfferCard url1={u__7}
            url2={u__8}
            url3={u__9}
            url4={'https://www.amazon.in/SOFTSPUN-Microfiber-Cleaning-Multi-Color-Absorbent/dp/B081L7PDR2/ref=sr_1_1_sspa?crid=3SHYCVEYWQVUH&keywords=SOFTSPUN+Microfiber+Cloth&qid=1689356228&sprefix=softspun+microfiber+cloth%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='SOFTSPUN Microfiber Cloth'
            item_price='₹314'
            item_specs='S M L XL 2XL'
          />
          <OfferCard url1={u__10}
            url2={u__11}
            url3={u__12}
            url4={'https://www.amazon.in/Cachet-Womens-Sleeve-Ruched-Taupe/dp/B0757P781P/ref=sr_1_1?crid=AB2FMO30HSF9&keywords=Women%27s+Long+Sleeve+Ruched%5C&qid=1689356242&sprefix=women%27s+long+sleeve+ruched%2Caps%2C209&sr=8-1'}
            item_name="Women's Long Sleeve Ruched"
            item_price='₹5830'
            item_specs='S M'
          />
        </div>
      </div>
    </>
  )
}

export default Accessories
