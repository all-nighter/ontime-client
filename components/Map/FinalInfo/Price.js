import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import Styles from './final.module.css';
import { API_PREFIX } from '../../../env.js';

import MapContext from '../MapContext';

import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51IQNkOKRDMM110U39Lv2tOjtja3uzgqrstVj4KSlE29RbiBf4vjjbVwIbZ3z78P5VxY6NrVbL6i8T0Ppn2V8Q48k0029IxLfUI',
);

const Price = () => {
  const [submission, setSubmission] = useState({
    ...MapContext.getMapContext(),
  });


  MapContext.renderSubmit = () => {
      console.log('being rendered')
        setSubmission({ ...submission, ...MapContext.getMapContext() });
  };

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

  const handleSubmit = async () => {


    const params = {
      ...submission,
      estimatedTimeSeconds: MapContext.getMapContext().estimatedTimeSeconds,
      email: localStorage.getItem('email'),
    };
     console.log(params)

    let response = await fetch(`${API_PREFIX}/user/subscription`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    response = await response.json();

    console.log(response);

    if (response._id) {
      handlePayment();
    }
  };

  return (
    <div className={Styles.priceContainer}>
      <Grid container onClick={async () => await handleSubmit()}>
        <Grid item xs={2} className={Styles.imgContainer}>
          <img src="./directions_car.png" />
        </Grid>
        <Grid item xs={8} className={Styles.serviceContainer}>
          <p className={Styles.serviceText1}> Service A</p>
          <p className={Styles.serviceText2}> 2U </p>
        </Grid>
        <Grid item xs={2} className={Styles.priceContainer}>
          <p className={Styles.priceText}> Price </p>
          <p className={Styles.priceText}> $100.00 </p>
        </Grid>
      </Grid>
      <hr className={Styles.divider} />
      <Grid container onClick={async () => await handleSubmit()}>
        <Grid item xs={2} className={Styles.imgContainer}>
          <img src="./local_car_wash.png" />
        </Grid>
        <Grid item xs={8} className={Styles.serviceContainer}>
          <p className={Styles.serviceText1}> Service B</p>
          <p className={Styles.serviceText2}> 2U </p>
        </Grid>
        <Grid item xs={2} className={Styles.priceContainer}>
          <p className={Styles.priceText}> Price </p>
          <p className={Styles.priceText}> $130.00 </p>
        </Grid>
      </Grid>
    </div>
  );
};

const StripeElementWrapper = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <Price />
    </Elements>
  );
};

export default StripeElementWrapper;
