import drakeLogo from '../assets/slider-images/drake.svg'
import billieJeanKingCup from '../assets/slider-images/billie-jean-king-cup.svg'
import davisCup from '../assets/slider-images/davis-cup.svg'
import enyimbaFc from '../assets/slider-images/enyimba-fc.svg'
import everton from '../assets/slider-images/everton.svg'
import f1Logo from '../assets/slider-images/f1.svg'
import juventude from '../assets/slider-images/juventude.svg'
import teamSecret from '../assets/slider-images/team-secret.svg'
import ufcLogo from '../assets/slider-images/ufc.svg'

const Slider = () => {
    return (
        <section className="w-full py-7 md:py-9 lg:px-8 m-auto flex flex-col content-center lg:mt-0 lg:mb-10 bg-grey-500">
            <div className="slider  overflow-hidden w-full max-w-[1200px] relative m-auto">
                <ul className="slider-track flex items-center gap-[76px] w-[2694px]">
                    <li>
                        <img
                            src={drakeLogo}
                            alt="Drake"
                            className="w-[100px]"
                        />
                    </li>
                    <li>
                        <img
                            src={f1Logo}
                            alt="Stake F1 Team"
                            className="w-[51px]"
                        />
                    </li>
                    <li>
                        <img src={ufcLogo} alt="UFC" className="w-[78px]" />
                    </li>
                    <li>
                        <img
                            src={davisCup}
                            alt="Davis Cup"
                            className="w-[101px]"
                        />
                    </li>
                    <li>
                        <img src={everton} alt="Everton" className="w-[55px]" />
                    </li>
                    <li>
                        <img
                            src={billieJeanKingCup}
                            alt="Billie Jean King Cup"
                            className="w-[101px]"
                        />
                    </li>
                    <li>
                        <img
                            src={juventude}
                            alt="Juventude"
                            className="w-[49px]"
                        />
                    </li>
                    <li>
                        <img
                            src={teamSecret}
                            alt="Team Secret"
                            className="w-[70px]"
                        />
                    </li>
                    <li>
                        <img
                            src={enyimbaFc}
                            alt="Enyimba FC"
                            className="w-[58px]"
                        />
                    </li>

                    <li>
                        <img
                            src={drakeLogo}
                            alt="Drake"
                            className="w-[100px]"
                        />
                    </li>

                    <li>
                        <img
                            src={f1Logo}
                            alt="Stake F1 Team"
                            className="w-[51px]"
                        />
                    </li>
                    <li>
                        <img src={ufcLogo} alt="UFC" className="w-[78px]" />
                    </li>
                    <li>
                        <img
                            src={davisCup}
                            alt="Davis Cup"
                            className="w-[101px]"
                        />
                    </li>
                    <li>
                        <img src={everton} alt="Everton" className="w-[55px]" />
                    </li>
                    <li>
                        <img
                            src={billieJeanKingCup}
                            alt="Billie Jean King Cup"
                            className="w-[101px]"
                        />
                    </li>
                    <li>
                        <img
                            src={juventude}
                            alt="Juventude"
                            className="w-[49px]"
                        />
                    </li>
                    <li>
                        <img
                            src={teamSecret}
                            alt="Team Secret"
                            className="w-[70px]"
                        />
                    </li>
                    <li>
                        <img
                            src={enyimbaFc}
                            alt="Enyimba FC"
                            className="w-[58px]"
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Slider
