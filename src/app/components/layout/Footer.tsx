"use client"
import Link from "next/link"
// import { usePathname } from "next/navigation"

export default function Footer(){
    
    return (
        <footer className="bg-[#0E0E0E] text-[#FFFFFF]">
           <div className="flex max-w-7xl px-28 py-16 items-center justify-between space-x-5">
           <div className="space-y-5 max-w-xl">
              <Link href="/">audiophile</Link>
              <p className="mt-4">Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
              <p>Copyright 2021. All Rights Reserved</p>
           </div>
           <div>
              <div className="space-x-8">
                 <Link href="/" className="">Home</Link>
             <Link href="/headphones">Headphones</Link>
             <Link href="/speakers">Speakers</Link>
             <Link href="/earphones">Earphones</Link>
              </div>
             <div className="flex mt-4 space-x-5">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
             </div>
           </div>
           </div>
        </footer>
    )
}