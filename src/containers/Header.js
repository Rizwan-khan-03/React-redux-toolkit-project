
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Menu } from 'semantic-ui-react'

export default function Header () {
  

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  
    const items = useSelector((state )=>state.cart)
    return (
      <div className="ui secondary  menu">
        <div className="left menu">
          <h2 className='item'>Redux Store</h2>
        </div>
        <div className="item">
         <Link className='navlink' to="/"><a className="item active"> Home</a></Link> 
         <Link className='navlink' to="/cart"><a className="item active"> Cart</a></Link> 
         <Link className='navlink' to="/Message"><a className="item active"> Message</a></Link> 
      
        </div>
      
      <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
          </div>
          <div className="item">
          <p>cart item :{items.length }</p>

          </div>
       </div>
</div>
    )
  }


