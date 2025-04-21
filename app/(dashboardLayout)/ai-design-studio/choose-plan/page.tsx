"use client";

import { Button, Typography } from "@mui/material";

const plans = [
  {
    name: "Basic",
    price: "$30.00",
    features: [
      "Lorem ipsum",
      "Duis tempus mi non",
      "Dolor sit amet",
      "-",
      "-",
      "Duis tempus mi non",
    ],
  },
  {
    name: "Standard",
    price: "$200.00",
    features: [
      "Lorem ipsum",
      "Duis tempus mi non",
      "Dolor sit amet",
      "-",
      "Lorem ipsum",
      "-",
    ],
  },
  {
    name: "Premium",
    price: "$200.00",
    features: [
      "Lorem ipsum",
      "Duis tempus mi non",
      "Dolor sit amet",
      "-",
      "-",
      "Duis tempus mi non",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-300">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, m: 3 }}>
          Choose plan
        </Typography>
        <div className="border-b border-gray-300 mb-4" />

        <Typography
          variant="h5"
          className="font-semibold text-center"
          sx={{ fontWeight: 550, fontSize: 20, m: 3 }}
        >
          The standard Lorem Ipsum passage
        </Typography>
        <Typography
          variant="body2"
          className="text-center text-gray-500 mb-6 max-w-xl mx-auto"
          sx={{ m: 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-300 rounded-lg p-4 text-center"
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#4CAF50" }}
              >
                {plan.name}
              </Typography>
              <Typography variant="h6" className="my-2">
                {plan.price}
                <span className="text-sm text-gray-400">/monthly</span>
              </Typography>
              <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                Get Started
              </Button>
              <div className="mt-4">
                {plan.features.map((feature, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    className={`py-1 ${
                      feature === "-" ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
