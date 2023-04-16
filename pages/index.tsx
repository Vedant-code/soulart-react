import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Image from "../components/Header";
import Feed from "../components/Feed"
import Modal from "../components/Modal"


const Home: NextPage = () => {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Soulian Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header></Header> */}
      
      <Header/>
      <Feed/>
      <Modal/>
    </div>
  )
}

export default Home
