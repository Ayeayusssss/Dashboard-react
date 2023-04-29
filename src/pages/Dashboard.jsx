import React from 'react'
import Bargraph from './component/Bargraph'
import PriceBar from './component/PriceBar'
import Histogram from './component/Histogram'
import TableData from './component/TableData'
const Dashboard = () => {
  return (
  <>
  <div className="container">
    <div className="row">
<div className="col-sm-5">
<PriceBar></PriceBar>
  <Bargraph></Bargraph>
</div>
<div className="col-sm-7">

  <Histogram></Histogram>
</div>
<div className="col-sm-12">
  <TableData></TableData>
</div>
    </div>
  </div>
  
  </>
  
    )
}

export default Dashboard
