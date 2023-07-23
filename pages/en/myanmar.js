import React from "react";
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const myanmar = () => {
  return (
    <MainLayoutEn>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              Myanmar Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1657618380.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full px-8">
              <h2 className="font-serif text-2xl text-gray-800 font-bold ">
                Sakura Tower Yangon
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify">
                Sakura Tower was completed in 1999 by Japanese architects Nihon
                Sekkei and Konoike Construction cp Ltd. It stands in the very
                heart of Yangon&apos;s central business and Government district, and
                is a 20 story office building with total lentable are of 12,425
                sqm and 9 feet floor heights. The first 3floors are rental areas
                of 1,183 sqm with ticket offices of leading airline companies as
                well as travel agencies, dentists, showrooms and so on. From the
                5th floor up are offices of multinational companies and
                organizations such as JICA (Japan International Corporation
                Agency), Mitsubishi Corporation, Nikkei, and NHK.
              </p>
              <Link href="/en/sakuratower">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  LEARN MORE
                </a>
              </Link>
            </div>

            <div className="flex justify-center col-span-2 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex md:order-last md:ml-16 w-full">
                  <img
                    src="/assets/img/md_1657618555.jpg"
                    loading="lazy"
                    className="transition duration-300 ease-linear align-middle w-full"
                  />
                </div>
                <div className="w-full px-8 pb-8">
                  <h2 className="font-serif text-2xl text-gray-800 font-bold mt-8 ">
                    Sakura Residence
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify mr-8">
                    The luxurious Sakura Residence is undoubtedly Yangon&rsquo;s
                    original expatriate community. Located among the private
                    residences and sweeping palms of Inya Road, it is
                    conveniently located equidistant and just minutes from the
                    international airport and Yangon&rsquo;s central business
                    district. Nestled on the crest ...
                  </p>
                  <Link href="/en/sakuraresidence">
                    <a
                      className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      role="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      LEARN MORE
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-200 w-full p-8">
        <h2 className="flex justify-center m-0 pt-4 font-serif text-3xl text-gray-800 text-center font-semibold">
          Key Personnels
        </h2>
        <div className="flex justify-center">
          <hr className="border-b border-1 border-rose-300 w-16 mt-4" />
        </div>
      </div> */}
{/* 
      <div>
        <div className="container my-24 px-6 mx-auto">
  
  <section className="mb-32 text-gray-800 text-center">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 xl:gap-x-4">
      <div className="mb-6 lg:mb-0">
        <div>
          <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="/assets/img/team/1660884961.jpg" className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
          <h5 className="text-lg font-bold mb-3">Welcome to California</h5>
          <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z" /></svg>Travels
          </div>
          <p className="text-gray-500 mb-6">
            <small>Published <u>13.01.2022</u> by
              <a href className="text-gray-900">Anna Maria Doe</a></small>
          </p>
          <p className="text-gray-500">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum. Donec a ullamcorper diam.
          </p>
        </div>
      </div>

<div className="mb-6 lg:mb-0">
        <div>
          <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="/assets/img/team/1660884961.jpg" className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
          <h5 className="text-lg font-bold mb-3">Welcome to California</h5>
          <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z" /></svg>Travels
          </div>
          <p className="text-gray-500 mb-6">
            <small>Published <u>13.01.2022</u> by
              <a href className="text-gray-900">Anna Maria Doe</a></small>
          </p>
          <p className="text-gray-500">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum. Donec a ullamcorper diam.
          </p>
        </div>
      </div>
      <div className="mb-6 lg:mb-0">
        <div>
          <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="/assets/img/team/1660884961.jpg" className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
          <h5 className="text-lg font-bold mb-3">Exhibition in Paris</h5>
          <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>Art
          </div>
          <p className="text-gray-500 mb-6">
            <small>Published <u>12.01.2022</u> by
              <a href className="text-gray-900">Halley Frank</a></small>
          </p>
          <p className="text-gray-500">
            Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
            orci, nec ornare metus semper sed. Integer volutpat ornare erat
            sit amet rutrum.
          </p>
        </div>
      </div>
      <div className="mb-0">
        <div>
          <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src="/assets/img/team/1660884961.jpg" className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
            </a>
          </div>
          <h5 className="text-lg font-bold mb-3">Stock market boom</h5>
          <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z" /></svg>Business
          </div>
          <p className="text-gray-500 mb-6">
            <small>Published <u>10.01.2022</u> by
              <a href className="text-gray-900">Joe Svan</a></small>
          </p>
          <p className="text-gray-500">
            Curabitur tristique, mi a mollis sagittis, metus felis mattis
            arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
            massa volutpat feugiat. Donec.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

</div> */}




      

    </MainLayoutEn>
  );
};

export default myanmar;
