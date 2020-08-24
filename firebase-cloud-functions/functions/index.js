const functions = require('firebase-functions');
const admin = require('firebase-admin');

const Stripe = require('stripe')(functions.config().stripe.secret, {
  apiVersion: '2020-03-02',
});

admin.initializeApp();

exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await Stripe.customers.create({ email: user.email });
  const intent = await Stripe.setupIntents.create({
    customer: customer.id,
  });
  await admin.firestore().collection('stripe_customers').doc(user.uid).set({
    customer_id: customer.id,
    setup_secret: intent.client_secret,
  });
});