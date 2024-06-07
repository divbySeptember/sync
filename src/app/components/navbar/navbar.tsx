"use client";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./navlinks";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { user, isLoaded } = useUser();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <Disclosure as="nav" className="bg-main">
      {({ open }) => (
        <nav className=" z-10 relative flex justify-around   mb-1 p-5 sm:flex flex-wrap px-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width="200"
              height="64"
              priority
              className="object-contain"
              alt="logo"
            />
          </Link>
          <div className=" justify-between items-center sm:flex hidden ">
            <div className="flex justify-between sm:flex">
              {Navlinks.map((link: any) => (
                <Link
                  href={link.url || "/"}
                  key={link.title}
                  className=" text-contrastBG ml-4 hover:text-headerTwo active:text-headerTwo"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex  gap-1 md:gap-3 ">
              <button
                type="button"
                className="ml-4 border bg-headerFont rounded-full w-18  px-5 py-1 text-main hover:bg-secondary hover:text-contractBG"
              >
                <Link href="/login" className="font-semibold">
                  Sign In
                </Link>
              </button>
              <button
                type="button"
                className=" border border-headerTwo rounded-full w-18   px-4 py-1 text-headerTwo hover:bg-headerTwo hover:text-main"
              >
                <Link href="/signup" className="font-semibold">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <DisclosureButton className=" md:hidden relative inline-flex items-center justify-center  bg-gray-800 p-2 text-contrastBG hover:bg-gray-700 hover:text-contrastBGfocus:outline-none ">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {open === true ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </DisclosureButton>

          {open ? (
            <DisclosurePanel className=" w-full flex flex-col bg-main items-center justify-center pt-28 md:hidden">
              {Navlinks.map((link: any) => (
                <Link
                  id="navlink"
                  href={link.url || "/"}
                  key={link.title}
                  className="text-contrastBG block px-3 py-2  text-base font-medium"
                >
                  {link.title}
                </Link>
              ))}

              <div className="  ">
                <button
                  type="button"
                  className="border mr-3 bg-headerFont rounded-full w-18 px-5 py-1 mt-3 text-main hover:bg-secondary hover:text-contractBG"
                >
                  <Link href="/login" className="font-semibold">
                    Sign In
                  </Link>
                </button>
                <button
                  type="button"
                  className="border ml-3 border-headerTwo rounded-full mt-3 w-18 px-4 py-1 text-headerTwo hover:bg-headerTwo hover:text-main"
                >
                  <Link href="/signup" className="font-semibold">
                    Sign Up
                  </Link>
                </button>
              </div>
            </DisclosurePanel>
          ) : null}
        </nav>
      )}
    </Disclosure>
  );
};

export default Navbar;
