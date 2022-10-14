import Head from 'next/head'
import Image from 'next/image'
import LeftSideBar from '../components/LeftSideBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>VeriFile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Left Side Bar */}
      <LeftSideBar/>
      {/* Body */}
      {/* Right Side Bar */}
    </div>
  )
}
