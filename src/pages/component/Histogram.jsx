import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';
const data = [
    { name: 'as', value: 50 },
    { name: 'sda', value: 10 },
    { name: 'h', value: 30 },
    { name: 'j', value: 150 },
    { name: 'fds', value: 50 },
    { name: 'jj', value: 90 },
    { name: 'oij', value: 70 },
    { name: 'kj', value: 20 },
    { name: 'hb', value: 80 },
    { name: 'hb', value: 30 },
    { name: 'gv', value: 60 },
    { name: 'iu', value: 90 },
    { name: 'iu', value: 110 },
    { name: 'iu', value: 80 },
  ];
const Histogram = () => {
  return (
    <div className="container histograph mt-4 ">
        <div className="row justify-content-between">
            <div className="col-3 mt-3 mx-4">
                <h2>Balance</h2>
            </div>
            <div className="col-3 mt-3">
                <select className='form-control ' style={{width:'120px'}} name="" id="">
                    <option value="">Monthly</option>
                    <option value="">Weekly</option>
                    <option value="">Daily</option>
                    <option value="">Yearly</option>
                </select>
            </div>
        </div>
        <hr />
        <div className="row justify-content-evenly ">
            <div className="col-5 box mt-4">
                <p className='text-muted mt-3'>Earnings</p>
                <h3>43.41%</h3>
                <span className='badgeCustom mx-3'> +13.5%</span>
            </div>
            <div className="col-5 box mt-4">
                <p className='text-muted mt-3'>Sales Value</p>
                <h3>$95,422</h3>
                <span className='badgeCustom mx-3'> +13.5%</span>
            </div>
        </div>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <Line type="linear" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ strokeWidth: 2, r: 3 }} activeDot={{ r: 6 }} />
        <Area type="linear" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Histogram
