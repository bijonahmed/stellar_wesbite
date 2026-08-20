import PhotoGalleryClient from "./PhotoGalleryClient";

export const metadata = {
  title: "Photo Gallery | Stellar Structures Limited",
  description:
    "Browse the photo gallery of Stellar Structures Limited. View construction progress, completed projects, architectural details, interiors, aerial views, and community events in Dhaka, Bangladesh.",
  keywords: [
    "Stellar Structures gallery",
    "construction photos Dhaka",
    "real estate photos Bangladesh",
    "Bashundhara R/A gallery",
    "apartment interior photos Dhaka",
    "project photo gallery",
  ],
  openGraph: {
    title: "Photo Gallery | Stellar Structures Limited",
    description:
      "Browse the photo gallery of Stellar Structures Limited — construction progress, completed projects, and more.",
    type: "website",
  },
};

export default function PhotoGalleryPage() {
  return <PhotoGalleryClient />;
}
