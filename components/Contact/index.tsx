// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Contact = () => {
//   /**
//    * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
//    * Reason: To fix rehydration error
//    */
//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* <!-- ===== Contact Start ===== --> */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0">
//         <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
//           <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
//           <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
//             <Image
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//               fill
//             />
//             <Image
//               src="./images/shape/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//               fill
//             />
//           </div>

//           <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15"
//             >
//               <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">
//                 Send a message
//               </h2>

//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
//                   />
//                 </div>

//                 <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
//                   />
//                 </div>

//                 <div className="flex mb-11.5">
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
//                   ></textarea>
//                 </div>

//                 <div className="flex flex-wrap xl:justify-between ">
//                   <div className="flex mb-4 md:mb-0">
//                     <input
//                       id="default-checkbox"
//                       type="checkbox"
//                       value=""
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
//                     />
//                     <label
//                       htmlFor="default-checkbox"
//                       className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
//                     >
//                       By clicking Checkbox, you agree to use our “Form” terms
//                       And consent cookie usage in browser.
//                     </label>
//                   </div>

//                   <button aria-label="send message" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
//                     Send Message
//                     <svg
//                       className="fill-white"
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
//                         fill=""
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 2, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15"
//             >
//               <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
//                 Find us
//               </h2>

//               <div className="mb-7 5">
//                 <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
//                   Our Loaction
//                 </h4>
//                 <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
//               </div>
//               <div className="mb-7 5">
//                 <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
//                   Email Address
//                 </h4>
//                 <p>
//                   <a href="#">yourmail@domainname.com</a>
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
//                   Phone Number
//                 </h4>
//                 <p>
//                   <a href="#">+009 42334 6343 843</a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Contact End ===== --> */}
//     </>
//   );
// };

// export default Contact;

"use client";
import React from "react";

const index2 = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.44380396021!2d109.44375911951947!3d-0.14538703290118113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d51c53530135b%3A0x89f5a743fed2419e!2sKantor%20Desa%20Sungai%20Ambangah!5e0!3m2!1sen!2sid!4v1695315059579!5m2!1sen!2sid"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ALAMAT
              </h2>
              <p className="mt-1">
                Jl.Karya Desa No.45 Sungai Ambangah Sungai Raya Kubu Raya Kode
                Pos 78391
              </p>
            </div>
            
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black text-lg mb-1 font-medium title-font">
            Hubungi Kami
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
          {/* <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default index2;
