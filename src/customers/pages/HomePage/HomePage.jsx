import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { diabetes } from '../../../Data/diabetes'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={diabetes} sectionName={"Diabates"}/>
            <HomeSectionCarousel data={diabetes} sectionName={"Suppliments"}/>
            <HomeSectionCarousel data={diabetes} sectionName={"Disinfectants"}/>
            <HomeSectionCarousel data={diabetes} sectionName={"Vitamins"}/>
        </div>
    </div>
  )
}

export default HomePage