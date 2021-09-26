import React from 'react';
import data from './data';
import AllMenu from './AllMenu' 

const Menu =()=>{
    const [menu,setMenu] = React.useState(data);
  
    const Breakfast =() =>{
     let menu = data;
      let breakfast = menu.filter((dish) => dish.category === 'breakfast')
      setMenu(breakfast); 
    }
  
    const Lunch =() =>{
      let menu = data;
      let lunch = menu.filter((dish) => dish.category === 'lunch')
      setMenu(lunch); 
    }
  
    const Shakes =() =>{
      let menu = data;
      let shakes = menu.filter((dish) => dish.category === 'shakes')
      setMenu(shakes); 
    }
  
    return <>
      <div className='buttons'>
      <button className='btn' onClick={()=>setMenu(data)}>All</button>
      <button className='btn' onClick={()=>Breakfast()}>Breakfast</button>
      <button className='btn' onClick={() => Lunch()}>Lunch</button>
      <button className='btn'onClick={() => Shakes()}>Shakes</button>
      </div>
  
          <div className='dish container'>
            {menu.map((dish) =>{
              return   <AllMenu key={dish.id} { ...dish } ></AllMenu>  
            })}
  
          </div>
    </> 
  }

  export default Menu;