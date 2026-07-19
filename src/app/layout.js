import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "AI Construction Co-Pilot",
  description: "Real-time AI assistant for construction site safety and guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
