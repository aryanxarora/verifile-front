import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'

export default function Home() {
  return (
    <div className='flex flex-row'>
      <Head>
        <title>VeriFile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LeftSideBar />
      <Body />
      <RightSideBar />

    </div>
  )
}
