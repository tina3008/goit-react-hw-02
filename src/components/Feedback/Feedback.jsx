import css from './Feedback.module.css'

export default function Feedback ({feedback}){
//   const resetFeedback=()=>{
//     updateFeedback.state=[];     
// }
  
// console.log(Object.keys(feedback).length);

     return(
      
    <ul className={css.list}>
      <li>good: {feedback.good}</li>
      <li>neutral: {feedback.neutral}</li>
      <li>bad: {feedback.bad}</li>
    </ul>
         
         );
}