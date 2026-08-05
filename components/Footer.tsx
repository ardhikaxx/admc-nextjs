"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, PhoneCall, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 pt-20 pb-10 text-gray-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full overflow-hidden p-1">
                <Image src="/images/logo.png" alt="Logo ADMC" fill sizes="48px" className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight text-white">Adhi Dharma</h3>
                <p className="text-xs text-medical-light font-medium">Medical Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fasilitas pelayanan kesehatan pratama yang berkomitmen memberikan pelayanan medis profesional, cepat, dan nyaman untuk masyarakat Bondowoso.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/adhi.darma.medical.center/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-medical hover:text-white transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@AdhiDarmaMedicalCenter" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-medical hover:text-white transition-colors" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {[
                { name: 'Beranda', href: '/#beranda' },
                { name: 'Tentang Kami', href: '/#tentang-kami' },
                { name: 'Layanan', href: '/#layanan' },
                { name: 'Dokter', href: '/#dokter' },
                { name: 'Fasilitas', href: '/#fasilitas' },
                { name: 'FAQ', href: '/#faq' }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-medical transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={14} /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Medis</h4>
            <ul className="space-y-3">
              {[
                { name: 'Poli Umum', slug: 'poli-umum' },
                { name: 'Poli Gigi', slug: 'poli-gigi' },
                { name: 'Poli Estetika', slug: 'poli-estetika' },
                { name: 'UGD 24 Jam', slug: 'ugd' },
                { name: 'Rawat Inap', slug: 'rawat-inap' },
                { name: 'Laboratorium', slug: 'laboratorium' },
                { name: 'Layanan Farmasi', slug: 'farmasi' }
              ].map(item => (
                <li key={item.name}>
                  <Link href={`/layanan/${item.slug}`} className="hover:text-medical transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={14} /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold">Informasi Kontak</h4>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-medical shrink-0 mt-1" />
              <a href="https://maps.app.goo.gl/TUcRb7GdC2dzaiX16" target="_blank" rel="noreferrer" className="text-sm text-gray-400 leading-relaxed hover:text-white transition-colors">
                Jl. dr. Cipto Mangunkusumo No. 3, Lumbung, Badean, Kec. Bondowoso, Kab. Bondowoso, Jawa Timur 68214
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-medical shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Telepon Utama</p>
                <a href="tel:+6281314091515" className="text-sm font-semibold hover:text-white transition-colors">+62 813-1409-1515</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall size={20} className="text-green-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">WhatsApp Pendaftaran</p>
                <a href="https://wa.me/6282333486600" target="_blank" rel="noreferrer" className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors">0823-3348-6600</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-8">
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7748108082988!2d113.81805778748046!3d-7.918575293124579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6dcdbc1c7c789%3A0x5429a488dcd1e0dd!2sAdhi%20Dharma%20Medical%20Center!5e0!3m2!1sid!2sid!4v1785888854922!5m2!1sid!2sid" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center px-4">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Adhi Dharma Medical Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
