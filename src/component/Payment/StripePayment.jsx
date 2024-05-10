import React from 'react'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const StripePayment = ({stripeKey}) => {
    const stripePromise = loadStripe(stripeKey);
    return (
        <div>
           {stripeKey && <Elements stripe={stripePromise}>
                <Payment />
            </Elements>}
        </div>
    )
}

export default StripePayment