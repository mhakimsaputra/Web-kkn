
import Image from "next/image";
import dynamic from 'next/dynamic';
import SidebarLink from "@/components/Docs/SidebarLink";
import ChartPendidianDitempuh from "@/components/Charts/ChartPendidikanDitempuh";
import Table from "@/components/Table/TablePendidikanDitempuh";

export default function DocsPage() {
  return (
    <>
      <title>Data Pendidikan Ditempuh</title>

      <section className="pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2>Data Statistik Pendidikan Sedang Ditempuh</h2>
                <div className="mb-10 w-full overflow-hidden mt-15">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <ChartPendidianDitempuh  />
                  </div>
                </div>

                <Table/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}