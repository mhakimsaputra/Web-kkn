import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Sungai Ambangah`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/PhotoGrid_1457165356911.jpg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                  Sungai Ambangah
                </h2>

              
                <div className="blog-details">
                  <p>
                  Sungai Ambangah, sungai ini adalah sungai pembatas antara Desa Sungai Ambangah dengan Desa Madu Sari pada beberapa tahun yang lalu sungai ini sebagai jalur utama  bagi masyarakat Desa Sungai  Ambangah, baik itu untuk anak-anak pergi berangkat sekolah maupun untuk masyarakat  pergi bekerja  ke Kota Pontianak, dan sungai ini juga merupakan salah satu sejarah terbentuknya Desa Sungai Ambangah.
                  </p>

                  <p>
                  Beberapa tahun yang lalu sungai ini belum selebar ukurannya dengan yang sekarang  setelah dilakukan normalisasi sungai ini menjadi sebuah sungai yang cukup lebar dan bersih, bagi masyarakat  Desa Sungai Ambangah  yang tinggal di pesisir sungai  ini,  apa bila dimusim penghujan dan air pasang sebagian rumah masyarkat terendam banjir dikarenkan sungai ini tidak mampu menampung air yang cukup deras dari datang muara Sungai Kapuas.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/pasar.jpg"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>
                    <br />

                  <p>
                  Alhamudulilah setelah sungai ini di normaliasi  tidak pernah lagi rumah masyarakat  terendam banjir pasang hingga sekarang, semakin berkembangnya zaman dan perekonomian masyarkat desa  meningkat sungai ini sudah jarang digunkan dikarenkan masyarakat  lebih memilih jalur darat.
                  </p>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
