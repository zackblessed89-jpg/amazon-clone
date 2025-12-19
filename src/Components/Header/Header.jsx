import React from 'react';
import {Link} from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";


const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Seattle</span>
              </div>
            </div>
          </div>
          {/* Search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20240524035322"
                alt=""
              />
              <select name= "" id=''>
                <option value="">EN</option>
              </select>
              </Link>


            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* Orders */}
            <Link to="/Orders">
              <p> Returns</p>
              <span> & orders</span>
            </Link>
            {/* cart */}
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;


