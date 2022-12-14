function exprenseDate(props){
    const options={
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const date = props.date.toLocaleString('en',options);
  

return  (<div> 
<div><h2>{date}</h2></div>
</div>);
};

export default exprenseDate;