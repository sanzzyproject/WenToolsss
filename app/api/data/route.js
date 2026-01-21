import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    premium: {
      title: "PREMIUM CODE ACCESS",
      link: "https://lynk.id/sannnx",
      desc: "Dapatkan akses eksklusif ke source code premium yang tidak dipublikasikan secara umum."
    },
    techStack: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", invert: true }, 
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
    mainTools: [
      { name: "Akses Semua Tools", link: "https://webtoolssx.pages.dev", icon: "Globe", detail: "Gerbang utama menuju seluruh koleksi alat bantu web." },
      { name: "Developer Roadmap", link: "https://roadmap.sh", icon: "Map", detail: "Panduan jalur belajar programming terlengkap dan interaktif." },
      { name: "Telegram Channel", link: "https://t.me/sannnforums", icon: "MessageCircle", detail: "Komunitas diskusi dan update info terbaru SANN404." },
      { name: "GACHA NOKOS", link: "https://t.me/sannnfreenokos", icon: "Gift", detail: "Bot Telegram untuk mendapatkan nomor kosong gratis." },
      { name: "Backup Saluran", link: "https://whatsapp.com/channel/0029VbBb7LiKrWQwnJ3MS33g", icon: "Cloud", detail: "Saluran cadangan WhatsApp agar tidak ketinggalan info." },
    ],
    projects: [
      { name: "Web Monitoring", link: "https://websitemonitoring.vercel.app", desc: "Sistem AI canggih untuk memantau berita trending secara realtime 24/7." },
      { name: "Social Stalk & Pinterest", link: "https://socialmediastalkzone.vercel.app", desc: "Mesin pencari gambar Pinterest dan alat analisis profil sosial media." },
      { name: "Web Scraping Pro", link: "https://scrapewebsites.vercel.app", desc: "Alat ekstraksi data website otomatis untuk kebutuhan analisis data." },
      { name: "Image to Prompt AI", link: "https://imagepromptstudio.vercel.app", desc: "Konversi gambar apapun menjadi teks prompt AI (Stable Diffusion/Midjourney)." },
      { name: "ShortLinkify", link: "https://shortlinkify.vercel.app", desc: "Layanan pemendek URL modern dengan analitik klik sederhana." },
      { name: "Web Portofolio V1", link: "https://portofolio-newproject.vercel.app", desc: "Template portofolio profesional siap pakai (Source code tersedia)." },
      { name: "SANN Payment V2", link: "https://paysannforum.pages.dev", desc: "Gerbang pembayaran digital versi 2.0 dengan antarmuka yang lebih responsif." },
      { name: "Source Code Hub", link: "https://sourcecode-hub.pages.dev", desc: "Perpustakaan pusat untuk mengunduh berbagai script dan kode mentah." },
      { name: "Web Payment V1", link: "https://webpayment.pages.dev", desc: "Versi klasik sistem pembayaran sederhana untuk pemula." },
      { name: "Mahasiswa Data Search", link: "https://mahasiswaserch.pages.dev", desc: "Mesin pencari data publik mahasiswa universitas di Indonesia (PDDIKTI)." },
      { name: "Website Screenshot", link: "https://screenshot-website.pages.dev", desc: "Bot otomatis pengambil tangkapan layar website resolusi tinggi." },
      { name: "AI Image Generator", link: "https://generate-gambar.pages.dev", desc: "Buat gambar unik dari teks menggunakan teknologi Generative AI." },
      { name: "Get Code Scraper", link: "https://getcoder.pages.dev", desc: "Alat bantu developer untuk mengambil snippet code dari berbagai sumber." },
      { name: "TikTok Downloader No-WM", link: "https://tiktokdownloaderxz.pages.dev", desc: "Unduh video TikTok tanpa watermark dengan kualitas HD." },
    ],
    about: {
      title: "Tentang SANN404 FORUM",
      description: "Platform ini dibangun sebagai pusat sumber daya (Resource Hub) bagi para pengembang dan pegiat teknologi. Menggunakan arsitektur modern Next.js dan Node.js, website ini menjamin kecepatan dan keamanan data. Dibuat sepenuhnya di perangkat mobile menggunakan Acode.",
      techLabel: "Powered by Modern Tech Stack"
    },
    company: {
      name: "SANN404 FORUM",
      owner: "SANN404",
      copyright: "© 2024 SANN404 FORUM Corp. All rights reserved.",
      support: "https://saweria.co/sannnforums"
    }
  };

  return NextResponse.json(data);
}
