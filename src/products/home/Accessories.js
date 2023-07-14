import React from 'react'
import Card from '../../components/Card'

const Accessories = () => {
  return (
    <div style={{ margin: 10 }}>
      <h1>Accessories</h1>
      <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 , display:'flex' , justifyContent:'center' ,flexWrap:'wrap' }} >
        <Card url1="../assets/Products/Smartphones/Galaxy M33 5G/1.jpg"
          url2="../../assets/Products/Smartphones/iphone 14/2.webp"
          url3="../../assets/Products/Smartphones/iphone 14/3.webp"
          item_name='Iphone 14'
          item_price='₹66,999'
          item_specs='128gb 256gb 512gb'
        />
        <Card url1="../assets/Products/Smartphones/Galaxy M33 5G/1.jpg"
          url2="../../assets/Products/Smartphones/iphone 14/2.webp"
          url3="../../assets/Products/Smartphones/iphone 14/3.webp"
          item_name='OnePlus Nord CE 2 Lite 5G'
          item_price='₹18,499'
          item_specs='6gb/8gb RAM , 128gb'
        />
        <Card url1="../assets/Products/Smartphones/Galaxy M33 5G/1.jpg"
          url2="../../assets/Products/Smartphones/iphone 14/2.webp"
          url3="../../assets/Products/Smartphones/iphone 14/3.webp"
          item_name='Redmi 12C'
          item_price='₹66,999'
          item_specs='128gb 256gb 512gb'
        />
        <Card url1="../assets/Products/Smartphones/Galaxy M33 5G/1.jpg"
          url2="../../assets/Products/Smartphones/iphone 14/2.webp"
          url3="../../assets/Products/Smartphones/iphone 14/3.webp"
          item_name='realme narzo N55 '
          item_price='₹10,999'
          item_specs='4gb Ram+64 gb 6gb Ram + 128 gb'
        />
      </div>
    </div>
  )
}

export default Accessories
