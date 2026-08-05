"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/#beranda' },
    { name: 'Tentang Kami', href: '/#tentang-kami' },
    { name: 'Layanan', href: '/#layanan' },
    { name: 'Dokter', href: '/#dokter' },
    { name: 'Fasilitas', href: '/#fasilitas' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <Image src="/images/logo.png" alt="Logo ADMC" fill sizes="40px" className="object-contain" priority />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-gray-900">Adhi Dharma</h1>
            <p className="text-xs text-medical font-medium">Medical Center</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-medium text-gray-600 hover:text-medical transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 border-l pl-6">
            <a href="tel:+6281314091515" className="text-sm font-medium text-gray-700 flex items-center gap-2 hover:text-medical">
              <Phone size={16} /> Hubungi Kami
            </a>
            <a href="https://wa.me/6282333486600" target="_blank" rel="noreferrer" className="bg-medical hover:bg-medical-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
              Daftar Sekarang
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-gray-700">
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t">
                <a href="https://wa.me/6282333486600" target="_blank" rel="noreferrer" className="bg-medical text-white text-center py-3 rounded-xl font-semibold">
                  Daftar Sekarang
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
