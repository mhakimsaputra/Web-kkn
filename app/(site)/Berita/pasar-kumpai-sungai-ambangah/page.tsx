import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Pasar Kumpai Sungai Ambangah`}</title>
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
                      src={"/images/blog/pasar.jpg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                Musdes Program GSC Tahun 2016
                </h2>

              
                <div className="blog-details">
                  <p>
                  Sungai Ambangah,  Pasar kumpai merupakan pasar tradisional yang terletak di Dusun Kumpai Desa Sungai Ambangah kecamatan Sungai Raya Kabuapten Kubu Raya yang mana pasar ini di bangun sejak puluhan tahun yang lalu, pasar ini merupakan pasar yang menyediakan berbagai jenis bahan sembako, pakaian dan lain sebagainya , jarak pasar ini sangat dekat dengan pemukiman masyarkat Desa Sungai Ambangah sehingga pasar ini sangat memudahkan masyarkat desa untuk berbelanja keperluan sehari-har,i dan bukan hanya msayarakat Desa Sungai Ambangah saja yang berbelanja dipasar ini namun sebagian masyarakat desa tetanga juga berbelaja di pasar ini,
                  </p>

                    <p>
                    Pasar ini juga salah satu tempat persinggahan  motor air untuk berbelanja, dan pasar ini juga mempunyai dermaga yang cukup luas, pada sore dan malam hari pasar ini menjadi salah satu  tempat bersantai para remaja Desa Sungai Ambangah.

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
                  bagi masyarakat diluar Desa Sungai Ambangah ingin berkunjung ke Desa Sungai Ambangah jangan lupa untuk menyempatkan diri  bensantai melepas penat di pasar ini.
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
