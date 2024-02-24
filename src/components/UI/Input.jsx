import classes from "./Input.module.css"
 function Inpit  (props) {
    return ( 
        <input {...props}type="text" className={classes.MyInput} />
     );
}

export default Inpit;