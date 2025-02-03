import React from 'react'
import newReleasesIcon from '../assets/icons/new-releases-icon.svg'
import slotsIcon from '../assets/icons/slots-icon.svg'
import liveCasinoIcon from '../assets/icons/live-casino-icon.svg'
import tableGamesIcon from '../assets/icons/table-games-icon.svg'

const FirstComponent = ({ data }) => {
    return (
        <section className="bg-[#000A1E] px-4 md:px-8 md:pt-4 pt-8 relative">
            {/* Wrapper for Content */}
            <div className="overflow-hidden md:flex flex-col md:flex-row banner2 max-md:p-5 max-lg:px-10 max-lg:py-5 lg:pl-24 bg-cover">
                {/* Left Section: Text and Categories */}
                <div className="min-h-[390px] w-full md:w-2/5 lg:w-3/5 inset-0 overflow-hidden max-w-[1400px]">
                    {/* Text Section */}
                    <div className="rounded-lg justify-between">
                        {/* Text Section */}
                        <div>
                            <h2 className="font-bold text-left text-[28px] lg:text-4xl text-white leading-tight lg:mt-12">
                                {data &&
                                    data.headings.map((heading, index) => (
                                        <React.Fragment key={index}>
                                            {heading}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </h2>
                        </div>

                        <div className="md:hidden h-60 overflow-hidden">
                            {data && (
                                <img
                                    className="self-end"
                                    src={data.images[0]}
                                    alt="casino hero banner"
                                    loading="lazy"
                                    decoding="async"
                                    srcSet={`${data.images[0]} 382w,
                                    ${data.images[1]} 640w,
                                    ${data.images[2]} 750w,
                                    ${data.images[3]} 764w`}
                                    sizes="(min-width: 382px) 382px, 100vw"
                                    style={{
                                        objectFit: 'cover',
                                        maxWidth: '382px',
                                        maxHeight: '400px',
                                        aspectRatio: '0.955 / 1',
                                        width: '100%',
                                    }}
                                />
                            )}
                        </div>

                        {/* Categories Section */}
                        <div className="w-full gap-x-4 gap-y-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 md:my-6 mb-2 md:mb-6 md:py-5 p-4 rounded backdrop-blur-md bg-black/15">
                            {/* New Releases */}
                            <div className="flex gap-4 rounded items-center">
                                <img
                                    src={newReleasesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                                <span className="text-xl">
                                    New <br /> Releases
                                </span>
                            </div>
                            {/* Slots */}
                            <div className="flex gap-4 rounded items-center">
                                <img
                                    src={slotsIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                                <span className="text-xl">Slots</span>
                            </div>
                            {/* Live Casino */}
                            <div className="flex gap-4 rounded items-center">
                                <img
                                    src={liveCasinoIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                                <span className="text-xl">
                                    Live <br /> Casino
                                </span>
                            </div>
                            {/* Table Games */}
                            <div className="flex gap-4 rounded items-center">
                                <img
                                    src={tableGamesIcon} // Use the imported image
                                    alt="New Releases"
                                    className="w-10 h-10"
                                />
                                <span className="text-xl">
                                    Table <br /> Games
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="inline-flex relative items-center gap-2 justify-center 
                    rounded-lg lg:rounded-sm font-semibold whitespace-nowrap ring-offset-background 
                    transition disabled:pointer-events-none disabled:opacity-50 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    active:scale-[0.98] bg-[#99FF37] text-black 
                    betterhover:hover:bg-blue-600 betterhover:hover:text-white 
                    focus-visible:outline-white text-sm leading-none shadow-md 
                    py-[0.9375rem] px-[1.25rem] mt-8 md:mt-4 w-full md:w-auto"
                        >
                            Explore Casino
                        </button>
                    </div>
                </div>
                {/* Right Section: Image */}
                <div className="hidden md:flex items-end lg:block lg:absolute lg:right-32 md:translate-y-5 lg:-translate-y-[10px]">
                    {data && (
                        <img
                            className="self-end"
                            src={data.images[0]}
                            alt="casino hero banner"
                            loading="lazy"
                            decoding="async"
                            srcSet={`${data.images[0]} 382w,
                                    ${data.images[1]} 640w,
                                    ${data.images[2]} 750w,
                                    ${data.images[3]} 764w`}
                            sizes="(min-width: 382px) 382px, 100vw"
                            style={{
                                objectFit: 'cover',
                                maxWidth: '382px',
                                maxHeight: '400px',
                                aspectRatio: '0.955 / 1',
                                width: '100%',
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default FirstComponent
