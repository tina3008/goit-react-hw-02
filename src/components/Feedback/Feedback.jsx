import css from './Feedback.module.css'

export default function Feedback ({feedback}){
   
  

     return(
      
    <ul className={css.list}>
      <li>good: {feedback.good}</li>
      <li>neutral: {feedback.neutral}</li>
      <li>bad: {feedback.bad}</li>
    </ul>
         
         );
}