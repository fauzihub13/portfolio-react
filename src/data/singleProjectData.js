// Import images
import Image1 from '../images/thumbnail/OneHomeFarm.png';
import Image2 from '../images/thumbnail/GorTour.png';
import Image3 from '../images/thumbnail/Mibridge.png';
import Image4 from '../images/thumbnail/SimPet.png';
import Image5 from '../images/thumbnail/GorBoen.png';
import Image6 from '../images/thumbnail/HalalHub.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
  ProjectHeader: {
    title: "Project Webs and Mobile Apps",
    publishDate: "Jun 20, 2024",
    tags: "Full Stack",
  },
  ProjectImages: [
    {
      id: 1,
      title: "One Home Farm",
      img: Image1,
    },
    {
      id: 2,
      title: "GorTour",
      img: Image2,
    },
    {
      id: 3,
      title: "Mibridge",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Itamachi Inc",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://itamachi.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "08965230325",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Klien kami adalah perusahaan rintisan di bidang pariwisata dan agrikultur yang ingin mengembangkan aplikasi mobile serta web untuk mempromosikan layanan wisata dan kebun mereka. Mereka menginginkan solusi digital yang dapat memberikan informasi lengkap dan pengalaman pengguna yang menarik bagi pengunjung.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "TailwindCSS",
          "AdobeXD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Klien kami adalah perusahaan rintisan yang berfokus pada pengembangan destinasi wisata dan agrikultur, dengan tujuan utama mempromosikan layanan wisata dan kebun mereka. Perusahaan ini menawarkan berbagai pengalaman menarik, mulai dari tur kebun yang edukatif hingga kegiatan rekreasi yang menyenangkan. Mereka berkomitmen untuk menghubungkan wisatawan dengan keindahan alam dan pengetahuan agrikultur melalui teknologi modern.",
      },
      {
        id: 2,
        details:
          "Dalam upaya untuk mencapai tujuan tersebut, klien kami ingin mengembangkan aplikasi mobile dan web yang canggih dan mudah digunakan. Aplikasi ini akan menyediakan informasi lengkap tentang berbagai paket wisata, jadwal tur, dan detail kebun yang tersedia. Pengguna akan dapat dengan mudah memesan tiket, mendapatkan panduan virtual, serta menerima pembaruan real-time tentang kegiatan dan acara khusus yang diadakan di lokasi.",
      },
      {
        id: 3,
        details:
          "Selain itu, aplikasi ini juga akan menampilkan fitur interaktif seperti peta kebun digital, video tur 360 derajat, dan modul pembelajaran tentang tanaman dan teknik pertanian yang digunakan. Dengan desain yang intuitif dan ramah pengguna, aplikasi ini akan memberikan pengalaman yang menyenangkan dan informatif bagi pengunjung dari segala usia. Integrasi dengan media sosial juga akan memungkinkan pengguna untuk berbagi pengalaman mereka dan menarik lebih banyak wisatawan.",
      },
      {
        id: 4,
        details:
          "Secara keseluruhan, klien kami berusaha untuk memanfaatkan teknologi digital untuk meningkatkan aksesibilitas dan daya tarik layanan wisata dan kebun mereka. Dengan aplikasi mobile dan web yang inovatif, mereka berharap dapat menjangkau audiens yang lebih luas, meningkatkan keterlibatan pengunjung, dan pada akhirnya, memperkuat posisi mereka sebagai destinasi wisata agrikultur terkemuka.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://x.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/in/fauziaditra",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/@fauziadisaputra9421",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Image4,
      },
      {
        id: 2,
        title: "Web Application",
        img: Image5,
      },
      {
        id: 3,
        title: "UI Design",
        img: Image6,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Image3,
      },
    ],
  },
};
