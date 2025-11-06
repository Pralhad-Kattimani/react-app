import React from 'react'

function alert(props) {
   /* {/*const capitalized = (word) =>{
         const lowercase = word.toLowerCase();
         return lowercase.charAT(0).toUpperCase() + lowercase.slice(1);
    }*/
  return (
    <div style={{height:'50px'}}>
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{props.alert.type}</strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default alert