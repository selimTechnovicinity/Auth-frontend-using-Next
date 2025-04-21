"use client";

import assets from "@/assets";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";

const CheckoutForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md border">
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Check out
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField label="First Name" fullWidth />
        <TextField label="Last Name" fullWidth />

        <div className="sm:col-span-2">
          <TextField
            label="16 Digit Card Number"
            fullWidth
            defaultValue="1234 1234 1234 1234"
            InputProps={{
              endAdornment: (
                <div className="flex gap-1 items-center   max-w-[160px] mr-10">
                  <Image src={assets.images.visa} width={30} alt="visa" />
                  <Image
                    src={assets.images.mastercard}
                    width={30}
                    alt="mastercard"
                  />
                  <Image
                    src={assets.images.discover}
                    width={30}
                    alt="discover"
                  />
                  <Image src={assets.images.amex} width={30} alt="amex" />
                </div>
              ),
            }}
          />
        </div>

        <TextField label="Expiry Date" fullWidth defaultValue="12/12/2025" />
        <TextField label="CVV" fullWidth />

        <div className="sm:col-span-2">
          <TextField label="Address" fullWidth />
        </div>

        <TextField label="City" fullWidth />
        <TextField label="Province" fullWidth />

        <div className="sm:col-span-2">
          <TextField label="Postal Code" fullWidth />
        </div>

        <div className="sm:col-span-2 mt-4">
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(to right, #16a34a, #065f46)",
              color: "white",
              py: 1.5,
            }}
          >
            Agree & Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
