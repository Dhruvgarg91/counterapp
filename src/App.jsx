import React from "react";

const App = () => {
  const logic =()=>{
    if(role==='admin'){
      return <h3>welcome {role}</h3>
    }else{
      return <h3>goood {role}</h3>
    }
  }
  
  const name='dhruv';
  const role = 'manager';
  return <><h1>hvvj{name}</h1>
  {/* <p>{role==="admin"?'elcome':'vfh'}</p> */}
  {logic()}
  <h2>vfshbvfbh{Date.now()}</h2></>;
};

export default App;
