import React, { useState } from 'react';
import { Table, Nav, NavItem, NavLink } from 'reactstrap';
const data = [
  { id: 1, date: '2022-01-01', description: 'Product 1', status: 'Completed',price:'300.00' },
  { id: 2, date: '2022-01-02', description: 'Product 2', status: 'Completed',price:'300.00' },
    { id: 3, date: '2022-01-03', description: 'Product 3', status: 'Completed',price:'300.00' },
    { id: 4, date: '2022-01-04', description: 'Product 4', status: 'Completed',price:'300.00' },
  ];
const TableData = () => {
    const [activeTab, setActiveTab] = useState('incoming');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
    <Nav tabs>
      <NavItem>
        <NavLink className={activeTab === 'incoming' ? 'active' : ''} onClick={() => { toggleTab('incoming'); }}>Incoming</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={activeTab === 'invoices' ? 'active' : ''} onClick={() => { toggleTab('invoices'); }}>Invoices</NavLink>
      </NavItem>
    </Nav>

    <Table striped>
      <thead>
        <tr>
          <th></th>
          <th>Invoice ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Prices</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
            <td><input type="checkbox" /></td>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td> <span className='badgeCustom'> {item.status}</span></td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}

export default TableData
