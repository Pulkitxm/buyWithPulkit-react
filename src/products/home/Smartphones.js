import React from 'react';
import Card from '../../components/Card';

//images
import u1 from "../../assets/Products/Smartphones/iphone 14/2.webp";
import u2 from "../../assets/Products/Smartphones/iphone 14/2.webp";
import u3 from "../../assets/Products/Smartphones/iphone 14/3.webp";
import u4 from "../../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/1.webp";
import u5 from "../../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/2.webp";
import u6 from "../../assets/Products/Smartphones/OnePlus Nord CE 2 Lite 5G/3.webp";
import u7 from "../../assets/Products/Smartphones/Redmi 12C/1.jpg";
import u8 from "../../assets/Products/Smartphones/Redmi 12C/2.webp";
import u9 from "../../assets/Products/Smartphones/Redmi 12C/3.webp";
import u10 from "../../assets/Products/Smartphones/realme narzo N55/1.webp";
import u12 from "../../assets/Products/Smartphones/realme narzo N55/2.webp";
import u11 from "../../assets/Products/Smartphones/realme narzo N55/3.webp";

const Smartphones = () => {
  return (
    <div style={{ margin: 10 }}>
      <h2>Smartphones</h2>
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
        <Card url1={u1}
          url2={u2}
          url3={u3}
          url4={'/smartphones'}
          item_name='Iphone 14'
          item_price='₹66,999'
          item_specs='128gb 256gb 512gb'
        />
        <Card url1={u4}
          url2={u5}
          url3={u6}
          url4={'/smartphones'}
          item_name='OnePlus Nord CE 2 Lite 5G'
          item_price='₹18,499'
          item_specs='6gb/8gb RAM , 128gb'
        />
        <Card url1={u7}
          url2={u8}
          url3={u9}
          url4={'/smartphones'}
          item_name='Redmi 12C'
          item_price='₹8,499'
          item_specs='128gb 256gb 512gb'
        />
        <Card url1={u10}
          url2={u11}
          url3={u12}
          url4={'/smartphones'}
          item_name='realme narzo N55 '
          item_price='₹10,999'
          item_specs='4gb Ram+64 gb 6gb Ram + 128 gb'
        />
      </div>
    </div>
  )
}

export default Smartphones
