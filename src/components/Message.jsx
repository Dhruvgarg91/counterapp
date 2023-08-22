export const Message = ({msg,classname}) => {
    const myclassname = `${classname} text-center`
  return (<h2 className={myclassname}>{msg}</h2>);
};
