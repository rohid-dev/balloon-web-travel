import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="py-16 md:py-24 flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-lg">
            <h3 className="uppercase text-3xl font-black mb-6">BALLOONKUN</h3>
            <p className="text-gray-300">
              Dengan BalonKUN kamu bisa merasakan pengalaman baru dengan menaiki
              balon udara dengan pemandangan sekitar yang sangat indah untuk
              memanjakan mata anda.
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-between gap-8 w-full max-w-xl">
            <div>
              <h4 className="pb-2 text-yellow-500">Destinatinos</h4>
              <ul className="">
                <li>
                  <Link href="#">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Balon Udara
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Lokasi
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Harga
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="pb-2 text-yellow-500">About</h4>
              <ul className="">
                <li>
                  <Link href="#">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="inline-block py-2 text-slate-400 hover:text-white">
                      Ratings
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="pb-2 text-yellow-500">Follow Us</h4>
              <ul className="">
                <li>
                  <Link href="#">
                    <a className="py-2 flex gap-2 items-center text-slate-400 hover:text-white">
                      <FacebookIcon className="w-4 h-4" />
                      <p>Facebook</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="py-2 flex gap-2 items-center text-slate-400 hover:text-white">
                      <TwitterIcon className="w-4 h-4" />
                      <p>Twitter</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="py-2 flex gap-2 items-center text-slate-400 hover:text-white">
                      <InstagramIcon className="w-4 h-4" />
                      <p>Instagram</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-12 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-slate-500">Copyright © 2021</p>
          <div className="flex items-center gap-x-12 gap-y-4 flex-wrap">
            <Link href="#">
              <a className="text-slate-400 hover:text-white">
                Terms & conditions
              </a>
            </Link>
            <Link href="#">
              <a className="text-slate-400 hover:text-white">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
