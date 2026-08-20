import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Stellar Structures Limited",
  description:
    "Get in touch with Stellar Structures Limited — Dhaka's trusted real estate developer. Contact us for apartment bookings, site visits, investment inquiries, and customer support in Bashundhara R/A and Jolshiri R/A.",
  keywords: [
    "contact Stellar Structures",
    "real estate developer Dhaka",
    "apartment booking Dhaka",
    "site visit Bashundhara",
    "property inquiry Dhaka",
    "Stellar Structures contact number",
  ],
  openGraph: {
    title: "Contact Us | Stellar Structures Limited",
    description:
      "Get in touch with Stellar Structures Limited for apartment bookings, site visits, and investment inquiries in Dhaka.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
