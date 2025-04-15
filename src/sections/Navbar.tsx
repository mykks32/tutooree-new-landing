"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/images/Tutoree.svg";
import Button from "@/components/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from 'motion/react'

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed w-full top-0 z-50">
      <section className="flex justify-center py-4 lg:py-8 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="border bg-neutral-950/70 backdrop-blur border-white/15 rounded-[27px] md:rounded-full overflow-hidden">
            {/* Top Navbar */}
            <div className="grid grid-cols-2 lg:grid-cols-3 px-4 py-2 md:pr-2 items-center">
              <div className="pl-4 items-center">
                <Link href="/">
                  <Image src={Logo} alt="Logo" className="h-9 w-auto md:h-12" />
                </Link>
              </div>

              <div className="hidden lg:flex justify-center gap-6 font-medium">
                <nav>
                  {navLinks.map((nav, index) => (
                    <a key={index} href={nav.href} className="mr-6">
                      {nav.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                {/* Mobile toggle icon */}
                <button
                  className="md:hidden"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  aria-label="Toggle Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                  >
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      className={twMerge(
                        "origin-left transition",
                        menuOpen && "rotate-45 -translate-y-1"
                      )}
                    />
                    <line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      className={twMerge("transition", menuOpen && "opacity-0")}
                    />
                    <line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      className={twMerge(
                        "origin-left transition",
                        menuOpen && "-rotate-45 translate-y-1"
                      )}
                    />
                  </svg>
                </button>

                {/* Desktop Buttons */}
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Mobile Menu inside border box */}
            <AnimatePresence>
            {menuOpen && (
              <motion.div
              initial={{ height: 0}}
              animate={{height: "auto"}}
              exit={{height: 0}}

              className="md:hidden overflow-hidden">
                <nav className="flex flex-col items-center py-4 gap-4">
                  {navLinks.map((nav, index) => (
                    <a
                      key={index}
                      href={nav.href}
                      className="text-lg font-medium text-white hover:text-lime-400"
                    >
                      {nav.label}
                    </a>
                  ))}
                  <Button variant="secondary" className="w-3/4 mt-2">
                    Login
                  </Button>
                  <Button variant="primary" className="w-3/4">
                    Sign Up
                  </Button>
                </nav>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </header>
    <div className="pb-[84px] md:pb-[96px] lg:pb-[140px]">

    </div>
    </>
  );
}
