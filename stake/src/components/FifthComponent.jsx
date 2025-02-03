import boostIcon from '../assets/rewards-icons/boost-icon.svg'
import hostIcon from '../assets/rewards-icons/host-icon.svg'
import levelUpIcon from '../assets/rewards-icons/level-up-icon.svg'
import recentsIcon from '../assets/rewards-icons/recent-bonuses-icon.svg'

const FifthComponent = ({ data }) => {
    const rewardsData = [
        {
            id: 1,
            icon: boostIcon,
            title: data?.headings[1],
            description: data?.paragraphs[1],
        },
        {
            id: 2,
            icon: hostIcon,
            title: data?.headings[2],
            description: data?.paragraphs[2],
        },
        {
            id: 3,
            icon: levelUpIcon,
            title: data?.headings[3],
            description: data?.paragraphs[3],
        },
        {
            id: 4,
            icon: recentsIcon,
            title: data?.headings[4],
            description: data?.paragraphs[4],
        },
    ]
    return (
        <section className="bg-grey-800">
            <div className="flex flex-col md:flex-row text-white m-auto px-4 py-8 md:px-8 md:py-12 md:gap-16 gap-6 max-w-[1200px]">
                {/* Main Heading Section */}
                <div className="flex flex-col flex-1 justify-center mx-auto mb-12 text-left">
                    <h1 className="text-[28px] lg:text-4xl font-bold mb-2 lg:leading-normal">
                        {data && data.headings[0]}
                    </h1>
                    <p className="white font-medium mb-8">
                        {data && data.paragraphs[0]}
                    </p>
                    <button className="md:max-w-fit bg-blue-600 hover:bg-blue-700 flex justify-center text-white font-semibold py-3 px-6 rounded">
                        Become a VIP
                    </button>
                </div>

                {/* Rewards Cards Section */}
                <div className="flex flex-col flex-1 gap-3 max-w-5xl mx-auto">
                    {rewardsData.map((reward) => (
                        <div
                            key={reward.id}
                            className="flex items-center p-4 bg-grey-500 rounded-lg shadow-lg gap-4"
                        >
                            {/* Icon Section */}

                            <img src={reward.icon} alt="" />

                            {/* Text Section */}
                            <div>
                                <h2 className="text-xl font-bold">
                                    {reward.title}
                                </h2>
                                <p className="text-gray-400">
                                    {reward.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FifthComponent
