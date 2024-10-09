import { useState,useEffect} from 'react'

import './App.css'

export function App() {
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  function increase(){
    setCount1(c=>c+1)
  }
  function decrease(){
    setCount2(c=>c-1)
  }
  

  return <div>
    <Counter count1 = {count1} count2 = {count2}/>
    <button onClick = {increase}>Increase Count</button>
    <button onClick = {decrease}>Decrease Count</button>
  </div>
    
   
  
}
function Counter(props){

  useEffect(function(){
    console.log('kgf')
    return function(){
      console.log('fgh')
    }

      

    


  },[props.count1])





  return <div>
    Counter1 {props.count1}<br/>
    Counter2 {props.count2}<br/>
  </div>

}


export default App
 