import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const data = [
    { label: "Bar 1", value: 93 }
  ];
const PriceBar = () => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const width = `${total}%`;
    return (
        <div className="container h-25  bg-white priceBar mt-4">
        <p className='text-muted' style={{fontSize:'12px',fontWeight:'600'}}>Total Income</p>
    <h3 className="text-center my-4 " style={{fontWeight:'600',display:'inline'}}>$124,563.00</h3>
    <span className="badgeCustom mx-3">+6.9%</span>
    <div className="progress mt-4" style={{ height: "5px" }}>
      <div
        className="progress-bar "
        role="progressbar"
        style={{ width ,background:'#8127DE'}}
        aria-valuenow={total}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className="visually-hidden">{total}%</span>
      </div>
    </div>
    <span className='text-muted mt-3' style={{fontSize:'12px',fontWeight:'600'}}>Yearly Global</span>
  </div>
  )
}

export default PriceBar
