import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.svg";
import { FcGoogle } from "react-icons/fc";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoogleSignIn: () => void;
}

export function SignInDialog({
  open,
  onOpenChange,
  onGoogleSignIn,
}: SignInDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm sm:p-8">
        <DialogHeader className="items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground shadow-sm">
            <img
              src={logo}
              alt="Forgemark logo"
              className="h-8 w-8 object-contain"
            />
          </div>
          <DialogTitle className="font-heading mt-3 text-2xl font-medium tracking-tight">
            Welcome to Forgemark
          </DialogTitle>
          <DialogDescription>
            Sign in to buy or sell digital products in seconds.
          </DialogDescription>
        </DialogHeader>

        <Button
          variant="outline"
          className="mt-2 h-11 w-full gap-2.5 text-sm font-medium shadow-sm"
          onClick={onGoogleSignIn}
        >
          <FcGoogle className="h-4.5 w-4.5" />
          Continue with Google
        </Button>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <span className="underline underline-offset-2">Terms</span> and{" "}
          <span className="underline underline-offset-2">Privacy Policy</span>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
