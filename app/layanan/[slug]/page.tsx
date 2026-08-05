import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Stethoscope, Activity, Heart, Ambulance, Microscope, Pill, Shield, CheckCircle2, ChevronRight, PhoneCall, ArrowLeft } from 'lucide-react';

const servicesData = [
  {
    slug: 'poli-umum',
    title: 'Poli Umum',
    desc: 'Layanan pemeriksaan kesehatan umum, konsultasi medis, dan pengobatan penyakit ringan hingga sedang oleh dokter umum berpengalaman.',
    icon: <Stethoscope size={48} />,
    image: '/images/fac-examination.jpg',
    features: [
      'Konsultasi kesehatan umum',
      'Pemeriksaan tekanan darah & tanda vital',
      'Pengobatan penyakit akut (demam, flu, batuk, dll)',
      'Surat keterangan sehat',
      'Rujukan pasien ke dokter spesialis'
    ],
    schedule: 'Senin - Sabtu: 07.00 - 12.00 & 15.00 - 21.00 WIB'
  },
  {
    slug: 'poli-gigi',
    title: 'Poli Gigi',
    desc: 'Perawatan kesehatan gigi dan mulut yang profesional, lengkap, dan nyaman untuk segala usia.',
    icon: <Activity size={48} />,
    image: '/images/doctor-varendea.jpg',
    features: [
      'Pemeriksaan & Konsultasi Gigi',
      'Pembersihan Karang Gigi (Scaling)',
      'Penambalan Gigi Berlubang',
      'Pencabutan Gigi',
      'Perawatan Saluran Akar'
    ],
    schedule: 'Senin - Sabtu: 08.00 - 11.00 (drg. Varendea) | 18.00 - 21.00 (drg. Afifah)'
  },
  {
    slug: 'poli-estetika',
    title: 'Poli Estetika',
    desc: 'Layanan perawatan kecantikan dan kesehatan kulit medis terpercaya yang diawasi langsung oleh dokter profesional.',
    icon: <Heart size={48} />,
    image: '/images/about-clinic.jpg',
    features: [
      'Perawatan jerawat & bekas jerawat',
      'Tindakan peremajaan kulit (Anti-aging)',
      'Facial medis & Peeling',
      'Konsultasi kesehatan kulit'
    ],
    schedule: 'Dengan Perjanjian Khusus'
  },
  {
    slug: 'ugd',
    title: 'Unit Gawat Darurat (UGD)',
    desc: 'Layanan penanganan gawat darurat yang cepat, responsif, dan siap sedia 24 jam setiap hari tanpa hari libur.',
    icon: <Ambulance size={48} />,
    image: '/images/fac-er.jpg',
    features: [
      'Penanganan luka dan trauma ringan-sedang',
      'Pertolongan pertama pada kecelakaan (P3K)',
      'Penanganan serangan asma, kejang, & dehidrasi',
      'Tersedia ambulans'
    ],
    schedule: 'BUKA 24 JAM'
  },
  {
    slug: 'rawat-inap',
    title: 'Rawat Inap',
    desc: 'Fasilitas rawat inap yang nyaman, bersih, dan diawasi oleh tenaga perawat dan dokter 24 jam penuh untuk proses pemulihan optimal.',
    icon: <Shield size={48} />,
    image: '/images/fac-inpatient.jpg',
    features: [
      'Kamar dengan sirkulasi udara baik',
      'Pemantauan medis 24 Jam',
      'Fasilitas makan bergizi sesuai kondisi medis',
      'Area tenang untuk mempercepat pemulihan'
    ],
    schedule: 'BUKA 24 JAM'
  },
  {
    slug: 'laboratorium',
    title: 'Laboratorium Medis',
    desc: 'Fasilitas laboratorium dengan peralatan modern untuk menunjang diagnosa penyakit secara cepat dan akurat.',
    icon: <Microscope size={48} />,
    image: '/images/fac-lab.jpg',
    features: [
      'Cek Darah Lengkap',
      'Cek Gula Darah, Asam Urat, & Kolesterol',
      'Pemeriksaan Urine',
      'Tes Cepat (Rapid Test)'
    ],
    schedule: 'Sesuai jam operasional Poli Umum'
  },
  {
    slug: 'farmasi',
    title: 'Layanan Farmasi',
    desc: 'Instalasi farmasi/apotek yang menyediakan berbagai obat-obatan lengkap dan berkualitas sesuai dengan resep dokter.',
    icon: <Pill size={48} />,
    image: '/images/fac-pharmacy.jpg',
    features: [
      'Obat-obatan paten dan generik',
      'Alat kesehatan ringan',
      'Pelayanan resep dokter cepat & tepat',
      'Konsultasi informasi obat'
    ],
    schedule: 'Sesuai jam operasional klinik'
  }
];

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen pt-32 pb-20 bg-light-gray font-sans">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-medical transition-colors">Beranda</Link>
          <ChevronRight size={14} />
          <Link href="/#layanan" className="hover:text-medical transition-colors">Layanan</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-semibold">{service.title}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Section */}
            <div className="relative aspect-square lg:aspect-auto bg-gray-100 h-full w-full">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
              <div className="absolute bottom-6 left-6 text-white lg:hidden">
                <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
                <p className="text-sm opacity-90">{service.schedule}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="w-16 h-16 bg-medical-light text-medical rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              
              <h1 className="hidden lg:block text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.desc}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Layanan Meliputi:</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-green-500 shrink-0" />
                    <span className="text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wider">Jadwal Operasional</p>
                <p className="font-semibold text-gray-900">{service.schedule}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6282333486600" target="_blank" rel="noreferrer" className="flex-1 bg-medical hover:bg-medical-dark text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors">
                  <PhoneCall size={20} /> Buat Janji Temu
                </a>
                <Link href="/#layanan" className="flex-none bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 py-4 px-6 rounded-full font-bold flex items-center justify-center transition-colors">
                  <ArrowLeft size={20} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
