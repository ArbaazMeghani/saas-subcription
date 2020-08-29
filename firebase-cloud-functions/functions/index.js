const functions = require('firebase-functions');
const admin = require('firebase-admin');

const Stripe = require('stripe')(functions.config().stripe.secret, {
  apiVersion: '2020-03-02',
});

admin.initializeApp();

exports.createStripeCustomer = functions.https.onCall(async (user) => {
  const customer = await Stripe.customers.create({ email: user.email });
  const intent = await Stripe.setupIntents.create({
    customer: customer.id,
  });

  await admin.firestore().collection('stripe_customers').doc(JSON.parse(user).uid).set({
    customer_id: customer.id,
    setup_secret: intent.client_secret,
  });

  return JSON.stringify(customer);
});

exports.createSubscription = functions.https.onCall(async (customerId, paymentMethodId) => {
  try {
    await Stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
  } catch (error) {
    return res.status('402').send({ error: { message: error.message } });
  }

  await Stripe.customers.update(
    customerId, 
    {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    }
  );

  const subscription = await Stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: 'price_HGd7M3DV3IMXkC' }],
    expand: ['latest_invoice.payment_intent'],
  });

  return JSON.stringify(subscription);
});