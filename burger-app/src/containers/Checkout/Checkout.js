import React ,{ Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    componentDidMount () {
       this.props.onInitPurchase();
    }


   checkoutCancelledHandler = () => {
       this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
         this.props.history.replace('/checkout/contact-data');
    }

        render() {
            let summary = <Redirect to = "/"/>
            
            if(this.props.ings) {
                const purchasedRedirect = this.props.purchased ? <Redirect to = "/" /> : null;
                summary = (
                    <div>  
                           {purchasedRedirect}       
                          <CheckoutSummary 
                          ingredients={this.props.ings}
                          checkoutCancelled={this.checkoutCancelledHandler}
                          checkoutContinued={this.checkoutContinuedHandler}/>
                          <Route 
                          path={this.props.match.path + '/contact-data'}
                          component = {ContactData}/>
                    </div>
                   );
            }

            return summary;
        }
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        purchased : state.burgerBuilder.purchased
    };
};



export default connect(mapStateToProps)(Checkout);