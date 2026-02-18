Lägg till under Anpassade Pixlar under Kundhändelser.

// 1. Initialize the Data Layer safely
window.dataLayer = window.dataLayer || [];

// 2. Load GTM inside this Sandbox (REPLACE '...' WITH YOUR ID)
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX'); 

// 3. Subscribe to the "checkout_completed" event
analytics.subscribe("checkout_completed", (event) => {
  const checkout = event.data.checkout;
  
  window.dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
      'transaction_id': checkout.order.id,
      'value': checkout.totalPrice.amount,
      'tax': checkout.totalTax.amount,
      'shipping': checkout.shippingLine ? checkout.shippingLine.price.amount : 0,
      'currency': checkout.currencyCode,
      'coupon': checkout.discountApplications && checkout.discountApplications.length > 0 ? checkout.discountApplications[0].title : undefined,
      'items': checkout.lineItems.map(item => ({
        'item_id': item.variant.id, // Or item.variant.sku depending on your preference
        'item_name': item.title,
        'price': item.variant.price.amount,
        'quantity': item.quantity
      }))
    }
  });
});