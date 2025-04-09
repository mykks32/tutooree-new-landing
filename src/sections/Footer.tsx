import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="mt-36 mb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-start">
            <Image src={Logo} alt="Logo" className="h-9 w-auto md:h-auto" />
          </div>
          <div className="flex gap-4 text-neutral-500 justify-center">
            {footerLinks.map((foo, index) => (
              <div key={index}>{foo.label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
