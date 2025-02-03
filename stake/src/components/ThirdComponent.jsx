import React, { useState, useEffect, useRef } from 'react'
import '../components/third.css'
import bonusIcon from '../assets/rtp-icons/bonus-icon.svg'
import promoIcon from '../assets/rtp-icons/promotion-icon.svg'
import raffleIcon from '../assets/rtp-icons/raffle-icon.svg'
import returnIcon from '../assets/rtp-icons/return-icon.svg'

const RtpItem = ({ icon, title, description, progress, isActive }) => {
    return (
        <div
            className={`rtp-item base-transition flex flex-row p-4 pb-5 rounded relative overflow-hidden max-lg:bg-grey-500 ${
                isActive ? 'bg-grey-700' : 'bg-grey-800'
            }`}
        >
            <img src={icon} alt={`${title} icon`} className="max-w-[40px]" />
            <div className="ml-4 flex flex-col justify-center">
                <p className="font-bold text-xl leading-normal">{title}</p>
                <div
                    className={`play-text ${isActive ? '' : 'lg:hidden block'}`}
                >
                    <span className="font-medium">{description}</span>
                </div>
            </div>
            {isActive && (
                <div className="hidden lg:block p-1 bg-grey-500 w-full absolute bottom-0 left-0">
                    <div
                        className="ease-linear bg-gradient-to-r from-[#213743] to-blue-500 h-full absolute top-0 left-0 transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}
        </div>
    )
}

const VideoPlayer = ({
    poster,
    webmSrc,
    mp4Src,
    zIndex,
    isPlaying,
    setProgress,
    onVideoEnd,
}) => {
    const videoRef = useRef(null)

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        const updateProgress = () => {
            if (videoElement.duration) {
                const percentage =
                    (videoElement.currentTime / videoElement.duration) * 100
                setProgress(Math.round(percentage)) // Round to whole number
            }
        }

        const interval = setInterval(updateProgress, 100) // ✅ Check progress every 100ms

        return () => clearInterval(interval) // ✅ Cleanup on unmount
    }, [webmSrc, mp4Src, setProgress]) // Re-run if sources change

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        const handleEnd = () => {
            onVideoEnd() // Call the parent function to change the video
        }

        videoElement.addEventListener('ended', handleEnd)

        return () => videoElement.removeEventListener('ended', handleEnd) // Cleanup
    }, [onVideoEnd])

    return (
        <div>
            <video
                ref={videoRef}
                autoPlay={isPlaying}
                muted
                poster={poster}
                playsInline
                className="top-0 left-0 w-full h-full aspect-square relative"
                style={{ zIndex }}
            >
                <source src={webmSrc} type="video/webm" />
                <source src={mp4Src} type="video/mp4" />
            </video>
        </div>
    )
}

const ThirdComponent = () => {
    const rtpItems = [
        {
            icon: bonusIcon,
            title: 'Bonus boosts',
            description:
                'Weekly boosts and monthly bonuses mean you’ll get rewarded the more you play top Casino games and bet on your favourite Sports.',
        },
        {
            icon: promoIcon,
            title: 'Raffles & races',
            description:
                'Get in the draw to win 75K each week. Plus score big on daily races.',
        },
        {
            icon: raffleIcon,
            title: 'Promotions',
            description:
                'Make the most from our Casino promotions and Sports betting bonuses which are updated weekly.',
        },
        {
            icon: returnIcon,
            title: 'High return-to-player (RTP)',
            description:
                'With enhanced RTP percentages, you stand a chance to win big every time you play.',
        },
    ]

    const videos = [
        {
            poster: 'https://mediumrare.imgix.net/unauth-rtp-bonuses-en.png',
            webmSrc: 'https://mediumrare-videos.imgix.net/bonus.webm?fm=mp4',
            mp4Src: 'https://mediumrare-videos.imgix.net/bonus.mp4?fm=mp4',
            zIndex: 10,
        },
        {
            poster: 'https://mediumrare.imgix.net/unauth-rtp-raffles-and-races-en.png',
            webmSrc: 'https://mediumrare-videos.imgix.net/raffles.webm?fm=mp4',
            mp4Src: 'https://mediumrare-videos.imgix.net/raffles.mp4?fm=mp4',
            zIndex: 4,
        },
        {
            poster: 'https://mediumrare.imgix.net/unauth-rtp-promotions-en.png',
            webmSrc:
                'https://mediumrare-videos.imgix.net/promotions.webm?fm=mp4',
            mp4Src: 'https://mediumrare-videos.imgix.net/promotions.mp4?fm=mp4',
            zIndex: 3,
        },
        {
            poster: 'https://mediumrare.imgix.net/unauth-rtp-return-to-player-en.png',
            webmSrc: 'https://mediumrare-videos.imgix.net/rtp.webm?fm=mp4',
            mp4Src: 'https://mediumrare-videos.imgix.net/rtp.mp4?fm=mp4',
            zIndex: 2,
        },
    ]

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0) // Track the active item
    const [progress, setProgress] = useState(0) // Track progress percentage

    const handleVideoEnd = () => {
        // Move to the next video when the current one ends
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rtpItems.length)
        setProgress(0) // Reset progress for the new video
    }

    return (
        <section className="px-5 md:px-8 py-8 md:py-12">
            <div className="m-auto flex flex-col md:gap-6 gap-5 max-w-[1200px]">
                <h2 className="font-bold line-height-normal lg:text-center text-[28px] lg:text-4xl text-white lg:px-8 mt-10 lg:my-10">
                    Enjoy the best odds with up to 99.5% return-to-player games
                </h2>
                <div className="flex flex-row md:gap-[64px]">
                    <div className="flex flex-col gap-3">
                        {rtpItems.map((item, index) => (
                            <RtpItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                progress={index === currentIndex ? progress : 0} // Progress only for the current item
                                isActive={index === currentVideoIndex} // Highlight the current video
                            />
                        ))}
                    </div>
                    {/* Video Section */}
                    <div className="hidden lg:block relative max-w-[568px] w-full h-full">
                        {videos.map((video, index) =>
                            currentVideoIndex === index ? (
                                <VideoPlayer
                                    key={index}
                                    poster={video.poster}
                                    webmSrc={video.webmSrc}
                                    mp4Src={video.mp4Src}
                                    zIndex={video.zIndex}
                                    isPlaying={currentVideoIndex === index}
                                    setProgress={setProgress}
                                    onVideoEnd={handleVideoEnd}
                                />
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThirdComponent
