import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Profil Desa",
    newTab: false,
    path: "/ProfilDesa",
  },
  // {
  //   id: 2.1,
  //   title: "Pemerintahan Desa",
  //   newTab: false,
  //   path: "/blog",
  //   submenu: [
  //     {
  //       id: 2.11,
  //       title: "Visi dan Misi",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Pemerintah Desa",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //   ],
  // },
  {
    id: 2.3,
    title: "Data Desa",
    newTab: false,
    path: "/docs",
    submenu: [
      {
        id: 2.31,
        title: "Data Pendidikan dalam KK",
        newTab: false,
        // path: "/blog",
        path: "/DataKK",
      },
      {
        id: 2.32,
        title: "Data Pekerjaan",
        newTab: false,
        // path: "/auth/signin",
        path: "/DataPekerjaan",
      },
      {
        id: 2.33,
        title: "Data Agama",
        newTab: false,
        // path: "/auth/signup",
        path: "/DataAgama",
      },
      {
        id: 2.34,
        title: "Data Jenis Kelamin",
        newTab: false,
        // path: "/docs",
        path: "/DataJenisKelamin",
      },
      {
        id: 2.35,
        title: "Data Warga Negara",
        newTab: false,
        path: "/DataWargaNegara",
      },
      {
        id: 2.36,
        title: "Data Pendidikan Sedang Ditempuh",
        newTab: false,
        path: "/DataPendidikanDitempuh",
      },
    ],
  },
  {
    id: 3,
    title: "Peta",
    newTab: false,
    path: "/support",
  },

  {
    id: 4,
    title: "Galeri",
    newTab: false,
    path: "/Galeri",
  },
  {
    id: 5,
    title: "Berita",
    newTab: false,
    path: "/Berita",
  },
];

export default menuData;
