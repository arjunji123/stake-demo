import React from 'react'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`${
                isOpen
                    ? 'md:w-[300px] h-full pt-5 md:pt-0'
                    : 'md:w-[54px] h-0 md:h-full'
            } bg-[#0f212e] md:flex flex-col items-center transition-[width,height] overflow-hidden w-full text-sm`}
        >
            <div className="md:hidden py-2 mx-5 h-10 flex items-center rounded-full border border-solid border-white box-border gap-2 px-5">
                <div>
                    <svg
                        fill="currentColor"
                        viewBox="0 0 64 64"
                        className="w-5 h-5"
                    >
                        {' '}
                        <title></title>{' '}
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.266 3.893a23.1 23.1 0 1 1 25.668 38.414A23.1 23.1 0 0 1 10.266 3.893Zm5.112 30.764a13.9 13.9 0 1 0 15.444-23.114 13.9 13.9 0 0 0-15.444 23.114ZM38.55 46.33a28.002 28.002 0 0 0 7.78-7.78L64 56.22 56.22 64 38.55 46.33Z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="bg-inherit grow text-sm font-semibold focus:outline-none"
                    placeholder="Search your game"
                />
            </div>
            <div
                className={`${
                    isOpen ? 'flex w-full' : ''
                } items-center px-5 md:px-0`}
                style={{
                    boxShadow: `${
                        isOpen
                            ? '0 4px 8px rgba(27, 23, 23, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)'
                            : ''
                    }`,
                }}
            >
                <div
                    className="header svelte-1hoeywl collapsed hidden md:block"
                    style={{
                        boxShadow: `${
                            isOpen
                                ? ''
                                : '0 4px 8px rgba(27, 23, 23, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)'
                        }`,
                        borderRadius: '5px 5px 5px 5px',
                    }}
                >
                    <button
                        className="menu-button svelte-1hoeywl collapsed"
                        aria-label="Toggle Sidebar"
                        data-test="left-sidebar-close"
                        data-analytics="left-sidebar-close-button"
                        onClick={toggleSidebar}
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 64 64"
                            className="svg-icon"
                            width="66"
                            height="66"
                        >
                            {' '}
                            <title></title>{' '}
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0h64v13H0V0Zm0 25.5h64v13H0v-13ZM64 51H0v13h64V51Z"
                            ></path>
                        </svg>
                    </button>{' '}
                </div>
                <div
                    className={`flex ${
                        isOpen
                            ? 'flex-row grow gap-2 md:pr-4'
                            : 'flex-col link-wrap svelte-1hoeywl collapsed md:-mt-4'
                    }`}
                >
                    <a
                        className={`${
                            isOpen ? '!w-1/2 md:!h-[2.3rem] !h-16' : ''
                        } header-button collapsed svelte-jby8ge casino`}
                        data-sveltekit-preload-data="hover"
                        data-test="header-casino-link"
                        data-analytics="header-casino-link"
                        draggable="false"
                        href="/casino/home"
                        style={{ marginTop: `${isOpen ? '' : '30px'}` }}
                    >
                        <div
                            className={`${
                                isOpen
                                    ? 'flex items-center justify-center'
                                    : 'image-loader svelte-jby8ge h-full items-center'
                            } text-sm`}
                        >
                            {isOpen && 'CASINO'}
                        </div>
                    </a>

                    <a
                        className={`${
                            isOpen ? '!w-1/2 md:!h-[2.3rem] !h-16' : 'md:mt-3'
                        } header-button collapsed svelte-jby8ge sports`}
                        data-sveltekit-preload-data="hover"
                        data-test="header-sports-link"
                        data-analytics="header-sports-link"
                        draggable="false"
                        href="/sports/home"
                    >
                        <div
                            className={`${
                                isOpen
                                    ? 'flex items-center justify-center'
                                    : 'image-loader svelte-jby8ge h-full items-center'
                            } text-sm`}
                        >
                            {isOpen && 'SPORTS'}
                        </div>
                    </a>
                </div>
            </div>

            <div
                className={`${
                    isOpen ? 'px-4' : ''
                } w-full flex flex-col items-center mt-4`}
            >
                <div
                    className={`${
                        isOpen ? 'w-full' : 'w-10'
                    } section-wrapper svelte-0cl0jp bg-[#0f212e] pt-0`}
                    style={{ display: 'flex' }}
                >
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button
                            type="button"
                            className="text-sm font-semibold rounded-sm"
                            id="promotions"
                            data-button-root
                            style={{ display: 'flex' }}
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                className="svg-icon"
                            >
                                <title></title>
                                <path d="M28.651 60.5H11.883c-1.85 0-3.347-1.5-3.347-3.348V37.036c-1.85 0-3.348-1.5-3.348-3.348v-6.722c0-1.85 1.5-3.348 3.348-3.348h20.116V60.5Zm26.813-36.884H35.347V60.5h16.768c1.85 0 3.349-1.5 3.349-3.348V37.036c1.85 0 3.348-1.5 3.348-3.348v-6.722c0-1.85-1.5-3.348-3.348-3.348v-.002ZM45.416 3.5C38.005 3.5 32 9.508 32 16.918h13.418c1.85 0 3.349-1.5 3.349-3.348V6.848c0-1.85-1.5-3.348-3.349-3.348Zm-26.836 0c-1.85 0-3.348 1.5-3.348 3.348v6.722c0 1.85 1.5 3.348 3.348 3.348H32C32 9.506 25.99 3.5 18.58 3.5Z" />
                            </svg>
                            {isOpen && 'Promotions'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 69 69"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M55.543 19.096a8.353 8.353 0 0 0-8.296 7.437l-.004.038-6.464 1.73a8.172 8.172 0 0 0-3.56-2.641l-.057-.018v-7.05c3.127-1.262 5.293-4.272 5.293-7.79 0-4.628-3.75-8.38-8.38-8.38a8.378 8.378 0 0 0-8.378 8.38 8.383 8.383 0 0 0 5.237 7.771l.055.02v6.837a7.744 7.744 0 0 0-1.959 1.103l.018-.014-12.29-6.703a6.611 6.611 0 0 0 0-.736v.018c0-4.629-3.75-8.38-8.379-8.38A8.378 8.378 0 0 0 0 19.098a8.378 8.378 0 0 0 8.38 8.379 8.183 8.183 0 0 0 5.538-2.16l-.006.005 11.916 6.57a7.87 7.87 0 0 0 .002 1.415l-.002-.03a8.528 8.528 0 0 0 .66 3.276l-.021-.056-9.311 9.043a8.107 8.107 0 0 0-3.43-.772h-.002l-.16-.002a8.405 8.405 0 0 0-8.405 8.406 8.405 8.405 0 0 0 8.405 8.405 8.405 8.405 0 0 0 8.406-8.405 7.947 7.947 0 0 0-.63-3.35l.02.052 9.31-9.044a8.057 8.057 0 0 0 3.414.744h.02a7.938 7.938 0 0 0 2.318-.36l-.056.015 2.66 4.124a8.25 8.25 0 0 0-1.49 4.734v.026a8.405 8.405 0 0 0 8.405 8.405 8.405 8.405 0 0 0 8.405-8.405 8.405 8.405 0 0 0-8.405-8.405 7.84 7.84 0 0 0-1.836.223l.054-.012-2.927-4.443a7.84 7.84 0 0 0 1.114-3.262l.003-.035 6.49-1.73A8.378 8.378 0 0 0 64 27.527a8.377 8.377 0 0 0-8.378-8.38h-.082.004v-.051Z"
                                />
                            </svg>
                            {isOpen && 'Affiliate'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 96 96"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M64.688 54.312c37.121-4.57 30.353-38.63 30.353-38.63H78.354c.628-4.697.991-10.138 1.005-15.665V0H16.64c.014 5.54.377 10.982 1.073 16.32l-.068-.641H.958S-5.807 49.69 31.31 54.309c2.62 3.87 5.51 7.244 8.743 10.254l.034.031c-.411 5.579-2.65 21.624-15.59 21.624h-7.861V96h62.719v-9.782l-10.88-.367C58.192 83.52 56.272 69.67 55.905 64.594a59.158 59.158 0 0 0 8.647-10.08l.13-.205.007.003ZM75.43 30.267l2.194-5.44h8.503c-.33 4.638-1.995 8.831-4.611 12.26l.04-.055a22.158 22.158 0 0 1-10.542 6.682l-.158.038c1.735-3.789 3.302-8.283 4.457-12.94l.117-.548v.003Zm-60.984 6.765a22.653 22.653 0 0 1-4.567-12.134l-.003-.072h8.41l2.287 5.441c1.395 5.322 3.051 9.882 5.064 14.246l-.22-.531c-4.409-1.235-8.143-3.665-10.947-6.92l-.024-.027v-.003Zm40.78 3.977-6.402-3.11a1.712 1.712 0 0 0-.823-.205c-.301 0-.586.075-.833.212l.01-.003-6.4 3.11a1.604 1.604 0 0 1-2.243-1.656v.006l1.005-7.176a1.547 1.547 0 0 0-.411-1.282l-4.846-5.256a1.56 1.56 0 0 1 .813-2.606h.01l7.176-1.326c.498-.055.916-.35 1.139-.768l.003-.007 3.429-6.401a1.555 1.555 0 0 1 2.74-.007l.003.007 3.428 6.4c.216.416.617.71 1.09.776h.007l7.176 1.326a1.555 1.555 0 0 1 .823 2.606l-5.03 5.256a1.548 1.548 0 0 0-.425 1.07c0 .075.007.147.014.22v-.008l1.005 7.176a1.6 1.6 0 0 1-2.475 1.646l.006.004.01-.004Z"
                                />
                            </svg>
                            {isOpen && 'VIP Club'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 2.666v48c0 1.6-1.066 2.666-2.666 2.666-1.6 0-2.666-1.066-2.666-2.666V8h-8v45.334c0 4.534 3.466 8 8 8h50.666V2.668H16v-.002ZM34.666 48H24V26.666h10.666V48Zm18.668 0H40v-8h13.334v8Zm0-13.334H40v-8h13.334v8Zm0-13.332H24v-8h29.334v8Z"
                                />
                            </svg>
                            {isOpen && 'Blog'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 69 69"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M32 1.916c-.288-.01-.628-.016-.97-.016C14.254 1.9.586 15.206.002 31.84L0 31.894A28.655 28.655 0 0 0 7.476 51.15l-.02-.024c-.688 4.028-1.89 7.636-3.552 10.974l.102-.228c4.634-.396 8.878-1.73 12.654-3.81l-.164.082c4.474 2.35 9.774 3.728 15.398 3.728h.112H32c.3.01.654.016 1.008.016 16.768 0 30.428-13.31 30.99-29.942l.002-.052C63.414 15.206 49.746 1.902 32.97 1.902c-.342 0-.68.006-1.018.016l.05-.002H32ZM16.138 37.604a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Z"
                                />
                            </svg>
                            {isOpen && 'Forum'}
                        </button>
                    </div>
                </div>
                <div
                    className={`${
                        isOpen ? 'w-full' : 'w-10'
                    } section-wrapper svelte-0cl0jp bg-[#0f212e] pt-0`}
                    style={{ display: 'flex', marginTop: '9px' }}
                >
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.081 3.816 0 24.548l4.958 3.129 13.08-20.733-4.957-3.128Zm11.17 4.493h15.987l17.587 25.314-27.446-17.586-5.596 8.793c-1.332 2.398-4.263 2.931-6.395 1.599-1.599-1.066-2.398-3.198-2.132-5.063 0-.533.267-1.066.533-1.599L24.25 8.31Zm-3.465 22.65c-1.6 0-3.198-.533-4.53-1.333-1.332-.799-2.398-1.865-2.931-3.197L9.86 32.025c.266 0 6.661.266 8.526 5.062 1.6 0 2.932 0 4.53 1.066 1.333.8 2.665 2.398 3.198 3.997 1.599 0 3.198.533 4.53 1.333 4.263 2.398 5.596 7.994 2.931 11.99l-.533 1.066 4.796 2.931c2.132 1.333 5.063.8 6.396-1.598a4.861 4.861 0 0 0-.8-5.863l2.132 1.333c2.132 1.332 5.063.533 6.395-1.6 1.332-2.13.533-5.062-1.599-6.394l1.333.8c2.131 1.331 5.062.799 6.395-1.6 1.332-2.131.8-5.062-1.6-6.395L30.646 22.165l-2.931 4.797c-1.066 2.398-3.997 3.997-6.928 3.997Zm8.26 15.721c-2.422-1.453-5.283-.265-6.385.964 1.214-1.865.387-4.53-1.61-6.026-.799-.534-1.598-.8-2.664-.8-1.573 0-3.145.774-3.957 2.067 1.281-2.126.738-5.014-1.372-6.597-.8-.533-1.599-.8-2.665-.8-1.599 0-3.197.8-3.997 2.133l-.8 1.065-2.131 3.464c-1.332 2.132-.8 5.063 1.599 6.662.8.533 1.599.8 2.664.8 1.399 0 2.797-.612 3.66-1.657-.115.218-.195.445-.195.59-1.066 2.665 0 5.33 2.398 6.396 2.197.976 4.841.163 6.089-1.824-.92 2.059-.284 4.628 1.905 6.087.799.533 1.598.8 2.664.8 1.6 0 3.198-.8 3.997-2.132l2.665-4.53c1.332-2.398.266-5.33-1.865-6.662ZM45.819 7.006l4.958-3.128L64 24.835l-4.958 3.128L45.82 7.006Z"
                                />
                            </svg>
                            {isOpen && 'Sponsorships'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M32 0 5.654 11.306C5.654 52.692 32 64 32 64s26.346-11.306 26.346-52.694L32 0Zm3.546 33.014v13.2h-7.12v-13.2c-3.174-1.41-5.346-4.532-5.346-8.164a8.907 8.907 0 1 1 12.522 8.142l-.056.022Z"
                                />
                            </svg>
                            {isOpen && 'Responsible Gambling'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M32-.001h-.084C17.056-.001 5.01 12.045 5.01 26.905c0 .178.002.356.006.534v-.026 22.374h17.386V30.613h-8.186v-3.2a17.59 17.59 0 0 1-.01-.588c0-9.734 7.892-17.626 17.626-17.626h.178H32h.17c9.734 0 17.626 7.892 17.626 17.626 0 .206-.004.412-.01.618v-.03 3.2H41.6v19.174h7.546c-1.734 4.134-7.28 5.014-17.146 5.014v9.2c8.774 0 26.986 0 26.986-17.386v-19.2c.004-.15.004-.328.004-.506C58.99 12.049 46.944.003 32.084.003h-.09L32-.001Z"
                                />
                            </svg>
                            {isOpen && 'Live Support'}
                        </button>
                    </div>
                    <div
                        className={`${
                            isOpen
                                ? '!justify-start !px-5 !py-3'
                                : 'svelte-byqul'
                        } hoverable`}
                        style={{ display: 'flex' }}
                    >
                        <button className="text-sm font-semibold rounded-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon"
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M32 0C14.336 0 0 14.336 0 32s14.336 32 32 32 32-14.336 32-32S49.664 0 32 0Zm25.408 28.8H46.336c-.352-8.096-2.08-15.328-4.672-20.512 8.416 3.424 14.592 11.2 15.744 20.512ZM6.592 35.2h11.072c.352 8.096 2.08 15.328 4.672 20.512A25.655 25.655 0 0 1 6.592 35.2Zm11.072-6.4H6.592c1.152-9.312 7.328-17.088 15.744-20.512-2.592 5.184-4.288 12.416-4.672 20.512ZM36.352 52c-1.088 2.4-2.208 3.968-3.136 4.832-.448.416-.768.608-.96.704-.16.064-.224.064-.256.064s-.096 0-.256-.064c-.192-.096-.512-.288-.96-.704-.928-.864-2.048-2.432-3.136-4.832-1.856-4.16-3.232-10.016-3.584-16.8h15.84c-.32 6.784-1.696 12.64-3.552 16.8ZM24.064 28.8c.32-6.784 1.696-12.64 3.584-16.8 1.088-2.4 2.208-3.968 3.136-4.832.448-.416.768-.608.96-.704.16-.064.224-.064.256-.064s.096 0 .256.064c.192.096.512.288.96.704.928.864 2.048 2.432 3.136 4.832 1.856 4.16 3.232 10.016 3.584 16.8H24.064Zm17.6 26.912c2.56-5.184 4.288-12.416 4.672-20.512h11.072c-1.152 9.312-7.328 17.088-15.744 20.512Z"
                                />
                            </svg>
                            {isOpen && 'Language: English'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
