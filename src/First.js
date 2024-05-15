import React, { useState } from 'react';

const First = () => {
 const [vechile,setVechile] = useState("");
 const [price,setPrice] = useState(null);
 const [data,setData] = useState("");
 const [check,setCheck] = useState(false);
  function get(e){
    console.log(data,vechile,price,check)
     e.preventDefault()
  }
  return (
    <div>
     <form onSubmit={get}>
      <input type="text" placeholder="enter name" onChange={(e)=>setData(e.target.value)} /><br /><br />
      <select onChange={(e)=>setVechile(e.target.value)}>
        <option>cars</option>
        <option>bikes</option>
        <option>cycles</option>
        <option>planes</option>
      </select><br /><br />
     
      <select onChange={(e)=>setPrice(e.target.value)}>
        <option>1 lakh</option>
        <option>2 lakhh</option>
        <option>3 lakh</option>
        <option>4 lakh</option>
      </select><br /><br />
      <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)} /><span>Accept terms and conditions</span><br /><br />
      <button type="submit">click</button><br /><br />
     </form>
    </div>
  )
}
export default First
