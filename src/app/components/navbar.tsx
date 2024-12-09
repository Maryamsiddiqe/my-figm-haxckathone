import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#FBEBB5] text-[#000000] py-4 px-6 sm:px-12 md:px-16">

        {/* Links Section */}
        <div className="flex justify-center items-center gap-16 sm:gap-8 md:gap-12 lg:gap-16 flex-grow w-[430px] h-[24px]">
          <Link href="/">Home</Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">

          {/* Contact Icon */}
          <div>
            <IoMdContact size={24} />
          </div>

          {/* Search Icon */}
          <div>
            <CiSearch size={24} />
          </div>

          {/* Wishlist Icon */}
          <div>
            <IoMdHeartEmpty size={24} />
          </div>

          {/* Cart Icon */}
          <div>
            <IoCartOutline size={24} />
          </div>

        </div>

      </div>
    </header>
  );
}