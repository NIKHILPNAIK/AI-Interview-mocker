"use client"

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    }
  }, [isSignedIn, isLoaded, router]);

  return (
   <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h2 className="text-2xl mb-4">Loading...</h2>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
    </div>
   </div>
  );
}