"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { verifyEmailMutationFn } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";
import { z } from "zod";

const VerifyCodeValidationSchema = z.object({
  otp: z.string().min(6, {
    message: "OTP must be at least 6 characters long",
  }),
});

const VerifyPage = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleSubmit = async (values: FieldValues) => {
    console.log("Otp:", values.otp);

    try {
      setLoading(true);
      const respone = await verifyEmailMutationFn(values);
      if (respone.status === 200) {
        router.push("/set-password");
      } else {
        setError("Invalid OTP");
      }
    } catch (error) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-20 mt-5">
      <div className="flex justify-between items-center gap-20">
        {/* Left Side - Form */}
        <div className="w-full max-w-150 md:w-1/2 ">
          <Link
            href="/login"
            className="text-sm text-gray-900  mb-4 inline-block"
          >
            <span className="flex">
              <GoChevronLeft size={19} /> Back to login
            </span>
          </Link>

          <Typography variant="h4" fontWeight="bold" mb={2}>
            Verify code
          </Typography>

          <Typography variant="body2" className="text-gray-600" sx={{ mb: 4 }}>
            An authentication code has been sent to your email.
          </Typography>

          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(VerifyCodeValidationSchema)}
            defaultValues={{ otp: "" }}
          >
            <div className="mb-4">
              <CustomInput
                name="otp"
                label="Enter Code"
                type="password"
                fullWidth
              />
            </div>
            {error && (
              <Typography
                variant="body2"
                color="red"
                className="text-left font-semibold"
                sx={{ mb: 3 }}
              >
                {error}
              </Typography>
            )}
            <Typography
              variant="body2"
              mt={2}
              className="text-left font-semibold"
              sx={{ mb: 3 }}
            >
              Didn’t receive a code?{" "}
              <Link href="" className="text-red-500 font-semibold">
                Resend
              </Link>
            </Typography>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#14634F",
                color: "white",
                fontWeight: "bold",
                paddingY: "10px",
                borderRadius: "6px",
              }}
            >
              Verify
            </Button>
          </CustomForm>
        </div>

        {/* Right Side - Image */}
        <div className=" hidden md:block ">
          <Image
            src={assets.images.verify}
            alt="Forgot Password"
            className="rounded-2xl w-100  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
