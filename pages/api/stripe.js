const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {

    console.log(req.body.cartItems)

    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_type: ['card'],
            billin_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: 'shr_1L7nHPSFvxCKd8E3RzBOvjIp'},
                {shipping_rate: 'shr_1L7nIwSFvxCKd8E3C2WHsh00'},
            ],
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}