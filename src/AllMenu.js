import React from 'react';
import data from './data';

const AllMenu =({id,title,category,price,img,desc})=>{

    return <div className='box'>

            <div className='img-left'>
              <img src={img}></img>
            </div> 

            <div className='text-right'>
              <h4>{title} <span>${price}</span> </h4>
              <hr/>
              <p>{desc}</p>
              
            </div>

          </div>
}

export default AllMenu;