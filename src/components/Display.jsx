import styles from './Display.module.css'
const Display=({inputValue})=>{
  return <input className={styles.display} type='text' value={inputValue} readOnly />};


  export default Display;