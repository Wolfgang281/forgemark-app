import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Globe } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const BIO_MAX_LENGTH = 500;

type PaymentMethod = "upi" | "card";

interface SocialLinks {
  youtube: string;
  instagram: string;
  linkedin: string;
  github: string;
}

interface PartnerProfileForm {
  fullName: string;
  email: string;
  profileSlug: string;
  bio: string;
  websiteUrl: string;
  socialLinks: SocialLinks;
  paymentMethod: PaymentMethod;
  upiId: string;
  accountHolderName: string;
  accountNumber: string;
  accountIfscCode: string;
}

const emptyProfileForm: PartnerProfileForm = {
  fullName: "",
  email: "",
  profileSlug: "",
  bio: "",
  websiteUrl: "",
  socialLinks: { youtube: "", instagram: "", linkedin: "", github: "" },
  paymentMethod: "upi",
  upiId: "",
  accountHolderName: "",
  accountNumber: "",
  accountIfscCode: "",
};

const socialPlatforms: {
  key: keyof SocialLinks;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "youtube", label: "YouTube", icon: <FaYoutube /> },
  { key: "instagram", label: "Instagram", icon: <FaInstagram /> },
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedin /> },
  { key: "github", label: "GitHub", icon: <FaGithub /> },
];

export default function ProfilePanel() {
  const [profileForm, setProfileForm] =
    useState<PartnerProfileForm>(emptyProfileForm);

  const updateField = <Field extends keyof PartnerProfileForm>(
    field: Field,
    value: PartnerProfileForm[Field],
  ) => {
    setProfileForm((previousForm) => ({ ...previousForm, [field]: value }));
  };

  const updateSocialLink = (platform: keyof SocialLinks, value: string) => {
    setProfileForm((previousForm) => ({
      ...previousForm,
      socialLinks: { ...previousForm.socialLinks, [platform]: value },
    }));
  };

  const displayName = profileForm.fullName.trim() || "Your Profile";
  const avatarInitial = profileForm.fullName.trim().charAt(0).toUpperCase() || "?";
  const activeSocialLinks = socialPlatforms.filter(
    (platform) => profileForm.socialLinks[platform.key].trim() !== "",
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="font-heading text-3xl font-medium tracking-tight">
        Partner Profile
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Edit on the right, see exactly what buyers will see on the left.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
        {/* Live public-profile preview */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="bg-[radial-gradient(ellipse_120%_100%_at_50%_-20%,var(--color-accent),transparent)] px-6 pt-8 pb-6 text-center">
              <Avatar className="mx-auto h-16 w-16">
                <AvatarFallback className="font-heading text-2xl">
                  {avatarInitial}
                </AvatarFallback>
              </Avatar>
              <p className="font-heading mt-3 text-lg font-medium">
                {displayName}
              </p>
              <p className="text-xs text-muted-foreground">
                forgemark.app/profile/
                {profileForm.profileSlug.trim() || "your-profile-name"}
              </p>
            </div>

            <div className="space-y-4 border-t border-border px-6 py-5">
              <p className="text-sm text-muted-foreground">
                {profileForm.bio.trim() ||
                  "Your bio will show up here once you write one."}
              </p>

              {profileForm.websiteUrl.trim() && (
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Globe className="h-3.5 w-3.5" />
                  {profileForm.websiteUrl}
                </p>
              )}

              {activeSocialLinks.length > 0 && (
                <div className="flex gap-3 pt-1 text-muted-foreground">
                  {activeSocialLinks.map((platform) => (
                    <span key={platform.key} className="text-base">
                      {platform.icon}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 px-1 text-xs text-muted-foreground">
            Live preview — updates as you type.
          </p>
        </aside>

        {/* Editable form, no card chrome */}
        <div className="space-y-10">
          <section className="space-y-5">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={profileForm.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileForm.email}
                  disabled
                />
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          <section className="space-y-5">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              About
            </h2>

            <div className="space-y-1.5">
              <Label htmlFor="profileSlug">Profile Slug</Label>
              <div className="flex items-center overflow-hidden rounded-md border border-border bg-background focus-within:ring-1 focus-within:ring-ring">
                <span className="pl-3 text-sm whitespace-nowrap text-muted-foreground">
                  forgemark.app/profile/
                </span>
                <Input
                  id="profileSlug"
                  placeholder="your-profile-name"
                  value={profileForm.profileSlug}
                  onChange={(event) =>
                    updateField("profileSlug", event.target.value)
                  }
                  className="border-0 shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between">
                <Label htmlFor="bio">Bio</Label>
                <span className="text-xs text-muted-foreground">
                  {profileForm.bio.length}/{BIO_MAX_LENGTH}
                </span>
              </div>
              <Textarea
                id="bio"
                rows={4}
                maxLength={BIO_MAX_LENGTH}
                value={profileForm.bio}
                onChange={(event) => updateField("bio", event.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="websiteUrl">Website</Label>
              <div className="relative">
                <Globe className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="websiteUrl"
                  className="pl-9"
                  value={profileForm.websiteUrl}
                  onChange={(event) =>
                    updateField("websiteUrl", event.target.value)
                  }
                />
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          <section className="space-y-5">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Social Links
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {socialPlatforms.map((platform) => (
                <div key={platform.key} className="space-y-1.5">
                  <Label htmlFor={platform.key}>{platform.label}</Label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
                      {platform.icon}
                    </span>
                    <Input
                      id={platform.key}
                      value={profileForm.socialLinks[platform.key]}
                      onChange={(event) =>
                        updateSocialLink(platform.key, event.target.value)
                      }
                      className="pl-9"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-border" />

          <section className="space-y-5">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Payment Details
            </h2>

            <RadioGroup
              value={profileForm.paymentMethod}
              onValueChange={(value) =>
                updateField("paymentMethod", value as PaymentMethod)
              }
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="upi" id="paymentMethodUpi" />
                <Label htmlFor="paymentMethodUpi">UPI</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="card" id="paymentMethodCard" />
                <Label htmlFor="paymentMethodCard">Card</Label>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="accountHolderName">Account Holder Name</Label>
                <Input
                  id="accountHolderName"
                  value={profileForm.accountHolderName}
                  onChange={(event) =>
                    updateField("accountHolderName", event.target.value)
                  }
                />
              </div>

              {profileForm.paymentMethod === "upi" ? (
                <div className="space-y-1.5">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input
                    id="upiId"
                    value={profileForm.upiId}
                    onChange={(event) =>
                      updateField("upiId", event.target.value)
                    }
                  />
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      value={profileForm.accountNumber}
                      onChange={(event) =>
                        updateField("accountNumber", event.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="accountIfscCode">IFSC Code</Label>
                    <Input
                      id="accountIfscCode"
                      value={profileForm.accountIfscCode}
                      onChange={(event) =>
                        updateField("accountIfscCode", event.target.value)
                      }
                    />
                  </div>
                </>
              )}
            </div>
          </section>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              Saving isn't wired up to the backend yet.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Cancel
              </Button>
              <Button size="sm" disabled>
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
