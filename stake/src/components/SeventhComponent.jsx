import stakeBg from '../assets/stake.BFmdy97X.svg'

const SeventhComponent = ({ data }) => {
    console.log(data)
    return (
        <div
            className="px-5 md:px-10 lg:px-40 flex flex-col md:flex-row py-5 md:py-10 bg-contain bg-right-top bg-no-repeat"
            style={{ backgroundImage: `url(${stakeBg})` }}
        >
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-[28px] lg:text-4xl font-bold mb-4 leading-normal">
                    {data && data.headings[0]}
                </h2>
                <p className="max-lg:text-sm font-medium mb-6">
                    {data && data.paragraphs[0]}
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
                <img src={data?.images[0]} alt="" className="max-md:w-full" />
            </div>
        </div>
    )
}

export default SeventhComponent
