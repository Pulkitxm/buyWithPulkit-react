import React from 'react';

import Card from '../../components/Card';

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
    <>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" style={{ cursor: "pointer" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Explore</li>
            <li className="breadcrumb-item active" aria-current="page">Clothing</li>
          </ol>
        </a>
        <ul className="nav nav-pills">
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/smartphones">
              Smartphones
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/accessories">
              Accessories
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link disabled" href="/clothing">
              Clothing
            </a>
          </li>
        </ul>
      </nav>

      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/ReDesign-Apparels-Nylon-Compression-Tights/dp/B07G87MBH9/ref=sr_1_1_sspa?crid=3SEN3D0PX14PX&keywords=Men+Compression+Pants&qid=1689355917&sprefix=usb+3+micro+b+to+usb+c%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression Pants'
            item_price='₹8315'
            item_specs='X S M L XL'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/PROSHARX-Compression-Sleeves-T-Shirts-Performance/dp/B0BNGJSBLH/ref=sr_1_1_sspa?crid=3L88K27J3JQTF&keywords=Men+Compression+T-Shirt&qid=1689356192&sprefix=men+compression+t-shirt%2Caps%2C231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression T-Shirt'
            item_price='₹245'
            item_specs='X S M L XL'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/SOFTSPUN-Microfiber-Cleaning-Multi-Color-Absorbent/dp/B081L7PDR2/ref=sr_1_1_sspa?crid=3SHYCVEYWQVUH&keywords=SOFTSPUN+Microfiber+Cloth&qid=1689356228&sprefix=softspun+microfiber+cloth%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='SOFTSPUN Microfiber Cloth'
            item_price='₹314'
            item_specs='S M L XL 2XL'
          />
          <Card url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/Cachet-Womens-Sleeve-Ruched-Taupe/dp/B0757P781P/ref=sr_1_1?crid=AB2FMO30HSF9&keywords=Women%27s+Long+Sleeve+Ruched%5C&qid=1689356242&sprefix=women%27s+long+sleeve+ruched%2Caps%2C209&sr=8-1'}
            item_name="Women's Long Sleeve Ruched"
            item_price='₹5830'
            item_specs='S M'
          />
        </div>
      </div><div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/ReDesign-Apparels-Nylon-Compression-Tights/dp/B07G87MBH9/ref=sr_1_1_sspa?crid=3SEN3D0PX14PX&keywords=Men+Compression+Pants&qid=1689355917&sprefix=usb+3+micro+b+to+usb+c%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression Pants'
            item_price='₹8315'
            item_specs='X S M L XL'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/PROSHARX-Compression-Sleeves-T-Shirts-Performance/dp/B0BNGJSBLH/ref=sr_1_1_sspa?crid=3L88K27J3JQTF&keywords=Men+Compression+T-Shirt&qid=1689356192&sprefix=men+compression+t-shirt%2Caps%2C231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression T-Shirt'
            item_price='₹245'
            item_specs='X S M L XL'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/SOFTSPUN-Microfiber-Cleaning-Multi-Color-Absorbent/dp/B081L7PDR2/ref=sr_1_1_sspa?crid=3SHYCVEYWQVUH&keywords=SOFTSPUN+Microfiber+Cloth&qid=1689356228&sprefix=softspun+microfiber+cloth%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='SOFTSPUN Microfiber Cloth'
            item_price='₹314'
            item_specs='S M L XL 2XL'
          />
          <Card url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/Cachet-Womens-Sleeve-Ruched-Taupe/dp/B0757P781P/ref=sr_1_1?crid=AB2FMO30HSF9&keywords=Women%27s+Long+Sleeve+Ruched%5C&qid=1689356242&sprefix=women%27s+long+sleeve+ruched%2Caps%2C209&sr=8-1'}
            item_name="Women's Long Sleeve Ruched"
            item_price='₹5830'
            item_specs='S M'
          />
        </div>
      </div><div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/ReDesign-Apparels-Nylon-Compression-Tights/dp/B07G87MBH9/ref=sr_1_1_sspa?crid=3SEN3D0PX14PX&keywords=Men+Compression+Pants&qid=1689355917&sprefix=usb+3+micro+b+to+usb+c%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression Pants'
            item_price='₹8315'
            item_specs='X S M L XL'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/PROSHARX-Compression-Sleeves-T-Shirts-Performance/dp/B0BNGJSBLH/ref=sr_1_1_sspa?crid=3L88K27J3JQTF&keywords=Men+Compression+T-Shirt&qid=1689356192&sprefix=men+compression+t-shirt%2Caps%2C231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression T-Shirt'
            item_price='₹245'
            item_specs='X S M L XL'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/SOFTSPUN-Microfiber-Cleaning-Multi-Color-Absorbent/dp/B081L7PDR2/ref=sr_1_1_sspa?crid=3SHYCVEYWQVUH&keywords=SOFTSPUN+Microfiber+Cloth&qid=1689356228&sprefix=softspun+microfiber+cloth%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='SOFTSPUN Microfiber Cloth'
            item_price='₹314'
            item_specs='S M L XL 2XL'
          />
          <Card url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/Cachet-Womens-Sleeve-Ruched-Taupe/dp/B0757P781P/ref=sr_1_1?crid=AB2FMO30HSF9&keywords=Women%27s+Long+Sleeve+Ruched%5C&qid=1689356242&sprefix=women%27s+long+sleeve+ruched%2Caps%2C209&sr=8-1'}
            item_name="Women's Long Sleeve Ruched"
            item_price='₹5830'
            item_specs='S M'
          />
        </div>
      </div><div style={{ margin: 10 }}>
        <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/ReDesign-Apparels-Nylon-Compression-Tights/dp/B07G87MBH9/ref=sr_1_1_sspa?crid=3SEN3D0PX14PX&keywords=Men+Compression+Pants&qid=1689355917&sprefix=usb+3+micro+b+to+usb+c%2Caps%2C223&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression Pants'
            item_price='₹8315'
            item_specs='X S M L XL'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/PROSHARX-Compression-Sleeves-T-Shirts-Performance/dp/B0BNGJSBLH/ref=sr_1_1_sspa?crid=3L88K27J3JQTF&keywords=Men+Compression+T-Shirt&qid=1689356192&sprefix=men+compression+t-shirt%2Caps%2C231&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='Men Compression T-Shirt'
            item_price='₹245'
            item_specs='X S M L XL'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/SOFTSPUN-Microfiber-Cleaning-Multi-Color-Absorbent/dp/B081L7PDR2/ref=sr_1_1_sspa?crid=3SHYCVEYWQVUH&keywords=SOFTSPUN+Microfiber+Cloth&qid=1689356228&sprefix=softspun+microfiber+cloth%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'}
            item_name='SOFTSPUN Microfiber Cloth'
            item_price='₹314'
            item_specs='S M L XL 2XL'
          />
          <Card url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/Cachet-Womens-Sleeve-Ruched-Taupe/dp/B0757P781P/ref=sr_1_1?crid=AB2FMO30HSF9&keywords=Women%27s+Long+Sleeve+Ruched%5C&qid=1689356242&sprefix=women%27s+long+sleeve+ruched%2Caps%2C209&sr=8-1'}
            item_name="Women's Long Sleeve Ruched"
            item_price='₹5830'
            item_specs='S M'
          />
        </div>
      </div>
      

    </>
  );
}

export default Clothing;
