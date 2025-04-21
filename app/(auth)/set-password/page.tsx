"use client";

import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const SetPasswordPage = () => {
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
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Set a password
          </Typography>

          <Typography variant="body2" className="text-gray-600" sx={{ mb: 4 }}>
            Your previous password has been reseted. Please set a new password
            for your account.
          </Typography>

          <CustomForm onSubmit={handleSubmit} defaultValues={{ email: "" }}>
            <div className="mb-4">
              <CustomInput
                name="password"
                label="Create password"
                type="password"
                fullWidth
              />
            </div>
            <div className="mb-4">
              <CustomInput
                name="password"
                label="Re-enter password"
                type="password"
                fullWidth
              />
            </div>

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
              Set Password
            </Button>
          </CustomForm>
        </div>

        {/* Right Side - Image */}
        <div className=" hidden md:block ">
          <Image
            src={assets.images.setPassword}
            alt="Forgot Password"
            className="rounded-2xl w-100  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
