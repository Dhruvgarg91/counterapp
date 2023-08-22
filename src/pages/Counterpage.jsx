import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>
{
    const[count,setCount]=useState(0);
    // let count = 0;
    const updateCount = (value)=>{
        if(value ==='+'){
            setCount(count+1);
        }else{
            setCount(count-1);
        }
    }
    return (
        <div className="container">
            <Message classname='alert alert-danger'msg = "CounterApp"/>
            <Message val = {count} classname='alert alert-success'msg = "CounterValue is: "/>
            <Button  fn = {updateCount} classname='btn btn-success me-2' value = '+'/>
            <Button fn = {updateCount} classname='btn btn-danger' value = '-'/>
        </div>
    )
}