import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    techStack: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    premium: {
      title: "PREMIUM KERNEL ACCESS",
      link: "https://lynk.id/sannnx",
      desc: "Akses prioritas ke soure code premium, skrip otomatisasi tingkat lanjut, dan dukungan pengembang langsung."
    },
    mainTools: [
      { name: "Universal Tools Hub", link: "https://webtoolssx.pages.dev", detail: "Suite komprehensif utilitas pengembangan web: Formatter, Converter, Minifier dalam satu antarmuka." },
      { name: "Developer Roadmap", link: "https://roadmap.sh", detail: "Panduan jalur karir terstruktur untuk Frontend, Backend, dan DevOps engineering." },
      { name: "Community Protocol", link: "https://t.me/sannnforums", detail: "Saluran komunikasi untuk diskusi teknis dan kolaborasi antar pengembang." },
      { name: "Virtual Number Gen", link: "https://t.me/sannnfreenokos", detail: "Bot penyedia nomor sementara untuk verifikasi OTP dan pengujian aplikasi." },
      { name: "Emergency Backup", link: "https://whatsapp.com/channel/0029VbBb7LiKrWQwnJ3MS33g", detail: "Jalur komunikasi cadangan untuk pembaruan status sistem kritis." },
    ],
    projects: [
      { name: "AI Web Monitor", link: "https://websitemonitoring.vercel.app", desc: "Sistem pelacakan perubahan konten web realtime berbasis kecerdasan buatan." },
      { name: "Social Analyzer", link: "https://socialmediastalkzone.vercel.app", desc: "Alat OSINT untuk analisis jejak digital profil media sosial publik." },
      { name: "Scraper Engine", link: "https://scrapewebsites.vercel.app", desc: "Mesin ekstraksi data web otomatis dengan kemampuan parsing DOM dinamis." },
      { name: "Prompt Engineer", link: "https://imagepromptstudio.vercel.app", desc: "Konverter gambar-ke-teks untuk optimasi prompt model difusi generatif." },
      { name: "ShortLink Analytics", link: "https://shortlinkify.vercel.app", desc: "web tools untuk mempersingkat url agar lebih profesional, mendukung url custom." },
      { name: "Portfolio Template", link: "https://portofolio-newproject.vercel.app", desc: "Boilerplate portofolio profesional berbasis html-css-js siap deploy." },
      { name: "Payment Gateway V2", link: "https://paysannforum.pages.dev", desc: "Integrasi sistem pembayaran digital modern dengan UI responsif." },
      { name: "Source Library", link: "https://sourcecode-hub.pages.dev", desc: "Repositori terpusat untuk berbagi potongan kode dan modul siap pakai." },
      { name: "Classic Payment", link: "https://webpayment.pages.dev", desc: "Versi legacy sistem pembayaran untuk kompatibilitas browser lama." },
      { name: "Academic Data", link: "https://mahasiswaserch.pages.dev", desc: "Antarmuka pencarian data publik perguruan tinggi terintegrasi API." },
      { name: "Screen Capture Bot", link: "https://screenshot-website.pages.dev", desc: "Layanan screenshot website full-page otomatis resolusi tinggi." },
      { name: "GenAI Imagine", link: "https://generate-gambar.pages.dev", desc: "Pembangkit gambar visual sintetik berbasis deskripsi teks natural." },
      { name: "Snippet Grabber", link: "https://getcoder.pages.dev", desc: "Alat ekstraksi blok kode sintaks dari halaman dokumentasi." },
      { name: "Media Downloader", link: "https://tiktokdownloaderxz.pages.dev", desc: "Utilitas pengunduh konten media sosial tanpa watermark metadata." },
    ],
    company: {
      name: "SANN404 FORUM",
      owner: "SANN404",
      copyright: "© 2026 SANN404 Inc. All rights reserved.",
      support: "https://saweria.co/sannnforums"
    },
    webDetail: {
      version: "v4.2.0 (Stable)",
      stack: "Next.js 14 App Router",
      styling: "Tailwind CSS + Framer Motion",
      deploy: "Vercel Edge Network",
      status: "Operational"
    }
  };

  return NextResponse.json(data);
}
