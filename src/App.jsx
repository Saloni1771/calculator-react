import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {
  const [textShown,setTextAdd]=useState("");
  const onButtonClicked=(buttonText)=>{
    if (buttonText==="C"){
      setTextAdd('');
    }
    else if (buttonText==="="){
      const result=eval(textShown);
      setTextAdd(result)
    }
    else{
      const newDisplayValue=textShown+buttonText;
      setTextAdd(newDisplayValue);
    }
  }
  return <div className={styles.calculator}>
    <Display inputValue={textShown}/>
  <Buttons onButtonClicked={onButtonClicked}>

  </Buttons>
  </div>
}

export default App
