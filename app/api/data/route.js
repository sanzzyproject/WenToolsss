import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    premium: {
      title: "PREMIUM SOURCE CODE",
      link: "https://lynk.id/sannnx",
      desc: "Akses eksklusif ke private repository dan script premium SANN404.",
      badge: "VIP ONLY"
    },
    // Menggunakan Devicon CDN untuk logo asli
    techStack: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true }, 
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      // Acode tidak punya official SVG di devicon, kita pakai icon custom text nanti di frontend
      { name: "Acode", logo: "acode_custom", isCustom: true }, 
    ],
    mainTools: [
      { name: "Universal Tools Hub", link: "https://webtoolssx.pages.dev", icon: "Globe", detail: "Koleksi lengkap alat bantu web development dalam satu pintu." },
      { name: "Developer Roadmap", link: "https://roadmap.sh", icon: "Map", detail: "Peta jalan karir dan pembelajaran programming interaktif." },
      { name: "SANN404 Community", link: "https://t.me/sannnforums", icon: "MessageCircle", detail: "Bergabung dengan diskusi teknis dan update terbaru." },
      { name: "GACHA NOKOS Bot", link: "https://t.me/sannnfreenokos", icon: "Bot", detail: "Bot otomatis penyedia nomor virtual gratis untuk verifikasi." },
      { name: "WhatsApp Backup", link: "https://whatsapp.com/channel/0029VbBb7LiKrWQwnJ3MS33g", icon: "Cloud", detail: "Saluran cadangan untuk informasi darurat dan notifikasi." },
    ],
    projects: [
      { name: "Web Monitoring AI", link: "https://websitemonitoring.vercel.app", desc: "Pemantauan berita trending realtime 24/7 dengan AI.", tags: ["AI", "News"] },
      { name: "Social Stalk & Pinterest", link: "https://socialmediastalkzone.vercel.app", desc: "Analisis profil sosial media & pencari gambar HD.", tags: ["OSINT", "Media"] },
      { name: "Web Scraping Pro", link: "https://scrapewebsites.vercel.app", desc: "Ekstraksi data website otomatis untuk analisis data.", tags: ["Data", "Python"] },
      { name: "Image to Prompt AI", link: "https://imagepromptstudio.vercel.app", desc: "Reverse engineering gambar menjadi text prompt.", tags: ["AI", "GenArt"] },
      { name: "ShortLinkify", link: "https://shortlinkify.vercel.app", desc: "Pemendek URL modern dengan analitik klik dasar.", tags: ["Utility"] },
      { name: "Web Portfolio V1", link: "https://portofolio-newproject.vercel.app", desc: "Template portofolio profesional siap pakai.", tags: ["Frontend"] },
      { name: "SANN Payment V2", link: "https://paysannforum.pages.dev", desc: "Gateway pembayaran digital versi modern & responsif.", tags: ["Fintech"] },
      { name: "Source Code Hub", link: "https://sourcecode-hub.pages.dev", desc: "Perpustakaan download script dan kode mentah.", tags: ["Library"] },
      { name: "Web Payment V1", link: "https://webpayment.pages.dev", desc: "Versi klasik sistem pembayaran sederhana.", tags: ["Legacy"] },
      { name: "PDDIKTI Data Search", link: "https://mahasiswaserch.pages.dev", desc: "Pencari data publik mahasiswa universitas Indonesia.", tags: ["Education"] },
      { name: "Website Screenshot", link: "https://screenshot-website.pages.dev", desc: "Bot screenshot website resolusi tinggi otomatis.", tags: ["Automation"] },
      { name: "AI Image Generator", link: "https://generate-gambar.pages.dev", desc: "Buat gambar unik dari teks (Text-to-Image).", tags: ["AI"] },
      { name: "Code Snippet Scraper", link: "https://getcoder.pages.dev", desc: "Pengambil potongan kode dari berbagai sumber.", tags: ["DevTool"] },
      { name: "TikTok Downloader", link: "https://tiktokdownloaderxz.pages.dev", desc: "Unduh video TikTok HD tanpa watermark.", tags: ["Media"] },
    ],
    company: {
      name: "SANN404 FORUM",
      owner: "SANN404",
      copyright: "© 2024 SANN404 FORUM Corp.",
      full_credit: "Engineered with Passion by SANN404.",
      support: "https://saweria.co/sannnforums"
    }
  };

  return NextResponse.json(data);
}
