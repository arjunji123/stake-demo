import React, { useState } from 'react'
import { faqsData } from '../data/faqsData'

const FaqItem = ({ data, isOpen = false }) => {
    const [menuOpen, setMenuOpen] = useState(isOpen)

    const toggleOpen = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="w-full bg-[#142c5d] rounded">
            <div
                className={`cursor-pointer flex text-sm font-bold items-center justify-between px-5 py-3`}
                onClick={toggleOpen}
            >
                <p>{data.question}</p>

                <span className={`${menuOpen ? '' : 'rotate-90'}`}>
                    <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="w-4 h-4"
                    >
                        {' '}
                        <title></title>{' '}
                        <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                    </svg>
                </span>
            </div>
            {menuOpen && (
                <hr className="w-full h-[2px] relative bg-grey-400  border-none" />
            )}
            <div
                className={`${
                    menuOpen ? 'block' : 'hidden'
                } text-grey-200 px-5 py-3 space-y-3 text-sm`}
            >
                {data.answer.split('\n').map((part) => (
                    <p>{part}</p>
                ))}
            </div>
        </div>
    )
}

const FAQs = () => {
    return (
        <div className="px-5 md:px-10 lg:px-40 flex flex-col md:flex-row bg-[#000A1E] py-16 gap-5 md:gap-10 lg:gap-20 items-center">
            <div className="flex-1">
                <h2 className="text-[28px] lg:text-4xl font-bold mb-4 leading-normal">
                    Still Have Questions ?
                </h2>
                <button
                    type="button"
                    class="md:inline-flex relative items-center gap-2 justify-center 
                    rounded-lg lg:rounded-sm font-semibold whitespace-nowrap ring-offset-background 
                    transition disabled:pointer-events-none disabled:opacity-50 
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    active:scale-[0.98] bg-[#99FF37] text-black 
                    betterhover:hover:bg-blue-600 betterhover:hover:text-white 
                    focus-visible:outline-white text-sm leading-none shadow-md 
                    py-[0.9375rem] px-[1.25rem] mt-8 md:mt-4 w-full md:w-auto max-md:hidden"
                >
                    Read our guides
                </button>
            </div>
            <div className="flex flex-1 flex-col gap-2 max-md:w-full">
                {faqsData.map((data, index) => (
                    <FaqItem data={data} isOpen={index === 0} />
                ))}
            </div>
        </div>
    )
}

export default FAQs
