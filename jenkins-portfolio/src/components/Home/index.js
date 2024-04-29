import React from 'react'
import './style.css'
export const Home = () => {
  return (
  <section className='main'>

    <div className='intro-wrapper'>
      <h1 className='intro-title'><a id='intro'/>Hi I'm,<br/>Nathan Jenkins </h1>
      <p className='intro-description'>I am a Full-stack web-developer based in Perth, WA. New to the game, eager to take on the next challenge</p>
      <button className='intro-btn'><a href='#contact'></a>Let's chat</button>

    <li className='icon-list'>
      <img className='icon-img' src='https://cdn-icons-png.flaticon.com/128/1051/1051277.png'></img>
      <img className='icon-img' src='https://cdn-icons-png.flaticon.com/128/732/732190.png'></img>
      <img className='icon-img' src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png'></img>
      <img className='icon-img' src='https://cdn-icons-png.flaticon.com/128/1260/1260667.png'></img>
      <img className='icon-img' src='https://cdn-icons-png.flaticon.com/128/5968/5968322.png'></img>
    </li>
    
    </div>

    {/* <p>New to the game and ready to shine. I offer a hardworking, focused and easy-going attitude. I am just a baby in the industry who is ready to be moulded into whatever tech you need me in. My devotion to the art will be sure to impress.</p> */}
   {/* <a href='#about' id='about' >About</a> 
   <a href='#about' id='projects' >Projects</a> 
   <a href='#about' id='contact' >Contact</a> 
   <a href='#about' id='about' >Resume</a>  */}
  </section>  
  )
}

