import nextConnect from 'next-connect';
const handler = nextConnect();
const stripe = require('stripe')(
  'sk_test_51IQNkOKRDMM110U3xFjLfxDxhMFBYAIXxl62dnQeOTvijd362YgwoENDi8ZpK8ngAW0Gt3gMK4t7EBgKXuYod6J500ZESSAyH1',
);

handler.post(async (req, res) => {
  const { priceId } = req.body;
  console.log('priceId:', priceId);

  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      // success_url: 'https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}',,
      // cancel_url: 'https://example.com/canceled.html',
      success_url: 'http://app.allnighter.timespread.co.kr/afterPayment',
      cancel_url: 'http://app.allnighter.timespread.co.kr/my-page/pricing',
    });

    res.send({
      sessionId: session.id,
    });
  } catch (e) {
    res.status(400);
    return res.send({
      error: {
        message: e.message,
      },
    });
  }
});

export { stripe };
export default handler;
