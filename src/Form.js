import React, { useState } from 'react';

const Form = () => {
    const[name,setName] = useState("");
    const[pass,setPass] = useState("");
    const[nameErr, setNameErr] = useState(false);

    function get(e){
       e.preventDefault()
    }
    function nameHandle(e){
        let item = e.target.value;
        if(item.length < 3){
            setNameErr(true);
        }else{
            setNameErr(false);
        }
    }
  return (
    <div>
      <h1>Login</h1>
     <form onSubmit={get}>
     <input type="text" placeholder='enter name' onChange={nameHandle}/>{nameErr ? <span>User Not valid</span>:null}
      <br />
      <input type="password" placeholder='enter password' />
      <br />
      <button type="submit">click</button>
     </form>

    </div>
  )
}

export default Form
