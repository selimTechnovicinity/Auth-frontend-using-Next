"use client";
import assets from "@/assets";
import Image from "next/image";

const AuthNavbar = () => {
  return (
    <div className="flex justify-between items-center my-4 mx-20">
      <div>
        <Image
          src={assets.images.logo}
          alt="Login"
          className="w-30  object-cover"
        />
      </div>
      {/* <div className="flex gap-4">
        {" "}
        <Button
          variant="outlined"
          onClick={() => router.push("/register")}
          sx={{
            border: "none",
            color: "primary",
            py: 1,
            px: 2,
            fontWeight: "bold",
            rounded: "5px",
            borderRadius: "5px",
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          onClick={() => router.push("/login")}
          sx={{
            backgroundColor: "primary",
            color: "white",
            py: 1,
            px: 2,
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          Login
        </Button>
      </div> */}
    </div>
  );
};

export default AuthNavbar;
