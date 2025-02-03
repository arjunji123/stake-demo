// import React, { useState, useEffect } from "react";
// import "../components/third.css";

// const FourthComponent = () => {
//   return (
//     <div className="bg-[#262b32] min-h-screen flex items-center justify-center px-8">
//       {/* Container */}
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
//         {/* Left Section - Video */}

//         <div className="cards aspect-[343/300] sm:aspect-auto sm:h-96 md:h-auto md:w-6/12 relative svelte-7cwvd5">
//           <div className="card absolute w-full max-w-[440px] top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 svelte-7cwvd5">
//             <img
//               src="https://mediumrare.imgix.net/currency-btc.svg?w=880&h=538&fit=min&auto=format"
//               alt="BTC"
//               style={{
//                 objectFit: "cover",
//                 maxWidth: "880px",
//                 maxHeight: "538px",
//                 aspectRatio: "1.63569 / 1",
//                 width: "100%",
//               }}
//               loading="lazy"
//               decoding="async"
//               srcSet="
//             https://mediumrare.imgix.net/currency-btc.svg?w=640&h=391&fit=min&auto=format 640w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=750&h=459&fit=min&auto=format 750w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=828&h=506&fit=min&auto=format 828w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=880&h=538&fit=min&auto=format 880w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=960&h=587&fit=min&auto=format 960w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=1080&h=660&fit=min&auto=format 1080w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=1280&h=783&fit=min&auto=format 1280w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=1668&h=1020&fit=min&auto=format 1668w,
//             https://mediumrare.imgix.net/currency-btc.svg?w=1760&h=1076&fit=min&auto=format 1760w"
//               sizes="(min-width: 880px) 880px, 100vw"
//               layout="constrained"
//             />
//           </div>

//           <div className="card absolute w-full max-w-[440px] top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 svelte-7cwvd5">
//             <img
//               src="https://mediumrare.imgix.net/currency-eth.svg?w=880&h=538&fit=min&auto=format"
//               alt="ETH"
//               style={{
//                 objectFit: "cover",
//                 maxWidth: "880px",
//                 maxHeight: "538px",
//                 aspectRatio: "1.63569 / 1",
//                 width: "100%",
//               }}
//               loading="lazy"
//               decoding="async"
//               srcSet="
//             https://mediumrare.imgix.net/currency-eth.svg?w=640&h=391&fit=min&auto=format 640w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=750&h=459&fit=min&auto=format 750w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=828&h=506&fit=min&auto=format 828w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=880&h=538&fit=min&auto=format 880w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=960&h=587&fit=min&auto=format 960w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=1080&h=660&fit=min&auto=format 1080w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=1280&h=783&fit=min&auto=format 1280w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=1668&h=1020&fit=min&auto=format 1668w,
//             https://mediumrare.imgix.net/currency-eth.svg?w=1760&h=1076&fit=min&auto=format 1760w"
//               sizes="(min-width: 880px) 880px, 100vw"
//               layout="constrained"
//             />
//           </div>

//           <div className="card absolute w-full max-w-[440px] top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 svelte-7cwvd5">
//             <img
//               src="https://mediumrare.imgix.net/currency-usdt.svg?w=880&h=538&fit=min&auto=format"
//               alt="USDT"
//               style={{
//                 objectFit: "cover",
//                 maxWidth: "880px",
//                 maxHeight: "538px",
//                 aspectRatio: "1.63569 / 1",
//                 width: "100%",
//               }}
//               loading="lazy"
//               decoding="async"
//               srcSet="
//             https://mediumrare.imgix.net/currency-usdt.svg?w=640&h=391&fit=min&auto=format 640w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=750&h=459&fit=min&auto=format 750w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=828&h=506&fit=min&auto=format 828w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=880&h=538&fit=min&auto=format 880w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=960&h=587&fit=min&auto=format 960w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=1080&h=660&fit=min&auto=format 1080w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=1280&h=783&fit=min&auto=format 1280w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=1668&h=1020&fit=min&auto=format 1668w,
//             https://mediumrare.imgix.net/currency-usdt.svg?w=1760&h=1076&fit=min&auto=format 1760w"
//               sizes="(min-width: 880px) 880px, 100vw"
//               layout="constrained"
//             />
//           </div>

//           <div className="card absolute w-full max-w-[440px] top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 svelte-7cwvd5">
//             <img
//               src="https://mediumrare.imgix.net/currency-ltc.svg?w=880&h=538&fit=min&auto=format"
//               alt="LTC"
//               style={{
//                 objectFit: "cover",
//                 maxWidth: "880px",
//                 maxHeight: "538px",
//                 aspectRatio: "1.63569 / 1",
//                 width: "100%",
//               }}
//               loading="lazy"
//               decoding="async"
//               srcSet="
//             https://mediumrare.imgix.net/currency-ltc.svg?w=640&h=391&fit=min&auto=format 640w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=750&h=459&fit=min&auto=format 750w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=828&h=506&fit=min&auto=format 828w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=880&h=538&fit=min&auto=format 880w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=960&h=587&fit=min&auto=format 960w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=1080&h=660&fit=min&auto=format 1080w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=1280&h=783&fit=min&auto=format 1280w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=1668&h=1020&fit=min&auto=format 1668w,
//             https://mediumrare.imgix.net/currency-ltc.svg?w=1760&h=1076&fit=min&auto=format 1760w"
//               sizes="(min-width: 880px) 880px, 100vw"
//               layout="constrained"
//             />
//           </div>
//         </div>

//         {/* Right Section - Text */}
//         <div className="text-white">
//           <h1 className="text-4xl font-bold mb-6">
//             Peace of mind across multiple crypto and local currencies
//           </h1>
//           <p className="text-lg mb-8">
//             Experience safe deposits and instant withdrawals across 20
//             cryptocurrencies and 7 local currencies. All with no minimums,
//             flexible payment methods and a secure online vault.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold">
//             Learn more
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FourthComponent;
import '../components/four.css'

const FourthComponent = ({ data }) => {
    // Array of image URLs
    const images = data?.images || []

    return (
        <div className="bg-[#000A1E] h-110 flex items-center justify-center pt-10 md:py-20 px-5 md:px-8">
            {/* Container */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Left Section - Image Slider */}
                <div className="cards aspect-[343/300] sm:aspect-auto sm:h-96 md:h-auto md:w-6/12 relative overflow-hidden max-md:order-2">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`card absolute w-full max-w-[440px] top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4`}
                        >
                            <img
                                src={image}
                                alt={`Currency ${index}`}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Section - Text */}
                <div className="text-white">
                    <h1 className="text-[28px] leading-tight lg:text-4xl font-bold mb-6">
                        {data && data.headings[0]}
                    </h1>
                    <p className="font-medium mb-8">
                        {data && data.paragraphs[0]}
                    </p>
                    <button className="bg-[#99FF37] hover:bg-[#99FF37] text-black py-3 px-6 rounded-md text-lg font-semibold">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FourthComponent
