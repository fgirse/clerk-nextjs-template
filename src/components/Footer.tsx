"use client";

import social from "@/src/config/social.json";
import Logo from "@/src/components/Logo";
import Social from "@/src/components/Social";
import config from "@/src/config/config.json";
import menu from "@/src/config/menu.json";
import { markdownify } from "@/src/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
    const { copyright } = config.params;
  
    return (
      <footer className="bg-[##4A4C4B] dark:bg-darkmode-theme-light">
        <div className="container">
          <div className="row items-center py-10">
            <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
              <Logo />
            </div>
            <div className="mb-8 text-slate-600 text-center lg:col-6 lg:mb-0">
              <ul>
                {menu.footer.map((menu) => (
                  <li className="m-3 inline-block" key={menu.name}>
                    <Link href={menu.url}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
            </div>
          </div>
        </div>
        <div className="border-t border-border py-7 dark:border-darkmode-border">
        
  
          <div className="my-10 text-[.7rem] font-medium text-center text-gray-300 dark:text-gray-400">
            Copyright © {new Date().getFullYear()}. All rights by{" "}
           {/*} <a
              href="https://web3templates.com/"
              target="_blank"
              rel="noopener">
              Web3Templates.
                </a>{" "}*/}
             <span className="text-white font-phudu">MEDICUS DESIGN{" "}</span>
            <a
              href="https://www.glazestock.com/"
              target="_blank"
              rel="noopener ">
             4058 Basel🇨🇭
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;