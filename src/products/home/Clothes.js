import React from 'react';
import Card from '../../components/Card';

//images
import u1 from "../../assets/Products/Clothes/Men Compression Pants/1.jpg";
import u2 from "../../assets/Products/Clothes/Men Compression Pants/2.jpg";
import u3 from "../../assets/Products/Clothes/Men Compression Pants/3.jpg";
import u4 from "../../assets/Products/Clothes/Men Compression T-Shirt/1.webp";
import u5 from "../../assets/Products/Clothes/Men Compression T-Shirt/2.jpg";
import u6 from "../../assets/Products/Clothes/Men Compression T-Shirt/3.jpg";
import u7 from "../../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/1.webp";
import u8 from "../../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/2.jpg";
import u9 from "../../assets/Products/Clothes/SOFTSPUN Microfiber Cloth/3.jpg";
import u10 from "../../assets/Products/Clothes/Women's Long Sleeve Ruched/1.jpg";
import u12 from "../../assets/Products/Clothes/Women's Long Sleeve Ruched/2.jpg";
import u11 from "../../assets/Products/Clothes/Women's Long Sleeve Ruched/3.jpg";

const Clothing = () => {
  return (
    <div style={{ margin: 10 }}>
      <h2>Clothing</h2>
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
        <Card url1={u1}
          url2={u2}
          url3={u3}
          url4={'/clothing'}
          item_name='Men Compression Pants'
          item_price='₹8315'
          item_specs='X S M L XL'
        />
        <Card url1={u4}
          url2={u5}
          url3={u6}
          url4={'/clothing'}
          item_name='Men Compression T-Shirt'
          item_price='₹245'
          item_specs='X S M L XL'
        />
        <Card url1={u7}
          url2={u8}
          url3={u9}
          url4={'/clothing'}
          item_name='SOFTSPUN Microfiber Cloth'
          item_price='₹314'
          item_specs='S M L XL 2XL'
        />
        <Card url1={u10}
          url2={u11}
          url3={u12}
          url4={'/clothing'}
          item_name="Women's Long Sleeve Ruched"
          item_price='₹5830'
          item_specs='S M'
        />
      </div>
    </div>
  )
}

export default Clothing
