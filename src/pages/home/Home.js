import React from 'react'
import CarouselNotice from '../carousel/CarouselNotice'
import VideoGalary from '../galary/VideoGalary'
import Location from '../location/Location'
import ImportantPersons from '../Persons/ImportantPersone'

export default function Home() {
  return (
    <div>
        <CarouselNotice />
        <ImportantPersons />
        <VideoGalary />
        <Location />
    </div>
  )
}
