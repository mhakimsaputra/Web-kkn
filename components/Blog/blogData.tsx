// Blog type
export interface Blog {
  _id: number;
  mainImage: string;
  title: string;
  metadata: string;
  link: string; // new field
}

// BlogData array
const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/PhotoGrid_1457165356911.jpg",
    title: "Sungai Ambangah",
    metadata:
      "Sungai Ambangah, sungai ini adalah sungai pembatas antara Desa Sungai Ambangah dengan Desa Madu Sari pada beberapa tahun yang lalu sungai ini sebagai jalur utama.",
    link: "/Berita/Sungai-Ambangah", // new field
  },
  {
    _id: 2,
    mainImage: "/images/hero/12.jpg",
    title: "Musdes Program GSC Tahun 2016",
    metadata:
      "Musyawarah Desa Program Genarasi sehat dan cerdas (GSC) Tahun Anggaran 2016 yang dilaksanakan  di Kantor Desa Sungai Ambangah.",
    link: "/Berita/Musdes-Program", // new field
  },
  {
    _id: 3,
    mainImage: "/images/hero/pasar.jpg",
    title: "Pasar Kumpai Sungai Ambangah",
    metadata:
      "Sungai Ambangah,  Pasar kumpai merupakan pasar tradisional yang terletak di Dusun Kumpai Desa Sungai Ambangah.",
    link: "/Berita/pasar-kumpai-sungai-ambangah", // new field
  },
  // {
  //   _id: 4,
  //   mainImage: "/images/blog/blog-03.png",
  //   title: "Free advertising for your online business",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/free-advertising-for-your-online-business", // new field
  // },
  // {
  //   _id: 5,
  //   mainImage: "/images/blog/blog-04.png",
  //   title: "9 simple ways to improve your design skills",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/9-simple-ways-to-improve-your-design-skills", // new field
  // },
  // {
  //   _id: 6,
  //   mainImage: "/images/blog/blog-01.png",
  //   title: "Tips to quickly improve your coding speed.",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  //   link: "https://example.com/tips-to-quickly-improve-your-coding-speed", // new field
  // },
];

export default BlogData;