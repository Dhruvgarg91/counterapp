export const Button = ({value,classname,fn}) =>
{
    const clicked = ()=>{
        fn(value);
        console.log('Clicked',value)
    }
    return(<button onClick ={ clicked}className={classname}>{value}</button>)
}