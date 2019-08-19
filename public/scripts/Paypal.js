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
