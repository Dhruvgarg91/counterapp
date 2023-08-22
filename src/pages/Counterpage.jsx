import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>
{
    let count = 0;
    const setCount = (value)=>{
        if(value ==='+'){
            count++;
        }else{
            count--;
        }
        console.log('count is ',count)
    }
    return (
        <div className="container">
            <Message classname='alert alert-danger'msg = "CounterApp"/>
            <Message val = {count} classname='alert alert-success'msg = "CounterValue is: "/>
            <Button  fn = {setCount} classname='btn btn-success me-2' value = '+'/>
            <Button fn = {setCount} classname='btn btn-danger' value = '-'/>
        </div>
    )
}