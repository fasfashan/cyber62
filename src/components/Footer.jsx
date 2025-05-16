import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-y border-teal">
        <div className="container max-w-6xl m-auto   ">
          <div className="flex flex-col  md:flex-row justify-between">
            {/* Logo Section */}
            <div className="mb-8 md:mb-0 px-4 py-8">
              <img src="logo.svg" alt="" />
              <div className="mt-12 mb-8">
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/62cyber_id/"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-teal hover:text-teal transition"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="mailto:social@nextar.id"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-teal hover:text-teal transition"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cyber-62/"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-teal hover:text-teal transition"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {/* Company Links */}
              <div className="mb-8 md:mb-0 px-4 py-8 border-x border-teal">
                <h3 className="text-lg font-medium text-teal mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/#welcome"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#events"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#community"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      Our Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Get Involved Links */}
              <div className=" px-4 py-8">
                <h3 className="text-lg font-medium text-teal mb-4">
                  Get involved
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://chat.whatsapp.com/JWOcfoa7YqK6pMFeE6BeNY"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      Malware
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/JkZqgaSDwvh9JFzvsOw37C"
                      className="text-gray-400 hover:text-teal transition"
                    >
                      Penetration Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/ExzapZTUL925VtSlyBVX1S"
                      className="text-gray-400 hover:text-teal-500 transition"
                    >
                      Red Team/Hacking
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/Giz4z2RHCGJLZb5NX5Oyuh"
                      className="text-gray-400 hover:text-teal-500 transition"
                    >
                      Reverse Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/JWOcfoa7YqK6pMFeE6BeNY"
                      className="text-gray-400 hover:text-teal-500 transition"
                    >
                      SOC Ops Room
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
        </div>
      </footer>
      {/* Copyright */}
      <div className=" max-w-6xl m-auto px-4 py-4">
        <p className="text-gray-400 text-sm">
          Copyright © Cyber62. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
