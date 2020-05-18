import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary = (porps) => {
         return (
         <div className={classes.CheckoutSummary}>
             <h1>We hope it tastes well!</h1>
             <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={porps.ingredients}/>   
             </div>
             <Button 
             btnType="Danger"
             clicked = {porps.checkoutCancelled}        
             >
                 CANCEL
             </Button>
             <Button 
             btnType="Success"
             clicked={porps.checkoutContinued}
             >
                 CONTINUE
             </Button>
          </div>

         );
}

export default checkoutSummary;