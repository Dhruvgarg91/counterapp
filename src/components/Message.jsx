export const Message = ({msg,classname,val=undefined}) => {
    const myclassname = `${classname} text-center`
  return (<h2 className={myclassname}>{msg}{val}</h2>);
};
