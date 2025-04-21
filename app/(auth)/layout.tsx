import AuthNavbar from "@/components/ui/navbar/AuthNavbar";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AuthNavbar />
      <main>{children}</main>
    </div>
  );
}
