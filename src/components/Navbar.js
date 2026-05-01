"use client"

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation'

export const Navbar = () => {
    const router = useRouter()
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Solution For', path: '/solution' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact us', path: '/contact' },
    ];

    const ref = React.useRef(null)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div ref={ref} className="overflow-y-scroll">
            <nav className={`fixed top-0 left-0 bg-[rgb(var(--navbar-color))] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 shadow-md text-gray-700 py-3 md:py-4`}>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Brand Logo"
                        width={250}
                        height={70}
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.path} className={`group flex flex-col gap-0.5 text-[rgb(var(--brand-navy))]`}>
                            {link.name}
                            <div className={`bg-[rgb(var(--brand-navy))] h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <button className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500 text-white bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))]`} onClick={()=> router.push('/login')}>
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden cursor-pointer">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer invert`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    <button className="bg-[rgb(var(--brand-navy))] text-white px-8 py-2.5 rounded-full transition-all duration-500" onClick={()=> router.push('/login')}>
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}