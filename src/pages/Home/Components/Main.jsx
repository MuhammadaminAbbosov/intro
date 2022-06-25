import React from 'react'
import styled from 'styled-components';
import MainImgDesktop from "../../../assets/images/image-hero-desktop.png"
import MainImgMobile from "../../../assets/images/image-hero-mobile.png"

import CompanyDatabiz from "../../../assets/icons/client-databiz.svg"
import CompanyAudioPhile from "../../../assets/icons/client-audiophile.svg"
import CompanyMeet from "../../../assets/icons/client-meet.svg"
import CompanyMaker from "../../../assets/icons/client-maker.svg"


const Main = () => {
    const companies = [CompanyDatabiz, CompanyAudioPhile, CompanyMeet, CompanyMaker]
    return (
        <Wrapper>
            <div className="main__left">
                <b className='main__title'>
                    Make <br /> remote work
                </b>

                <p className='main__info'>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and
                    watch productivity soar.
                </p>

                <button>Learn more</button>

                <div className="main__company-icons">
                    {
                        companies.map(item => <img src={item} key={item} alt='' />)
                    }
                </div>
            </div>
            <div className="main__right">
                <img src={MainImgDesktop} className="mainImgDesktop" alt="" />
                <img src={MainImgMobile} className="mainImgMobile" alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 150px;
    padding: 40px 130px 0 130px;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        padding: 0;
        gap: 50px;
    }

    .main__left {
        width: 500px;
        @media (max-width: 500px) {
            width: 100%;
        }
        .main__title {
            display: block;
            font-weight: 700;
            font-size: 70px;
            margin-bottom: 30px;
            color: #121212;

            @media (max-width: 500px) {
                br {
                    display: none;
                }

                font-size: 40px;
                text-align: center;
                margin-bottom: 35px;
            }
        }

        .main__info {
            font-size: 19px;
            line-height: 25px;
            margin-bottom: 30px;
            color: #868686;
            
            @media (max-width: 500px) {
                text-align: center;
                margin-bottom: 35px;
            }
        }

        button {
            border: 1px solid #121212;
            border-radius: 12px;
            background-color: #121212;
            padding: 15px 25px;
            color: white;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 30px;
            cursor: pointer;

            
            @media (max-width: 500px) {
                display: block;
                margin: 0 auto 40px;
                padding: 17px 25px;
            }

            &:hover {
                background-color: white;
                color: #121212;
                border: 1px solid #121212;
            }
        }

        .main__company-icons {
            display: flex;
            align-items: center;
            gap: 40px;
            @media (max-width: 500px) {
                display: grid;
                grid-template-columns: repeat(4, 75px);
            }
        }
    }

    .main__right {
        width: 370px;

        @media (max-width: 500px) {
            width: 100%;
        }


        img {
            width: 370px;

            &.mainImgMobile {
                display: none;
            }

            @media (max-width: 500px) {
                &.mainImgMobile {
                    display: block;
                    width: 100%;
                }

                &.mainImgDesktop {
                    display: none;
                }
            }
        }
    }
`

export default Main