// Import necessary modules
import React from 'react'
import bgImage from '../assets/sponsorship-bg-red.CvuHUVge.svg'
import bgImage2 from '../assets/sponsorship-bg-blue.DxmQOpu9.svg'

const SixthComponent = ({ data }) => {
    console.log(data)
    return (
        <div className="bg-grey-600 py-10 max-md:px-5 max-lg:px-10">
            <h2 className="text-[28px] lg:text-4xl font-bold mb-4 leading-normal lg:px-40 lg:text-center">
                {data && data.headings[0]}
            </h2>
            <p className="tex-sm lg:text-base font-medium mb-6 lg:px-40 lg:text-center">
                {data && data.paragraphs[0]}
            </p>
            <div className="grid lg:has-[.item:nth-child(1):hover]:grid-cols-[calc(60%-9px)_calc(40%-9px)] lg:has-[.item:nth-child(2):hover]:grid-cols-[calc(40%-9px)_calc(60%-9px)] grid-rows-[275px_275px] sm:grid-rows-none sm:grid-cols-[calc(50%-9px)_calc(50%-9px)] md:h-[664px] md:gap-[18px] gap-3 pt-6 w-full max-w-[1200px] transition-all duration-150 delay-100 mx-auto place-items-center">
                {/* Left Item */}
                <div
                    className="first item group flex items-end relative overflow-hidden bg-center bg-cover w-full rounded-2xl h-full"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img
                            src={data?.images[0]}
                            alt="UFC"
                            style={{
                                objectFit: 'cover',
                                width: '1918px',
                                height: '580px',
                                marginTop: '200px',
                            }}
                        />
                    </div>
                    <div className="absolute top-0 left-0 h-[43px] w-full text-center px-3 pt-2 backdrop-blur-lg bg-gradient-to-t from-black/[.1] to-black/[.05]">
                        <span className="font-bold text-base">
                            Official betting partner
                        </span>
                    </div>
                    <img
                        src="https://mediumrare.imgix.net/unauth-sponsorship-betting-partner-logo-en.svg"
                        alt="UFC"
                        className="absolute top-[59px] max-w-[100px] lg:max-w-full lg:h-20 left-4 lg:left-1/2 transform lg:-translate-x-1/2"
                    />
                    <div className="copy flex relative lg:absolute bottom-0 left-0 p-5 pt-16 w-full items-end lg:justify-start lg:opacity-0 lg:translate-y-2 transition-all duration-100 delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 bg-gradient-to-t from-[rgba(0,0,0,.65)] to-transparent">
                        <div className="pr-6 hidden lg:block">
                            <span className="font-bold text-xl">
                                {data && data.headings[1]}
                            </span>
                            <div className="h-2"></div>
                            <span className="text-base">
                                {data && data.paragraphs[1]}
                            </span>
                        </div>
                        <a
                            href="/sponsorships/ufc"
                            className="inline-flex items-center min-w-fit gap-2 h-min justify-center rounded-md font-semibold text-white hover:bg-grey-400 hover:text-white border border-solid border-white text-sm px-4 py-2"
                        >
                            Learn more
                        </a>
                    </div>
                </div>

                {/* Right Item */}
                <div
                    className="item group flex items-end relative overflow-hidden bg-center bg-cover rounded-2xl w-full h-full"
                    style={{
                        backgroundImage: `url(${bgImage2})`,
                    }} // Replace with correct path
                >
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img
                            src={data?.images[1]}
                            alt="UFC"
                            style={{
                                objectFit: 'cover',
                                width: '1918px',
                                height: '580px',
                                marginTop: '200px',
                            }}
                        />
                    </div>
                    <div className="absolute top-0 left-0 h-[43px] w-full text-center px-3 pt-2 backdrop-blur-lg bg-gradient-to-t from-black/[.1] to-black/[.05]">
                        <span className="font-bold text-base">
                            Main partner
                        </span>
                    </div>
                    <img
                        src="https://mediumrare.imgix.net/unauth-sponsorship-main-partner-logo-en.svg"
                        alt="Everton"
                        className="absolute top-[59px] max-w-[100px] lg:max-w-full lg:h-20 left-4 lg:left-1/2 transform lg:-translate-x-1/2"
                    />
                    <div className="copy flex items-end relative lg:absolute bottom-0 left-0 p-5 pt-16 w-full lg:justify-start lg:opacity-0 lg:translate-y-2 transition-all duration-100 delay-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300 group-hover:delay-300 bg-gradient-to-t from-[rgba(0,0,0,.65)] to-transparent">
                        <div className="pr-6 hidden lg:block">
                            <span className="font-bold text-xl">
                                {data && data.headings[2]}
                            </span>
                            <div className="h-2"></div>
                            <span className="text-base">
                                {data && data.paragraphs[2]}
                            </span>
                        </div>
                        <a
                            href="/sponsorships/everton"
                            className="inline-flex items-center min-w-fit gap-2 justify-center rounded-md font-semibold text-white hover:bg-grey-400 hover:text-white border border-solid border-white text-sm px-4 py-2"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixthComponent
