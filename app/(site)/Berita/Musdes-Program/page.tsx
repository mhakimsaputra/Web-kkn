import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Musder Program`}</title>
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
                      src={"/images/blog/12.jpg"}
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
                  Musyawarah Desa Program Genarasi sehat dan cerdas (GSC) Tahun Anggaran 2016 yang dilaksanakan  di Kantor Desa Sungai Ambangah pada dalam rangka mensosialisasikan tujuan dan sasaran penerima bantuan dari Program ini yang dipimpin langsung Kepala Desa Sungai Ambangah dan dihadiri fasilalitator Kabupaten dan  fasilitator Kecamatan beserta perwakilan BPD,LPM DUSUN Ketua RW dan masyarakat Desa Sungai Ambangah,
Dalam kata sambuatan Kepala desa, Kepala Desa berharap  kepada kader-kader  Desa untuk mensukseskan  program ini agar berjalan dengan lancar dan tepat sasaran sehingga  dapat membantu meringankan beban masyarakat  Desa Sungai  Ambangah khusunya kepada para keluarga yang berhak masuk dalam katagori penerima manfaat Program ini. 
                  </p>


                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/12.jpg"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>
                  <br />
                  <p>
                  ada beberapa hal yang disampaikan oleh fasilitator dan yang perlu digaris bawahi yang berhak menerima bantuan dari program ini dibidang kesehatan terutama ibu hamil,ibu menyusui, dan anak-anak balita kurang asupan gizi yang selama ini belum pernah mendapatkan pelayanan kesehatan dengan tujuan untuk meningkatkan kesehatan ibu dan anak-anak tersebut, dan selanjutnya disampaikan oleh fasilitator untuk dibidang pendidikan yang berhak menerima bantuan dari program ini adalah anak-anak usia Sekolah  hingga tamat Sekolah Dasar (SD) dan dan anak-anak Sekolah Lanjutan Tingakat Pertama (SLTP) yang kurang mampu yang belum pernah sama sekali mendapatkan bantuan dari Pemerintah.
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
