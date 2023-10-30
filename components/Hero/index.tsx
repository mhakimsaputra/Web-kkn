"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                Desa Sungai Ambangah
              </h1>
              <p>
                Desa Sungai Ambangah merupakan Desa yang berada didalam wilayah
                Kecamatan Sungai Raya, Kabupaten Kubu Raya, yang terdiri dari 5
                (lima) Dusun, Dusun Mekar Sari, Dusun Kampung Baru, Dusun Karya
                Sari, Dusun Karya Desa dan Dusun Kumpai.
              </p>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden shadow-solid-l"
                    src="/images/hero/maxresdefault (1).jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block shadow-solid-l"
                    src="/images/hero/maxresdefault (1).jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
