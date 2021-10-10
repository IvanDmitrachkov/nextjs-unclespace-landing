// packages
import React from 'react'
import Head from 'next/head'
import BannerFullScreen from 'components/BannerFullScreen/BannerFullScreen'

const HomePage = () => {
  return (
    <div className='pb-100'>
      <Head>
        <title>NextJS - Unclespace group</title>
      </Head>
      <BannerFullScreen
        title='Unclespace group'
      />
      <div className='pt-100' />
      <BannerFullScreen
        title='Забудь о реальности'
        text='Тобой будут восхищаться, тебя будут ненавидеть'
      />
    </div>
  )
}
export default HomePage
