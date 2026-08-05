"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle2, Phone, MapPin, Clock, Star, Activity, Heart, Shield, Stethoscope, Microscope, Pill, Ambulance, Users, Calendar, PhoneCall, ChevronRight, Plus, Minus, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Components ---

const Navbar = () => {
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
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Dokter', href: '#dokter' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-5'}`}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
            <Image src="/images/logo.png" alt="Logo ADMC" fill sizes="40px" className="object-contain" priority />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-gray-900">Adhi Dharma</h1>
            <p className="text-xs text-medical font-medium">Medical Center</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-gray-600 hover:text-medical transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 border-l pl-6">
            <a href="tel:+6281314091515" className="text-sm font-medium text-gray-700 flex items-center gap-2 hover:text-medical">
              <Phone size={16} /> Hubungi Kami
            </a>
            <a href="https://wa.me/6282333486600" target="_blank" rel="noreferrer" className="bg-medical hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
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
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-gray-700">
                    {link.name}
                  </a>
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
};

const Hero = () => {
  return (
    <section id="beranda" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-light-gray overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div 
            className="flex-1 space-y-6"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-medical-light text-medical text-sm font-semibold">
              <Shield size={16} /> Fasilitas Pelayanan Kesehatan Pratama
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Pelayanan Kesehatan <span className="text-medical">Profesional</span> dan Terpercaya untuk Keluarga Anda
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Adhi Dharma Medical Center menyediakan layanan Poli Umum, Poli Gigi, Poli Estetika, UGD 24 Jam, Rawat Inap, Laboratorium, dan Farmasi dengan tenaga medis profesional dan pelayanan yang cepat serta nyaman.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://wa.me/6282333486600" className="bg-medical hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-md">
                <PhoneCall size={18} /> Daftar via WhatsApp
              </a>
              <a href="#layanan" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors">
                Lihat Layanan <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-6">
              {['UGD 24 Jam', 'Melayani BPJS', 'Rawat Inap Tersedia', 'Dokter Berpengalaman'].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                  <CheckCircle2 size={16} className="text-green-500" /> {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/3] shadow-lg">
              <Image src="/images/hero-doctor.jpg" alt="Dokter Profesional" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center text-medical">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-sm font-medium text-gray-500">Pasien Terlayani</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">UGD 24 Jam</p>
                <p className="text-sm font-medium text-gray-500">Siap melayani</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const features = [
    { icon: <Activity size={28} />, title: "Pelayanan Cepat", desc: "Sistem antrian modern dan penanganan cepat oleh tenaga medis." },
    { icon: <Stethoscope size={28} />, title: "Dokter Profesional", desc: "Didukung oleh tim dokter umum, gigi, dan spesialis berpengalaman." },
    { icon: <Shield size={28} />, title: "Fasilitas Lengkap", desc: "Dilengkapi laboratorium, farmasi, dan peralatan medis terkini." },
    { icon: <Ambulance size={28} />, title: "UGD 24 Jam", desc: "Layanan gawat darurat yang siap sedia setiap saat tanpa hari libur." },
  ];

  return (
    <section className="py-12 -mt-8 relative z-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div 
          ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-medical-light text-medical rounded-xl flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="tentang-kami" className="py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/about-clinic.jpg" alt="Interior Klinik ADMC" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h4 className="text-medical font-bold tracking-wider text-sm uppercase">Tentang Kami</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Berkomitmen Memberikan Pelayanan Medis Berkualitas</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Adhi Dharma Medical Center (ADMC) adalah fasilitas pelayanan kesehatan pratama modern di Bondowoso, Jawa Timur. Kami hadir dengan visi menjadi pusat layanan kesehatan keluarga yang terpercaya, aman, dan nyaman.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Pelayanan medis profesional dan terpadu",
                "Fasilitas lengkap standar rumah sakit modern",
                "Pelayanan ramah, cepat, dan berpusat pada pasien",
                "Lokasi strategis dan mudah dijangkau di Bondowoso"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1"><CheckCircle2 size={20} className="text-medical" /></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const services = [
    { slug: "poli-umum", icon: <Stethoscope size={32} />, title: "Poli Umum", desc: "Pemeriksaan kesehatan umum, konsultasi medis, dan pengobatan penyakit ringan hingga sedang." },
    { slug: "poli-gigi", icon: <Activity size={32} />, title: "Poli Gigi", desc: "Perawatan kesehatan gigi dan mulut profesional oleh dokter gigi berpengalaman." },
    { slug: "poli-estetika", icon: <Heart size={32} />, title: "Poli Estetika", desc: "Layanan perawatan kecantikan dan kesehatan kulit medis terpercaya." },
    { slug: "ugd", icon: <Ambulance size={32} />, title: "Unit Gawat Darurat", desc: "Penanganan kasus kegawatdaruratan medis yang buka 24 jam setiap hari." },
    { slug: "laboratorium", icon: <Microscope size={32} />, title: "Laboratorium", desc: "Fasilitas cek darah, urine, dan tes laboratorium lainnya untuk diagnosis akurat." },
    { slug: "farmasi", icon: <Pill size={32} />, title: "Layanan Farmasi", desc: "Apotek lengkap yang menyediakan obat-obatan berkualitas sesuai resep dokter." },
    { slug: "rawat-inap", icon: <Shield size={32} />, title: "Rawat Inap", desc: "Fasilitas rawat inap yang nyaman dan bersih untuk pemulihan optimal pasien." },
  ];

  return (
    <section id="layanan" className="py-20 bg-light-gray">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-medical font-bold tracking-wider text-sm uppercase mb-3">Layanan Unggulan</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solusi Kesehatan Komprehensif</h2>
          <p className="text-gray-600 text-lg">Berbagai layanan medis terpadu yang kami sediakan untuk memastikan kesehatan Anda dan keluarga selalu terjaga.</p>
        </div>

        <motion.div 
          ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-medical-light text-medical rounded-2xl flex items-center justify-center mb-6 group-hover:bg-medical group-hover:text-white transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
              <Link href={`/layanan/${svc.slug}`} className="inline-flex items-center gap-2 text-medical font-semibold hover:text-blue-800 transition-colors">
                Detail Layanan <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Doctors = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const doctors = [
    { name: "drg. Varendea", spec: "Dokter Gigi", img: "/images/doctor-varendea.jpg", schedule: "Senin - Sabtu | 08:00 - 11:00 WIB" },
    { name: "drg. Afifah", spec: "Dokter Gigi", img: "/images/doctor-afifah.jpg", schedule: "Senin - Sabtu | 18:00 - 21:00 WIB" }
  ];

  return (
    <section id="dokter" className="py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-medical font-bold tracking-wider text-sm uppercase mb-3">Tim Medis</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dokter Profesional Kami</h2>
            <p className="text-gray-600 text-lg">Ditangani langsung oleh tenaga medis ahli dan berpengalaman untuk memberikan penanganan terbaik.</p>
          </div>
          <a href="https://wa.me/6282333486600" className="hidden md:inline-flex bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
            Lihat Semua Jadwal Dokter
          </a>
        </div>

        <motion.div 
          ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doc, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={doc.img} alt={doc.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-medical font-semibold text-sm mb-1">{doc.spec}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{doc.name}</h3>
                <div className="flex items-start gap-2 text-gray-500 text-sm mb-5">
                  <Calendar size={16} className="mt-0.5 shrink-0" />
                  <span>{doc.schedule}</span>
                </div>
                <a href="https://wa.me/6282333486600" className="block text-center w-full bg-medical-light text-medical py-2.5 rounded-lg font-semibold hover:bg-medical hover:text-white transition-colors">
                  Buat Janji
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const facilities = [
    { title: "Ruang Tunggu", img: "/images/fac-waiting-room.jpg", desc: "Nyaman dan ber-AC" },
    { title: "Ruang Pemeriksaan", img: "/images/fac-examination.jpg", desc: "Modern dan higienis" },
    { title: "Laboratorium", img: "/images/fac-lab.jpg", desc: "Peralatan medis terkini" },
    { title: "Farmasi", img: "/images/fac-pharmacy.jpg", desc: "Obat lengkap & terjamin" },
    { title: "Rawat Inap", img: "/images/fac-inpatient.jpg", desc: "Kamar bersih dan tenang" },
    { title: "UGD", img: "/images/fac-er.jpg", desc: "Penanganan gawat darurat" },
    { title: "Area Parkir", img: "/images/fac-parking.jpg", desc: "Luas dan aman" },
  ];

  return (
    <section id="fasilitas" className="py-20 bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-medical-light font-bold tracking-wider text-sm uppercase mb-3">Fasilitas Klinik</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenyamanan Pasien adalah Prioritas</h2>
          <p className="text-gray-400 text-lg">Kami mendesain setiap sudut klinik untuk memberikan rasa aman, bersih, dan nyaman bagi Anda dan keluarga.</p>
        </div>

        <motion.div 
          ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {facilities.map((fac, idx) => (
            <motion.div key={idx} variants={fadeUp} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src={fac.img} alt={fac.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-lg font-bold mb-1">{fac.title}</h3>
                <p className="text-gray-300 text-sm">{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Insurance = () => {
  return (
    <section className="py-16 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-medical-light rounded-3xl p-8 md:p-12 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Kerja Sama Asuransi</h3>
            <p className="text-gray-700 text-lg">
              Adhi Dharma Medical Center melayani pasien umum, peserta <span className="font-bold">BPJS Kesehatan</span>, dan peserta <span className="font-bold">Mandiri InHealth</span> sesuai dengan ketentuan yang berlaku.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 w-40 h-24 flex items-center justify-center">
              <span className="font-extrabold text-2xl text-green-600">BPJS</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 w-40 h-24 flex items-center justify-center">
              <span className="font-extrabold text-xl text-blue-900 text-center">Mandiri<br/>InHealth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-medical font-bold tracking-wider text-sm uppercase mb-3">Jadwal Operasional</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kapan Kami Melayani Anda?</h2>
        </div>

        <motion.div 
          ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-medical-light rounded-bl-full -z-10"></div>
            <Clock className="text-medical mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-4">Poli Umum & Administrasi</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Senin - Sabtu</span>
                <span className="text-right">07:00 - 12:00<br/>15:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Minggu</span>
                <span>07:00 - 12:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-medical-light rounded-bl-full -z-10"></div>
            <Stethoscope className="text-medical mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-4">Poli Gigi<br/><span className="text-base font-normal text-gray-500">drg. Varendea</span></h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Senin - Sabtu</span>
                <span>08:00 - 11:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-medical-light rounded-bl-full -z-10"></div>
            <Stethoscope className="text-medical mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-4">Poli Gigi<br/><span className="text-base font-normal text-gray-500">drg. Afifah</span></h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Senin - Sabtu</span>
                <span>18:00 - 21:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-medical p-6 rounded-2xl shadow-lg relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
            <div className="inline-block bg-white text-medical px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide">BUKA 24 JAM</div>
            <Ambulance className="text-white mb-4" size={32} />
            <h3 className="text-xl font-bold mb-4">UGD & Rawat Inap</h3>
            <p className="text-medical-light text-sm mb-6">
              Layanan gawat darurat dan rawat inap kami siap melayani Anda 24 jam setiap hari tanpa hari libur.
            </p>
            <a href="tel:+6281314091515" className="flex items-center gap-2 text-white font-semibold hover:text-gray-200 transition-colors">
              <PhoneCall size={18} /> Panggil UGD
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const stats = [
    { num: 10, suffix: "k+", label: "Pasien Terlayani" },
    { num: 24, suffix: " Jam", label: "Pelayanan UGD" },
    { num: 7, suffix: "", label: "Fasilitas Medis" },
    { num: 99, suffix: "%", label: "Tingkat Kepuasan" },
  ];

  return (
    <section className="py-16 bg-medical text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((s, idx) => (
            <div key={idx} className="px-4">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? <CountUp end={s.num} duration={2.5} /> : "0"}
                {s.suffix}
              </h3>
              <p className="text-medical-light font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  const testimonials = [
    { name: "Budi Santoso", review: "Pelayanan sangat cepat dan dokter sangat ramah. Klinik bersih dan nyaman. Sangat direkomendasikan!" },
    { name: "Siti Aminah", review: "Poli giginya bagus, dokter Varendea sangat telaten dan sabar. Harga juga terjangkau dan bisa pakai asuransi." },
    { name: "Ahmad Fauzi", review: "Pernah ke UGD tengah malam dan langsung ditangani dengan cepat. Terima kasih ADMC." },
    { name: "Rina Wijaya", review: "Fasilitas lengkap, ruang tunggunya nyaman. Proses pendaftaran via WA juga sangat mempermudah." },
    { name: "Agus Pratama", review: "Klinik terbaik di Bondowoso. Pelayanan profesional dan dokter ahli. Mantap!" },
    { name: "Dewi Lestari", review: "Rawat inapnya bersih seperti di rumah sakit besar. Perawatnya juga siaga 24 jam." },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-medical font-bold tracking-wider text-sm uppercase mb-3">Testimoni</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Pasien Kami?</h2>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((t, idx) => (
              <div key={idx} className="embla__slide pl-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 flex-1">"{t.review}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center font-bold text-medical text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">Pasien ADMC</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Apakah Adhi Dharma Medical Center menerima pasien BPJS?", a: "Ya, kami melayani pasien BPJS Kesehatan sesuai dengan ketentuan dan prosedur yang berlaku." },
    { q: "Apakah tersedia fasilitas rawat inap?", a: "Ya, kami memiliki fasilitas rawat inap yang bersih, nyaman, dan diawasi oleh tenaga medis 24 jam." },
    { q: "Bagaimana cara melakukan pendaftaran?", a: "Pendaftaran dapat dilakukan secara langsung di klinik atau melalui WhatsApp untuk mendapatkan nomor antrian agar lebih cepat." },
    { q: "Apakah UGD benar-benar buka 24 jam?", a: "Benar, Unit Gawat Darurat (UGD) kami siap sedia 24 jam setiap hari tanpa hari libur untuk menangani keadaan darurat." },
    { q: "Layanan apa saja yang tersedia di poli gigi?", a: "Kami melayani penambalan, pencabutan, pembersihan karang gigi, perawatan saluran akar, hingga perawatan estetika gigi." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                {openIdx === idx ? <Minus className="text-medical shrink-0" size={20} /> : <Plus className="text-gray-400 shrink-0" size={20} />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-medical py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Butuh Pelayanan Kesehatan Sekarang?</h2>
        <p className="text-medical-light text-lg mb-8 max-w-2xl mx-auto">
          Tim medis kami siap membantu Anda dan keluarga dengan pelayanan terbaik, cepat, dan profesional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/6282333486600" className="bg-white text-medical px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Daftar via WhatsApp
          </a>
          <a href="tel:+6281314091515" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Hubungi Klinik
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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
              {['Beranda', 'Tentang Kami', 'Layanan', 'Dokter', 'Fasilitas', 'FAQ'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-medical transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Medis</h4>
            <ul className="space-y-3">
              {['Poli Umum', 'Poli Gigi', 'Poli Estetika', 'UGD 24 Jam', 'Rawat Inap', 'Laboratorium'].map(item => (
                <li key={item}>
                  <a href="#layanan" className="hover:text-medical transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={14} /> {item}
                  </a>
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
                <a href="https://wa.me/6282333486600" className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors">0823-3348-6600</a>
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
};

export default function Home() {
  return (
    <main className="w-full font-sans">
      <Hero />
      <Features />
      <About />
      <Services />
      <Doctors />
      <Facilities />
      <Insurance />
      <Schedule />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
