const Mensaje = (props) => {
    console.log(props);
    return <div style={{color: props.color}}> {props.message} </div>
  }

  
  export default Mensaje;