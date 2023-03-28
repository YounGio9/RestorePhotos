import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  
  // console.log(process.env.NEXT_PUBLIC_GOOGLE_ID)

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <Head >
        <title>Old Photo Restoration Online with AI </title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <h1 className="max-w-4xl text-6xl font-extrabold text-white sm:text-center">
          Restore your old photos online with AI
        </h1>
        <p className="mt-6 text-xl sm:text-center max-w-2xl m-auto">
          Restore PHOTOS helps restore old photos 100% automatically. Powered by AI photo restoration technology, 
          it instantly removes scratches from damaged old photos online. Restore old photo now!
        </p>
        <div>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-900 leading-12 text-white">
          <Link
            className="relative w-1/2 bg-white border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
               rounded-md mt-8 block w-full m-1 py-2 text-sm font-medium whitespace-nowrap ring-2 ring-pink-500 hover:bg-zinc ring-opacity-50 z-10 sm:w-auto sm:px-8 font-semibold"  
            href="/restore">
            Restore your photos Now
          </Link></p>
        </div>
        <div className="items-center sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <Image
                  alt="Original photo of my bro"
                  src="/back.webp"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
