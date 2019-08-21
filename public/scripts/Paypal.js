const clientID = {'client-id' : 'Aex4mZMFJ7dHZ7jWxUqLtr975VuWpQimG-5QVmWm5ENXXek0cN_snIJZMsQQfw7C_sCURERgYg6WCcpI'};
const currency = {'currency' : 'CAD'};

const testButton = paypal.Buttons({
  createOrder: (data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01"
          }
        }
      ]
    })
});
