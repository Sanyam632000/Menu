import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data.js'
import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';


function OverAllMenu(){
  return<>
  <Header/>
  <Menu/>
  </>
  
}



/*const Menu =()=>{
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
}*/

/*const AllMenu =({id,title,category,price,img,desc})=>{

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
}*/



ReactDOM.render(<OverAllMenu/>,document.getElementById('root'));
