"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { loginMutationFn } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const LoginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email!"),
  password: z.string().min(3, "Password must be at least 3 characters!"),
});

const LoginPage = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    console.log("Login values", values);
    try {
      setLoading(true);
      const response = await loginMutationFn(values);
      if (response.status === 200) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      setError("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-20 mt-5">
      <div className=" flex gap-30">
        {/* Left Side - Image */}
        <div className="w-1/2 relative hidden md:block">
          <Image
            src={assets.images.login}
            alt="Login"
            className=" w-150 h-160 rounded-l-2xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-150 md:w-1/2 flex items-center justify-center">
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h4" fontWeight="bold">
                Login
              </Typography>
            </div>

            <Typography variant="body2" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <CustomForm
              onSubmit={handleLogin}
              resolver={zodResolver(LoginValidationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={2} my={1}>
                <CustomInput
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <CustomInput
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Grid>
              {error && (
                <Typography variant="body2" color="error" mb={2}>
                  {error}
                </Typography>
              )}

              <div className="flex justify-between items-center mb-4">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Remember me"
                />
                <Link
                  href="/forgot-password"
                  className="text-red-500 font-semibold"
                >
                  Forgot Password
                </Link>
              </div>

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "primary", color: "white", py: 1 }}
              >
                Login
              </Button>

              <Typography
                variant="body2"
                mt={2}
                className="text-center font-semibold"
              >
                Don’t have an account?{" "}
                <Link href="/register" className="text-red-500 font-semibold">
                  Sign up
                </Link>
              </Typography>

              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-500 text-sm">
                  Or login with
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={
                    <Image
                      src={assets.images.google}
                      alt="Google"
                      width={20}
                      height={20}
                    />
                  }
                ></Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={
                    <Image
                      src={assets.images.apple}
                      alt="Apple"
                      width={20}
                      height={20}
                    />
                  }
                ></Button>
              </div>
            </CustomForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
