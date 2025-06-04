import { useState } from 'react'
import styles from './Buttons.module.css'
import Display from './Display'

const Buttons=({onButtonClicked})=>{
  let buttonList=['C','1','2','+','3','4','-','5','6','*','7','8','=','9','0','.']
  
  return <div className={styles.buttonsContainer}>
     {buttonList.map((buttonName)=>(
      <button key={buttonName} className={styles.button} onClick={()=>onButtonClicked(buttonName)}>{buttonName}</button>))}
    </div>
}
export default Buttons;