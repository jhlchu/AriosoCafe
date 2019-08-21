# Paypal
## Data

## API

### Payments

https://developer.paypal.com/docs/api/orders/v2/#orders_get
https://developer.paypal.com/docs/api/orders/v2/#definition-purchase_unit_request

1. #### `item_total`
   - The subtotal for all items.
   - Required if the request includes `purchase_units[].items[].unit_amount`.
   - Must equal the sum of (`items[].unit_amount * items[].quantity`) for all items.
2. #### `shipping`
3. #### `handling`
4. #### `tax`
   - The total tax for all items.
   - Required if the request includes `purchase_units.items.tax`.
   - Must equal the sum of (`items[].tax * items[].quantity`) for all items.
5. #### `discount`
6. #### `currency_code`
7. #### `value`

### Fields
```
'amount': { //Cart Total
	'currency': 'CAD',
	'details': {
		'subtotal': '20.00',
		'shipping': '2.00',
		'tax': '3.30',
	},
	'total': '25.30',
}
'items': [
	'name': 'Bossa Nova Espresso'
	'sku': 'ACES01'
	'price': '20.00'
	'currency': 'CAD'
]
```

## Sample
https://developer.paypal.com/docs/commerce-platform/v1/checkout/create-order/
```
curl -v -X POST https://api.sandbox.paypal.com/v1/checkout/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <var>Access-Token</var>" \
  -H "PayPal-Partner-Attribution-Id: EXAMPLE_MP" \
  -d '{
  "purchase_units": [
  {
    "reference_id": "store_mobile_world_order_1234",
    "description": "Mobile World Store order-1234",
    "amount": {
      "currency": "USD",
      "details": {
        "subtotal": "1.09",
        "shipping": "0.02",
        "tax": "0.33"
      },
      "total": "1.44"
    },
    "payee": {
      "email": "seller@example.com"
    },
    "items": [
    {
      "name": "NeoPhone",
      "sku": "sku03",
      "price": "0.54",
      "currency": "USD",
      "quantity": "1"
    },
    {
      "name": "Fitness Watch",
      "sku": "sku04",
      "price": "0.55",
      "currency": "USD",
      "quantity": "1"
    }],
    "shipping_address": {
      "line1": "2211 N First Street",
      "line2": "Building 17",
      "city": "San Jose",
      "country_code": "US",
      "postal_code": "95131",
      "state": "CA",
      "phone": "(123) 456-7890"
    },
    "shipping_method": "United Postal Service",
    "partner_fee_details": {
      "receiver": {
        "email": "partner@example.com"
      },
      "amount": {
        "value": "0.01",
        "currency": "USD"
      }
    },
    "payment_linked_group": 1,
    "custom": "custom_value_2388",
    "invoice_number": "invoice_number_2388",
    "payment_descriptor": "Payment Mobile World"
  }],
  "redirect_urls": {
    "return_url": "https://example.com/return",
    "cancel_url": "https://example.com/cancel"
  }
}'
```