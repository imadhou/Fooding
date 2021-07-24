import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = (props) =>{

    const [amountIsValid, setAmountIsValid] = useState(false);
    const amountInputRef = useRef();
    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const amountEntered = +enteredAmount;
        if(enteredAmount.trim().length === 0|| 
            amountEntered < 1|| 
            amountEntered > 5){
                setAmountIsValid(false);
                return;
        }

        props.onAddToCart(amountEntered);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input  
                ref={amountInputRef}
                label="Amount" 
                input={{
                id:'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Enter a valid amount (1-5)</p>}
        </form>
    )

}

export default MealItemForm