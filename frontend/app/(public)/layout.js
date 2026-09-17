//"use client";

import ClientNavbar from "../components/frontend/ClientNavbar";
import ClientFooter from "../components/frontend/ClientFooter";
import { AuthProvider } from "../context/AuthContext";
import FrontendAssets from "../components/frontend/FrontendAssets";
import { CartProvider } from "../context/CartContext";
import N8nChat from "../components/frontend/N8nChat";

async function getNavbarMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getNavbarMenu`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    if (data.success && data.data) return data.data;
  } catch {}
  return [];
}

export default async function PublicLayout({ children }) {
  const initialMenu = await getNavbarMenu();

  return (
    <AuthProvider>
      <CartProvider>
        <FrontendAssets />
        <ClientNavbar initialMenu={initialMenu} />
        <main>{children}</main>
        <ClientFooter />
        <N8nChat />
      </CartProvider>
    </AuthProvider>
  );
}
