import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Sytrwn",
      color: "hover:text-[#A1D6B2]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/alfin-syatriawan-803793284/",
      color: "hover:text-[#48BEFF]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/alfn_sytrwn",
      color: "hover:text-[#FADADD]",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:alfin.syatriawan64@gmail.com",
      color: "hover:text-[#A1D6B2]",
    },
  ];

  const quickLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "collections" },
    { name: "Skills", to: "progress" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-[#F2EFE5] border-t-2 border-[#A1D6B2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-freckle bg-gradient-to-r from-[#48BEFF] to-[#A1D6B2] bg-clip-text text-transparent">
              Alfin Syatriawan
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-freckle">
              Junior Front-end Developer yang passionate dalam menciptakan
              pengalaman web yang menarik dan interaktif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-freckle text-[#48BEFF]">Quick Links</h4>
            <ul className="space-y-2  font-freckle">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-[#A1D6B2] transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-freckle text-[#48BEFF]">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/60 rounded-xl border-2 border-[#A1D6B2]/30 text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#A1D6B2]/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-center items-center text-center py-6">
          <p className="text-gray-600  font-freckle text-sm">
            © {currentYear} Alfin Syatriawan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
