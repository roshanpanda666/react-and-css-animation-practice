import { useState } from 'react';
import './App.css';
<script src="https://kit.fontawesome.com/1e9eb37e8c.js" crossorigin="anonymous"></script>
function App() {
  const[ico,icoani]=useState("icopre")
  const anime=()=>{
    icoani("icofather")
  }
  return (
    <>
    <div className="father">
     
        <div className="lines">
          <div className='normal'>

          
            <div className={ico}>
              <div className="ico0">

              </div>
              <div className="ico1">

              </div>
              <div className="ico2">

              </div>
              <div className="ico3">

              </div>
            </div>
          </div>
          
          <button className="roundbtn" onClick={anime}>〇</button>
        </div>
      </div>
    
      
    </>
  );
}

export default App;
