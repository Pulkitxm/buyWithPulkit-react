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
          url4={'/accessories'}
          item_name='Car Air Freshener'
          item_price='₹349'
          item_specs='Scent :	Lemon & Mint'
        />
        <Card url1={u4}
          url2={u5}
          url3={u6}
          url4={'/accessories'}
          item_name='EKYLIP Glass Rinser'
          item_price='₹3,100'
          item_specs='Material : SS-304 Grade, Finish: Brushed Nickel'
        />
        <Card url1={u7}
          url2={u8}
          url3={u9}
          url4={'/accessories'}
          item_name='Proxism Microfiber Flexible Duster Car Wash'
          item_price=' ₹370'
          item_specs='Special Feature :	Extendable Handle, Washable'
        />
        <Card url1={u10}
          url2={u11}
          url3={u12}
          url4={'/accessories'}
          item_name="pTron Bullet  Quick Charger"
          item_price=' ₹299'
          item_specs='Special Feature	Multiple USB port, Fast Charging'
        />
      </div>
    </div>
  )
}

export default Accessories
