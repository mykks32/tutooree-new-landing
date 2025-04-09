import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="mt-24 flex justify-center overflow-x-clip">
      <div className="container px-2 md:px-4 lg:px-16">
        <div className="flex flex-col">
          <h2 className="text-center text-xl text-white/50">
            Already choosen by these Market leaders
          </h2>
          <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_20%,black_95%,transparent)]">
            <div className="flex gap-24">
              {logos.map((logo) => (
                <Image src={logo.image} key={logo.name} alt={logo.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
