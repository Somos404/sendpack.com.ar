import React from 'react';
import './animacion.css'

function Loader() {
  
  const placeholder = () => {
    setTimeout(function(){
      setTimeout(function(){
        let spinner = document.querySelector('#placeholder');
        spinner.style.display = 'none';
      }, 1000); 
      let fadeTarget = document.getElementById('placeholder');
      let fadeEffect = setInterval(function () {
          if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
          }
          if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
          } else {
            clearInterval(fadeEffect);
          }
        }, 50);
      }, 1000);
    };
  window.onload = function() {
    placeholder();
  };
  return(
    <div id='placeholder' className='position-fixed'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='spinner-border text-normal' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader;