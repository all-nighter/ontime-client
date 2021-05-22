import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IQNkOKRDMM110U39Lv2tOjtja3uzgqrstVj4KSlE29RbiBf4vjjbVwIbZ3z78P5VxY6NrVbL6i8T0Ppn2V8Q48k0029IxLfUI',
);

function App() {
  const useStyles = makeStyles((theme) => ({}));
  const stripe = useStripe();
  const handlePayment = () => {
    fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        priceId: 'price_1Iq9srKRDMM110U3QOtGdA4b',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        stripe.redirectToCheckout({
          sessionId: json.sessionId,
        });
      });
  };
  return (
    <React.Fragment>
      {/* <AppBar>
        <Toolbar>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar> */}
      <Grid>
        {/* <Typography>Hello</Typography> */}
        <Button onClick={handlePayment}>Pay</Button>
      </Grid>
    </React.Fragment>
  );
}

const StripeElementWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  );
};

export default StripeElementWrapper;
