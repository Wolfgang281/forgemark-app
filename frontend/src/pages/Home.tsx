import { CategoriesSection } from "@/components/home/CategoriesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SignInDialog } from "@/components/home/SignInDialog";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import API from "../utils/axios";
import { authentication, provider } from "../utils/firebase";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(authentication, provider);

      setModalOpen(false);
      const token = await result.user.getIdToken();

      const response = await API.post("/auth/login-register", { token });
      console.log("response: ", response);
    } catch (error) {
      console.log("Error in Google Auth");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <SiteHeader onSignInClick={() => setModalOpen(true)} />
      <HeroSection onCtaClick={() => setModalOpen(true)} />
      <CategoriesSection />
      <HowItWorksSection />
      <SiteFooter />
      <SignInDialog
        open={modalOpen}
        onOpenChange={setModalOpen}
        onGoogleSignIn={googleAuth}
      />
    </div>
  );
}
