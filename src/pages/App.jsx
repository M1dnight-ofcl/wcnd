import { useState, useEffect, useRef, useCallback } from 'react';
import '../style/App.css';

function App() {
  const [ams,set_ams]=useState(false);
  useEffect(()=>{
    document.getElementById('moreappsmenu').className=`appsmenu_${ams}`
  },[ams])
  return (
    <>
      <div id="searchWrapper">
        <h1>
          <span id="w">W</span>
          <span id="c">c</span>
          <span id="n">n</span>
          <span id="d">d</span>
        </h1>
        <p>Webcache Never Dies</p>
        <input
          type="input" 
          name="search" 
          id="search"
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              if(e.target.value.lastIndexOf("https://",0)===0
              ||e.target.value.lastIndexOf("http://",0)===0){
                window.location.href=`https://webcache.googleusercontent.com/search?q=cache:${e.target.value}`;
              } else { alert('This should be a valid url!') }
            }
          }}
          />
      </div>
      <div id="moreappsmenu" className='appsmenu_false'>
        <h1>More Apps by M1dnight</h1>
        <hr/>
        <a href="https://beansite.vercel.app">Beansite</a><br/>
        <a href="https://snackcentral.vercel.app">Snack Central</a><br/>
      </div>
      <div id="footer">
        <p id="moreapps" onClick={(e)=>{e.preventDefault(); set_ams(!ams);}}>More Apps by Me</p>
        <p id="info">v0.1 | M1dnight (c) 2024</p>
      </div>
    </>
  )
}

export default App
