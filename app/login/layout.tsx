import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | NXT Remote",
  description:
    "Sign in to your NXT Remote account to manage placements, applications, and leads.",
  openGraph: {
    title: "Login | NXT Remote",
    description:
      "Sign in to your NXT Remote account to manage placements, applications, and leads.",
    type: "website",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
