"use client";

import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";

const VerifyPage = () => {
  const router = useRouter();
  const handleSubmit = async (values: FieldValues) => {
    console.log("Reset email sent to:", values.email);
    // your logic for forgot password
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

          <CustomForm onSubmit={handleSubmit} defaultValues={{ email: "" }}>
            <div className="mb-4">
              <CustomInput
                name="password"
                label="Enter Code"
                type="password"
                fullWidth
              />
            </div>
            <Typography
              variant="body2"
              mt={2}
              className="text-left font-semibold"
              sx={{ mb: 3 }}
            >
              Didn’t receive a code?{" "}
              <Link href="/register" className="text-red-500 font-semibold">
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
