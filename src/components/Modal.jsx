import classes from './Modal.module.css';
import {useNavigate} from "react-router-dom";


function Modal({children, onClose}) {
    const navigate = useNavigate(); // Returns a function
    function closeHandler() {
        navigate('..');  // can do .. (Go up one to Parent)
    }
    return <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;