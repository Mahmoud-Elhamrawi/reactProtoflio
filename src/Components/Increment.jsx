const Increment = (props)=>{

function changee()
{
    props.setNum(props.Num +1)
}

  return (<>
     <button onClick={ changee}  className="btn btn-info p-3 me-5">+</button>
   </>
 
  )


}

export default Increment;