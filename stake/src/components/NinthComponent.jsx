import React, { useState } from 'react'
import { casinoData, sportsData } from '../data/tableData'

const CasinoTable = ({ data }) => {
    return (
        <table className="w-full bg-grey-500 text-right text-sm">
            <thead>
                <tr className="bg-inherit text-white border-b border-solid border-grey-300">
                    <th className="p-4 text-left ">Game</th>
                    <th className="p-4 text-left max-md:hidden">User</th>
                    <th className="p-4 max-md:hidden">Time</th>
                    <th className="p-4 max-md:hidden">Bet Amount</th>
                    <th className="p-4 max-md:hidden">Multiplier</th>
                    <th className="p-4">Payout</th>
                </tr>
            </thead>
            <tbody className="bg-inherit">
                {data.map((entry, index) => (
                    <tr
                        key={index}
                        className="odd:bg-grey-500 even:bg-grey-300"
                    >
                        <td className="p-4 rounded-l-md text-left">
                            {entry.game}
                        </td>
                        <td className="p-4 text-left max-md:hidden">
                            {entry.user}
                        </td>
                        <td className="p-4 max-md:hidden">
                            {new Date(entry.time).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            })}
                        </td>
                        <td className="p-4 max-md:hidden">
                            ${entry.bet_amount}
                        </td>
                        <td className="p-4 max-md:hidden">
                            ${entry.multiplier} x
                        </td>
                        <td className="p-4">${entry.payout}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const SportsTable = ({ data }) => {
    return (
        <table className="w-full bg-grey-500 text-right text-sm">
            <thead>
                <tr className="bg-inherit text-white border-b border-solid border-grey-300">
                    <th className="p-4 text-left ">Event</th>
                    <th className="p-4 text-left max-md:hidden">User</th>
                    <th className="p-4 max-md:hidden">Time</th>
                    <th className="p-4 max-md:hidden">Odds</th>
                    <th className="p-4">Bet Amount</th>
                </tr>
            </thead>
            <tbody className="bg-inherit">
                {data.map((entry, index) => (
                    <tr
                        key={index}
                        className="odd:bg-grey-500 even:bg-grey-300 w-full"
                    >
                        <td className="p-4 rounded-l-md text-left truncate overflow-hidden whitespace-nowrap max-w-[150px]">
                            {entry.event}
                        </td>
                        <td className="p-4 text-left max-md:hidden">
                            {entry.user}
                        </td>
                        <td className="p-4 max-md:hidden">
                            {new Date(entry.time).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            })}
                        </td>
                        <td className="p-4 max-md:hidden">{entry.odds}</td>
                        <td className="p-4">{entry.bet_amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const NinthComponent = () => {
    const [tableMode, setTableMode] = useState('casino')

    return (
        <div className="px-5 md:px-10 lg:px-40 lg:text-center font-monteserrat bg-grey-600 pt-16">
            <h2 className="text-[28px] lg:text-4xl font-bold mb-4 leading-normal">
                Watch the betting action happening right now
            </h2>
            <p className="max-lg:text-sm font-semibold text-gray-400 mb-6">
                Check out the live bets on popular Casino games and Sports to
                discover how much you could win.
            </p>
            <div className="flex justify-center">
                <span className="p-1 flex gap-1 bg-grey-700 w-min rounded-full">
                    <button
                        className={`${
                            tableMode === 'casino'
                                ? 'bg-grey-300'
                                : 'bg-transparent'
                        } px-5 py-3 rounded-full`}
                        onClick={() => setTableMode('casino')}
                    >
                        Casino
                    </button>
                    <button
                        className={`${
                            tableMode === 'sports'
                                ? 'bg-grey-300'
                                : 'bg-transparent'
                        } px-5 py-3 rounded-full`}
                        onClick={() => setTableMode('sports')}
                    >
                        Sports
                    </button>
                </span>
            </div>
            <div className="w-full px-5 pt-5 bg-grey-500 rounded-t-3xl mt-10">
                {tableMode === 'casino' && <CasinoTable data={casinoData} />}
                {tableMode === 'sports' && <SportsTable data={sportsData} />}
            </div>
        </div>
    )
}

export default NinthComponent
