import { useState } from 'react';
import Images from "./components/Images/Images"
import './App.css';

function App() {
  const [cart, setcart] = useState([])
  const [count, setcount] = useState(1)
  const [invicible, setinvicible] = useState(false);
  const images = ['1.png', '2.png', '3.png', '4.png'];
  const [mainimg, setMainimg] = useState(images[0])
  const [secimg, setsecimg] = useState(images[0])
  const [show, setshow] = useState(false)
  
  const showhide = () => {
    setinvicible(!invicible);
  };

  const handeaddcart = () => {
    const cartinfo = {
      id: 1,
      title: 'Fall Limited Sneakers',
      price: 125,
    }
    cartinfo.total = cartinfo.price * count

    setcart([cartinfo])
  }

  const handledelete = (id) => {
    const empty = cart.filter(el => el.id !== id)
    setcart(empty)
    console.log("hello world")
  }


  return (
    <>
      <div className="header">
        <img className='logoname' src="/assets/sneakers 2.svg" alt="" />
        <h2 className='headerlink'>Collections</h2>
        <h2 className='headerlink'>Men</h2>
        <h2 className='headerlink'>Women</h2>
        <h2 className='headerlink'>About</h2>
        <h2 className='headerlink'>Contact</h2>
        <button className='cartbut' onClick={showhide}><img src="/assets/Group 14.svg" alt="" /></button>
        <img className='user' src="/assets/Oval.png" alt="" />
      </div>

      {invicible && (
        <div className='showhided' >
          <h3 className='cartname'>Cart</h3>
          {cart.map(el => (
            <div className='carting2' key={el.id}>
              <img className='cartimg' src="/assets/4.png" alt="" />
              <h2 className='title'> {el.title}</h2>
              <h2 className='price2'> {el.price} x {count}</h2>
              <h2 className='total'> ${el.total}</h2>
              <button className='deleting' onClick={() => handledelete(el.id)}> <img className='trash' src="/assets/trash.png" alt="" /></button>
            </div>
          ))}
        </div>
      )}
      <Images />
     
      <div className="carting">
        <button className='desc' onClick={() => {
          if (count > 1) {
            setcount(count - 1)
          }
        }}>-</button>
        <h2 className='much'>{count}</h2>
        <button className='ascend' onClick={() => setcount(count + 1)}>+</button>

        <button className='addto' onClick={handeaddcart}> <img className='minicart' src="/assets/Shape.png" alt="" />add to cart</button>

      </div>

    </>
  );
}

export default App;