import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog,BiLogOut } from "react-icons/bi";
import { AiFillHeart,AiOutlineDashboard,AiFillSetting, AiOutlineUnorderedList,AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck ,BsInboxes,BsGlobe} from "react-icons/bs";
import {RiUserShared2Line} from 'react-icons/ri'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {SiGoogletagmanager} from 'react-icons/si'
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      }
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ]
  },
  {
    path: "/users",
    name: "Discover",
    icon: <BsGlobe />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      }
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ]
  },
  {
    path: "/messages",
    name: "Users",
    icon: <RiUserShared2Line />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      }
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ]
  },
  {
    path: "/analytics",
    name: "Documents",
    icon: <BiAnalyse />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      }
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ]
  },
  {
    path: "/file-manager",
    name: "Application",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Pages",
    icon: <BsCartCheck />,
    subRoutes:[
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      }
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      ,
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
    ]
  },
  {
    path: "/settings",
    name: "Support Center",
    icon: <BiCog />,
    exact: true
  },
  {
    path: "/Inbox",
    name: "Inbox",
    icon: <BsInboxes />,
  },
  {
    path: "/File-manager",
    name: "File Manager",
    icon: <SiGoogletagmanager />,
  },
  {
    path: "/data-list",
    name: "Data List",
    icon: <AiOutlineUnorderedList />,
  },
  ,
  {
    path: "/setting",
    name: "Settings",
    icon: <AiFillSetting />,
  },
  ,
  {
    path: "/log-out",
    name: "Log Out",
    icon: <BiLogOut />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
              
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
      
            <AnimatePresence>
              {isOpen && (
            <motion.h3>
          Artemis
            </motion.h3>
              )}
            </AnimatePresence>
          </div>
          <section className="routes mt-1">
            {isOpen?
<span className="text-muted mx-3" style={{fontSize:'12px'}} >MAIN</span>
:""
            }
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                  );
         
              }
else{
if (index==6) {
  return(

    isOpen?
    <span className="text-muted mt-4 mx-3" style={{fontSize:'12px'}} >Secondary</span>
    :""
    )
                
}

  return (
    
    <NavLink
                  to={route.path}
                  key={index}
                  className="link "
                  activeClassName="active"
                  >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            }
            })}
          </section>
        </motion.div>

        <main className="w-100">{children}</main>
        </div>
    </>
  );
};

export default SideBar;
