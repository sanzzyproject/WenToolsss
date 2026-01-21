import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    premium: {
      title: "PREMIUM ACCESS",
      link: "https://lynk.id/sannnx",
      desc: "Akses source code private dan script premium SANN404."
    },
    techStack: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, // Pengganti Acode
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, 
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
    mainTools: [
      { name: "Universal Tools Hub", link: "https://webtoolssx.pages.dev", detail: "Koleksi lengkap alat bantu web development dalam satu pintu." },
      { name: "Developer Roadmap", link: "https://roadmap.sh", detail: "Peta jalan karir dan pembelajaran programming interaktif." },
      { name: "SANN404 Community", link: "https://t.me/sannnforums", detail: "Bergabung dengan diskusi teknis dan update terbaru." },
      { name: "GACHA NOKOS Bot", link: "https://t.me/sannnfreenokos", detail: "Bot otomatis penyedia nomor virtual gratis." },
      { name: "WhatsApp Backup", link: "https://whatsapp.com/channel/0029VbBb7LiKrWQwnJ3MS33g", detail: "Saluran cadangan untuk informasi darurat." },
    ],
    projects: [
      { name: "Web Monitoring AI", link: "https://websitemonitoring.vercel.app", desc: "Pemantauan berita trending realtime 24/7." },
      { name: "Social Stalk", link: "https://socialmediastalkzone.vercel.app", desc: "Analisis profil sosial media & pencari gambar." },
      { name: "Web Scraping Pro", link: "https://scrapewebsites.vercel.app", desc: "Ekstraksi data website otomatis." },
      { name: "Image to Prompt", link: "https://imagepromptstudio.vercel.app", desc: "Reverse engineering gambar menjadi text." },
      { name: "ShortLinkify", link: "https://shortlinkify.vercel.app", desc: "Pemendek URL modern dengan analitik." },
      { name: "Web Portfolio V1", link: "https://portofolio-newproject.vercel.app", desc: "Template portofolio profesional siap pakai." },
      { name: "SANN Payment V2", link: "https://paysannforum.pages.dev", desc: "Gateway pembayaran digital versi modern." },
      { name: "Source Code Hub", link: "https://sourcecode-hub.pages.dev", desc: "Perpustakaan download script." },
      { name: "Web Payment V1", link: "https://webpayment.pages.dev", desc: "Versi klasik sistem pembayaran." },
      { name: "PDDIKTI Data", link: "https://mahasiswaserch.pages.dev", desc: "Pencari data mahasiswa Indonesia." },
      { name: "Web Screenshot", link: "https://screenshot-website.pages.dev", desc: "Bot screenshot website resolusi tinggi." },
      { name: "AI Image Gen", link: "https://generate-gambar.pages.dev", desc: "Buat gambar unik dari teks." },
      { name: "Code Snippet", link: "https://getcoder.pages.dev", desc: "Pengambil potongan kode." },
      { name: "TikTok Downloader", link: "https://tiktokdownloaderxz.pages.dev", desc: "Unduh video TikTok tanpa watermark." },
    ],
    company: {
      name: "SANN404 FORUM",
      owner: "SANN404",
      copyright: "© 2024 SANN404 FORUM Corp.",
      support: "https://saweria.co/sannnforums"
    }
  };

  return NextResponse.json(data);
}
