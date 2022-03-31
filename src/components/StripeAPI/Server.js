// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(
  "sk_test_51KSjz0EcIioZXTXKQqw0hIPFX12u5yV43WREojOzvNigiQ174N0PEp5cQBvXzYKrmcksVl8yb3HUlnICmWfHfpuT00CmOPfQc8"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = " http://localhost:3000";

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/order-success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });

  res.redirect(303, session.url);
});

app.listen(8080, () => console.log("Running on port 8080"));
