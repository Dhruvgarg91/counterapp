import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>
{
    return (
        <div className="container">
            <Message classname='alert alert-danger'msg = "CounterApp"/>
            <Message classname='alert alert-success'msg = "CounterValue is: "/>
            <Button classname='btn btn-success me-2' value = '+'/>
            <Button classname='btn btn-danger' value = '-'/>
        </div>
    )
}