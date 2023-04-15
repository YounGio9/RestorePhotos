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
    <div className="flex flex-col items-center w-[100%] justify-center py-6">
      <Head >
        <title>Restore Photos </title>
      </Head>
      <Header />
      <main className="w-full flex flex-col items-center justify-center text-center px-4 mt-2">
        <div className=" w-[100%] p-12">
           <h1 className="mt-6 mb-6 lg:text-7xl text-3xl lg:leading-snug block w-[100%] text-white dark:text-black text-sm sm:text-4xl sm:text-center max-w-5xl font-bold m-auto">
          The only photo enhancer you'll ever need
        </h1>
        <p className="text-sm sm:text-xl text-white dark:text-black sm:text-center max-w-4xl font-medium m-auto">
          Uploads your old, blurry, and low-quality photos. With a single click, you can  bring memories back  to life in ultra-sharp, high definition.
        </p>
        </div>
        <div className="w-[100%]">
 <p className="mx-auto mt-8 max-w-sm text-lg text-slate-900 leading-12 text-white">
          <Link
            className="relative bg-white dark:bg-black lg:text-2xl shadow-sm dark:text-white
               rounded-full text-black block m-1 py-4 text-sm whitespace-nowrap ring-2 hover:bg-blue-300 ring-opacity-50 z-10 sm:px-8 font-bold"  
            href="/restore">
            Restore your photos Now
          </Link></p>
        </div>
       
        <div className="mb-24">
          <img alt="Compare " className="w-full xl:w-full mt-20 border-separate rounded-3xl m-auto " src='/comparePicture.png'/>
        </div>
        
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:flex-row my-6 lg:justify-around m-auto">
          <div className=" flex justify-between items-center w-full sm:w-1/3  text-left ">
            <div>
<h2 className="flex leading-tight font-bold flex-col text-7xl dark:text-black text-white">Pictures <span className="text-[#fdd36a]">restored</span></h2>
            <p className="block dark:text-black text-white my-8 text-2xl ">With restorePhotos you can  restore  even small and vintages images in just a few seconds </p>
            <button className="bg-white text-xl text-black rounded-full dark:bg-black dark:text-white px-8 py-2 font-bold">
               <Link href={'/restore'} className="py-4 text-2xl">Try it now </Link></button>
            </div>
            
          </div>
          <div className="lg:basis-2/4 rounded-full">

          <CompareSlider
              original={'/babeFlou.webp'}
              restored={'/babeEnhanced.webp'}
              
              
            />
          </div>
        </div>
       
        <div>
        
        </div>
        <div className=" dark:border-black border-white w-[100%] p-12">
           <h1 className="max-w-4xl dark:text-black leading-snug text-4xl lg:text-7xl  block m-auto font-bold text-white sm:text-center">
          Any questions ?
        </h1>
        <p className="text-sm sm:text-xl text-white dark:text-black sm:text-center max-w-3xl mt-6 font-medium m-auto">
        Remini Mobile App and <span className="font-bold">Remini Web</span>  are two separate services with different subscriptions. If you want to know more about the two subscriptions, visit the FAQ section for the specific product.
        </p>

        <p className="sm:text-xl text-white lg:text-2xl dark:text-black sm:text-center max-w-3xl mt-6 font-bold pt-6 m-auto">
          Which subscription do you have ?
        </p>
        {/* <div className="py-8 w-1/2 dark:bg-black my-12 text-2xl m-auto flex items-center justify-between text-white rounded-2xl px-10 font-semibold bg-[#121216]">
       <span> RestorePhotos Mobile App</span>
       <button className="py-4 px-8 border-2 rounded-full">Read FAQ </button>
          </div>
          <div className="py-8 w-1/2 dark:bg-black  my-12 text-2xl m-auto flex items-center justify-between text-white rounded-2xl px-10  font-semibold bg-[#121216]">
       <span> RestorePhotos Mobile App</span>
          <button className="py-4 px-8 border-2 rounded-full">Read FAQ </button>
          </div> */}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
