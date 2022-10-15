import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>VeriFile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex h-screen">
        <div className="w-1/6"><LeftSideBar /></div>
        <div className='w-4/6 bg-blue-100'><Body /></div>
        <div className='w-1/6'><RightSideBar /></div>
      </div>
      

    </div>
  )
}
