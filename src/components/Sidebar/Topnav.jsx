import React,{useState} from "react";
import { BiSearch } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topnav container-fluid">
      <div className="row h-100 justify-content-evenly align-items-center">
        <div className="col-sm-7  d-flex align-items-center ">
          <BiSearch
            style={{ fontSize: "30px", color: "#7F8EA1", marginTop: "1px" }}
          />
          <input
            type="search"
            style={{ border: "none" }}
            className=" mx-2 form-control"
            placeholder="Type to search ..."
          />
        </div>
        <div className="col-sm-2 d-flex justify-content-evenly ">
          <AiFillSetting  style={{ color: "#C8CED7",fontSize:'22px' }} />
          <RiMessage2Fill style={{ color: "#C8CED7",fontSize:'22px' }} />
          <BsFillBellFill  style={{ color: "#C8CED7" ,fontSize:'22px'}} />
        </div>
      <div className="col-sm-3">
        <div className="row">
          <div className="col-5  topNavText">
            <span className="one">Thomas Brown </span>
            <span className=" two text-muted">Developer </span>
          </div>
          <div className="col-7">
      
            <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle tag="span" onClick={toggle}>
        <img src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=400" className="img-fluid rounded-circle profileImg" alt="Profile"   />
      </DropdownToggle>
      <DropdownMenu right className="mt-3">
        <DropdownItem header>Profile Options</DropdownItem>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem>Edit Profile</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Topnav;
