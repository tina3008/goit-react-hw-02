import css from './Options.module.css'


export default function Options({updateFeedback}){
return(
    <div className={css.buttonsBlock}>
       <button className={css.button} onClick={() => updateFeedback("good")}>good</button>
       <button className={css.button} onClick={() => updateFeedback("neutral")}>neutral</button>
       <button className={css.button} onClick={() => updateFeedback("bad")}>bad</button>

      
    </div>
);
}