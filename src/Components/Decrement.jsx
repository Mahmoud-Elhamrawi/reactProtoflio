const Decrement =(props)=>{

function  change(){
    if(props.Num >=1){props.setNum(props.Num-1)}
}


return (<>
   <button onClick={change}className="btn btn-danger ms-5 p-3">-</button>

</>)
}



export default Decrement