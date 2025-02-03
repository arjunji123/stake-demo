import React from 'react'
import '../components/MainContent.css'
import Banner from './Banner'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import FifthComponent from './FifthComponent'
import SixthComponent from './SixthComponent'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import SeventhComponent from './SeventhComponent'
import EighthComponent from './EighthComponent'
import NinthComponent from './NinthComponent'
import FAQs from './FAQs'
import Slider from './Slider'

const MainContent = ({ componentData }) => {
    console.log(componentData)
    return (
        <main className="flex flex-col font-monteserrat mt-16">
            <Banner
                data={
                    componentData
                        ? componentData.find(
                              (service) => service.title === 'banner'
                          )
                        : null
                }
            />
            <Slider />
            <FirstComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'first component'
                    )
                }
            />
            <SecondComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'second component'
                    )
                }
            />
            <ThirdComponent />
            <FourthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'fourth component'
                    )
                }
            />
            <FifthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'fifth component'
                    )
                }
            />
            <SixthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'sixth component'
                    )
                }
            />
            <SeventhComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'seventh component'
                    )
                }
            />

            <NinthComponent />

            <EighthComponent
                data={
                    componentData &&
                    componentData.find(
                        (service) => service.title === 'eighth component'
                    )
                }
            />

            <FAQs />
        </main>
    )
}

export default MainContent
