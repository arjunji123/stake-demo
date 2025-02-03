import React from 'react'

const EighthComponent = ({ data }) => {
    return (
        <div className="px-5 md:px-10 lg:px-40 flex max-md:flex-col-reverse py-16 gap-10 lg:gap-20">
            <div className="lg:w-1/2 flex justify-end">
                <img src={data?.images[0]} alt="" className="shrink-0" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-[28px] lg:text-4xl font-bold mb-4 leading-normal">
                    {data && data.headings[0]}
                </h2>
                <p className="max-lg:text-sm font-medium mb-6">
                    {data && data.paragraphs[0]}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded w-full lg:w-min flex justify-center">
                    Join the Community
                </button>
            </div>
        </div>
    )
}

export default EighthComponent
