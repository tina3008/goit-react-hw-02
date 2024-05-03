import css from './Options.module.css'


export default function Options({good, neutral, bad}){
return(
    <div className={css.buttonsBlock}>
       <button className={css.button} onClick={good}>good</button>
        <button className={css.button} onClick={neutral}>neutral</button>
        <button className={css.button} onClick={bad}>bad</button> 
      
    </div>
);
}