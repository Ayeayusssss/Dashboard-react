import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";
const data = [
    { label: "Bar 1", value: 40 },
    { label: "Bar 2", value: 60 },
    { label: "Bar 3", value: 20 },
    { label: "Bar 4", value: 80 },
    { label: "Bar 5", value: 30 },
    { label: "Bar 6", value: 50 },
  ];
const Bargraph = () => {
  return (
 <>
 
 <div className="container part1 mt-4 p-3">
    <p className='text-muted'>New Users</p>
      <h3 >94.3%</h3>
      <span className="badgeCustom mx-3">+6.9%</span>
      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="col-2 mb-4">
            <div className="bar-container">
              
              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{ height: `${item.value}%` }}
                ></div>
              </div>
              <div className="bar-value">{item.value}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
 </>
  )
}

export default Bargraph
