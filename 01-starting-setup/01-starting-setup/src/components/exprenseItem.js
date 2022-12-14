import "./exprenseItem.css";
import exprenseDate from './components/exprenseDate';
// από αυτή την function παίρνω την μορφή που θα έχει 
// το κάθε κουτάκι και δηλώνω μεταβλητές όπου οι τιμές τους αναφέρονται
// στο αρχείο app.js
function ExpenseItem (props){
    
    return  <div className="expense-item ">
        <exprenseDate date={props.date}/>
        <div className="expense-item__description">
            <p><strong>{props.title}</strong></p>
            <div className="expense-item__price ">${props.amount}</div>
            </div>
        
        </div> 
};
export default ExpenseItem ; 