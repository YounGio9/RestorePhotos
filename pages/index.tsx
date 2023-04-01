import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { CompareSlider } from "../components/CompareSlider";

const Home: NextPage = () => {
  
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <Head >
        <title>Restore Photos </title>
      </Head>
      <Header />
      <main className="w-full flex flex-col items-center justify-center text-center px-4 mt-2">
        <div className="border-t-2 border-white dark:border-black w-[100vw] border-b p-12">
           <h1 className="mt-6 lg:text-6xl w-[100vw] text-white dark:text-black text-sm sm:text-xl sm:text-center max-w-3xl font-bold m-auto">
          The only photo enhancer you'll ever need
        </h1>
        <p className="mt-6 text-sm sm:text-xl text-white dark:text-black sm:text-center max-w-2xl font-bold m-auto">
          Uploads your old, blurry, and low-quality photos. With a single click, you can  bring memories back  to life in ultra-sharp, high definition.
        </p>
        </div>
        <div className="w-[100vw] border-white dark:border-black border-b-2">
 <p className="mx-auto mt-8 max-w-sm text-lg text-slate-900 leading-12 text-white">
          <Link
            className="relative bg-white dark:bg-black text-2xl shadow-sm dark:text-white
               rounded-full text-black font-bold block m-1 py-4 text-sm whitespace-nowrap ring-2 hover:bg-blue-300 ring-opacity-50 z-10 sm:px-8 font-bold"  
            href="/restore">
            Restore your photos Now
          </Link></p>
        </div>
       
        <div>
          <img alt="Compare " className="w-full xl:w-2/3 m-auto " src='/comparePicture.png'/>
        </div>
        <div className="border-t border-black dark:border-white w-[100vw] "></div>
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:flex-row my-6 lg:justify-around m-auto">
          <div className=" flex justify-between items-center w-1/3 text-left ">
            <div>
<h2 className="flex leading-tight font-bold flex-col text-6xl dark:text-black text-white">Pictures <span className="text-[#fdd36a]">restored</span></h2>
            <p className="block dark:text-black text-white my-8 text-xl ">With restorePhotos you can  restore  even small and vintages images in just a few seconds </p>
            <button className="bg-white text-black rounded-full dark:bg-black dark:text-white px-8 py-2 font-bold"> <Link href={'/restore'}>Try it now </Link></button>
            </div>
            
          </div>
          <div className="lg:basis-1/4">

          <CompareSlider
              original={'/babeFlou.webp'}
              restored={'/babeEnhanced.webp'}
              
              
            />
          </div>
        </div>
       
        <div>
        
        </div>
        <div className="border-t-2 dark:border-black border-white w-[100vw] p-12">
           <h1 className="max-w-4xl dark:text-black leading-snug text-6xl  block m-auto font-extrabold text-white sm:text-center">
          Any questions ?
        </h1>
        <button className="dark:bg-black my-12 text-2xl text-white rounded-full px-10 py-2 font-bold bg-slate-800">Contact FAQ </button>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
