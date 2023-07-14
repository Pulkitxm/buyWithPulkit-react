import React from 'react';

import Card from '../../components/Card';

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
    <>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" style={{ cursor: "pointer" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Explore</li>
            <li className="breadcrumb-item active" aria-current="page">Smartphones</li>
          </ol>
        </a>
        <ul className="nav nav-pills">
          <li className="navbar-brand nav-item">
            <a className="nav-link disabled" href="/smartphones">
              Smartphones
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/accessories">
              Accessories
            </a>
          </li>
          <li className="navbar-brand nav-item">
            <a className="nav-link" href="/clothing">
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
            url4={'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?keywords=iphone+14&qid=1689354988&sr=8-3'}
            item_name='Iphone 14'
            item_price='₹66,999'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=3HVR58U52T0XP&keywords=OnePlus+Nord+CE+2+Lite+5G&qid=1689355023&sprefix=iphone+14%2Caps%2C274&sr=8-4'}
            item_name='OnePlus Nord CE 2 Lite 5G'
            item_price='₹18,499'
            item_specs='6gb/8gb RAM , 128gb'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN4D512/ref=sr_1_4?crid=GVW6Q00EVVX2&keywords=Redmi+12C&qid=1689355056&sprefix=redmi+12c%2Caps%2C219&sr=8-4'}
            item_name='Redmi 12C'
            item_price='₹8,499'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u10}
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
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?keywords=iphone+14&qid=1689354988&sr=8-3'}
            item_name='Iphone 14'
            item_price='₹66,999'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=3HVR58U52T0XP&keywords=OnePlus+Nord+CE+2+Lite+5G&qid=1689355023&sprefix=iphone+14%2Caps%2C274&sr=8-4'}
            item_name='OnePlus Nord CE 2 Lite 5G'
            item_price='₹18,499'
            item_specs='6gb/8gb RAM , 128gb'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN4D512/ref=sr_1_4?crid=GVW6Q00EVVX2&keywords=Redmi+12C&qid=1689355056&sprefix=redmi+12c%2Caps%2C219&sr=8-4'}
            item_name='Redmi 12C'
            item_price='₹8,499'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u10}
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
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?keywords=iphone+14&qid=1689354988&sr=8-3'}
            item_name='Iphone 14'
            item_price='₹66,999'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=3HVR58U52T0XP&keywords=OnePlus+Nord+CE+2+Lite+5G&qid=1689355023&sprefix=iphone+14%2Caps%2C274&sr=8-4'}
            item_name='OnePlus Nord CE 2 Lite 5G'
            item_price='₹18,499'
            item_specs='6gb/8gb RAM , 128gb'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN4D512/ref=sr_1_4?crid=GVW6Q00EVVX2&keywords=Redmi+12C&qid=1689355056&sprefix=redmi+12c%2Caps%2C219&sr=8-4'}
            item_name='Redmi 12C'
            item_price='₹8,499'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u10}
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
          <Card url1={u1}
            url2={u2}
            url3={u3}
            url4={'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?keywords=iphone+14&qid=1689354988&sr=8-3'}
            item_name='Iphone 14'
            item_price='₹66,999'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u4}
            url2={u5}
            url3={u6}
            url4={'https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=3HVR58U52T0XP&keywords=OnePlus+Nord+CE+2+Lite+5G&qid=1689355023&sprefix=iphone+14%2Caps%2C274&sr=8-4'}
            item_name='OnePlus Nord CE 2 Lite 5G'
            item_price='₹18,499'
            item_specs='6gb/8gb RAM , 128gb'
          />
          <Card url1={u7}
            url2={u8}
            url3={u9}
            url4={'https://www.amazon.in/Redmi-Storage-Performance-Mediatek-Display/dp/B0BYN4D512/ref=sr_1_4?crid=GVW6Q00EVVX2&keywords=Redmi+12C&qid=1689355056&sprefix=redmi+12c%2Caps%2C219&sr=8-4'}
            item_name='Redmi 12C'
            item_price='₹8,499'
            item_specs='128gb 256gb 512gb'
          />
          <Card url1={u10}
            url2={u11}
            url3={u12}
            url4={'https://www.amazon.in/realme-Segment-Fastest-Charging-High-res/dp/B0BZ466BWW/ref=sr_1_4?crid=2GUOZFY16RG6K&keywords=realme+narzo+N55&qid=1689355117&sprefix=realme+narzo+n55%2Caps%2C219&sr=8-4'}
            item_name='realme narzo N55 '
            item_price='₹10,999'
            item_specs='4gb Ram+64 gb 6gb Ram + 128 gb'
          />
        </div>
      </div>


    </>
  );
}

export default Smartphones;

