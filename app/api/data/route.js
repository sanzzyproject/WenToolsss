import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    premium: {
      title: "📦 PREMIUM CODE ACCESS",
      link: "https://lynk.id/sannnx",
      isHighlight: true
    },
    mainTools: [
      { name: "Akses Semua Tools", link: "https://webtoolssx.pages.dev", icon: "Globe" },
      { name: "Developer Roadmap", link: "https://roadmap.sh", icon: "Map" },
      { name: "Telegram Channel", link: "https://t.me/sannnforums", icon: "MessageCircle" },
      { name: "GACHA NOKOS", link: "https://t.me/sannnfreenokos", icon: "Gift" },
      { name: "Backup Saluran", link: "https://whatsapp.com/channel/0029VbBb7LiKrWQwnJ3MS33g", icon: "Cloud" },
    ],
    projects: [
      { name: "Web Monitoring", link: "https://websitemonitoring.vercel.app", desc: "AI mencari berita trending realtime" },
      { name: "Social Stalk & Pinterest", link: "https://socialmediastalkzone.vercel.app", desc: "Stalking media sosial & search img" },
      { name: "Web Scraping", link: "https://scrapewebsites.vercel.app", desc: "Tools Scraper Handal" },
      { name: "Image to Prompt", link: "https://imagepromptstudio.vercel.app", desc: "Convert Gambar ke Teks AI" },
      { name: "ShortLink", link: "https://shortlinkify.vercel.app", desc: "Mempersingkat Link Panjang" },
      { name: "Web Portofolio", link: "https://portofolio-newproject.vercel.app", desc: "Source code di saluran cek aja" },
      { name: "Web Payment V2", link: "https://paysannforum.pages.dev", desc: "Simpel payment gateway" },
      { name: "Source Code Hub", link: "https://sourcecode-hub.pages.dev", desc: "Kumpulan Source Code" },
      { name: "Web Payment V1", link: "https://webpayment.pages.dev", desc: "Versi lama simpel" },
      { name: "Mahasiswa Search", link: "https://mahasiswaserch.pages.dev", desc: "Cari data publik mahasiswa" },
      { name: "Screenshot Website", link: "https://screenshot-website.pages.dev", desc: "SC Web otomatis" },
      { name: "Generate Gambar", link: "https://generate-gambar.pages.dev", desc: "AI Generator Image" },
      { name: "Get Code", link: "https://getcoder.pages.dev", desc: "Ambil kode script" },
      { name: "TikTok Downloader", link: "https://tiktokdownloaderxz.pages.dev", desc: "Download tanpa watermark" },
    ],
    support: {
      owner: "SANN404",
      link: "https://saweria.co/sannnforums"
    }
  };

  return NextResponse.json(data);
}
