import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg"
import { ReactComponent as IconArrowDown } from "../../../assets/icons/icon-arrow-down.svg"
import { ReactComponent as IconArrowUp } from "../../../assets/icons/icon-arrow-up.svg"
import MenuIcon from "../../../assets/icons/icon-menu.svg"
import ClsoeIcon from "../../../assets/icons/icon-close-menu.svg"
import Dropdown from '../../../Components/Dropdown'

import IconTodo from "../../../assets/icons/icon-todo.svg"
import IconCalendar from "../../../assets/icons/icon-calendar.svg"
import IconReminder from "../../../assets/icons/icon-reminders.svg"
import IconPlaning from "../../../assets/icons/icon-planning.svg"

const Header = () => {
    const [handleDropdown, setHandleDropdown] = useState(false)
    const [handleDropdown2, setHandleDropdown2] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleClick = (id) => {
        if (id === 1) {
            setHandleDropdown(!handleDropdown)
            setHandleDropdown2(false)
        } else {
            setHandleDropdown(false)
            setHandleDropdown2(!handleDropdown2)
        }
    }

    const option1 = [
        {
            icon: IconTodo,
            text: "Todo List"
        },
        {
            icon: IconCalendar,
            text: "Calendar"
        },
        {
            icon: IconReminder,
            text: "Reminders"
        },
        {
            icon: IconPlaning,
            text: "Planning"
        }
    ]

    const option2 = [
        {
            text: "History"
        },
        {
            text: "Our Team"
        },
        {
            text: "Blog"
        }
    ]

    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <Wrapper>
            <Logo />
            <ul className='nav'>
                <li className='nav-item' onClick={() => handleClick(1)}>
                    <span>
                        <p className='item-text'>Features</p>
                        {handleDropdown ? <IconArrowUp /> : <IconArrowDown />}
                    </span>
                    {handleDropdown && <Dropdown options={option1} />}
                </li>
                <li className='nav-item' onClick={() => handleClick(2)}>
                    <span>
                        <p className='item-text'>Company</p>
                        {handleDropdown2 ? <IconArrowUp /> : <IconArrowDown />}
                    </span>
                    {handleDropdown2 && <Dropdown options={option2} />}
                </li>
                <li className='nav-item'>
                    <p className='item-text'>Careers</p>
                </li>
                <li className='nav-item'>
                    <p className='item-text'>About</p>
                </li>
            </ul>

            <Login>
                <button>Login</button>
                <button>Register</button>
            </Login>

            <img src={menu ? ClsoeIcon : MenuIcon} className="menu-icon" onClick={() => handleMenu()} alt="" />

            {
                menu && <Sidebar className='sidebar'>
                    <div className="overlay" onClick={() => { setMenu(false); setHandleDropdown(false); setHandleDropdown2(false) }}>

                    </div>
                    <ul className='sidebar-ul'>
                        <li className='nav-item' onClick={() => handleClick(1)}>
                            <span>
                                <p className='item-text'>Features</p>
                                {handleDropdown ? <IconArrowUp /> : <IconArrowDown />}
                            </span>
                            {
                                handleDropdown && <div className="item-contents">
                                    {
                                        option1.map(item => <div className='item-content'>
                                            <img src={item.icon} alt="" />
                                            <p>{item.text}</p>
                                        </div>)
                                    }
                                </div>
                            }
                        </li>
                        <li className='nav-item' onClick={() => handleClick(2)}>
                            <span>
                                <p className='item-text'>Company</p>
                                {handleDropdown2 ? <IconArrowUp /> : <IconArrowDown />}
                            </span>
                            {
                                handleDropdown2 && <div className="item-contents">
                                    {
                                        option2.map(item => <div className='item-content'>
                                            <p>{item.text}</p>
                                        </div>)
                                    }
                                </div>
                            }
                        </li>
                        <li className='nav-item'>
                            <p className='item-text'>Careers</p>
                        </li>
                        <li className='nav-item'>
                            <p className='item-text'>About</p>
                        </li>

                        <li className='buttons'>
                            <button >Login</button>
                            <button>Register</button>
                        </li>
                    </ul>


                </Sidebar>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 32px 40px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 55px;
    @media (max-width: 500px) {
        justify-content: space-between;
        padding: 25px 17px;

    }

    .nav {
        @media (max-width: 500px) {
            display: none
        }
        list-style: none;
        display: flex;
        align-items: flex-start;
        gap: 35px;

        .nav-item {
            position: relative;
            cursor: pointer;
            color: #676767;
            span {
                display: flex;
                align-items: center;
                font-weight: 500;
                gap: 7px;
            }

            &:hover {
                .item-text {
                    color: #2d2d2d;
                }
            }
        }
    }

    .menu-icon {
        display: none;
        cursor: pointer;
        position: relative;
        z-index: 111;
        @media (max-width: 500px) {
            display: block;
        }
    }
`

const Login = styled.div`
    margin-left: auto;
    display: flex;
    gap: 20px;
    @media (max-width: 500px) {
            display: none;
    }
    button {
        padding: 12px 22px;
        border-radius: 12px;
        border: 1px solid transparent;
        color: #6A6A6A;
        font-size: 16px;
        font-weight: 500;
        background-color: transparent;
        cursor: pointer;

        &:last-child {
            border: 1px solid #6A6A6A;
        }

        &:hover {
            color: #121212;

            &:last-child {
            border: 1px solid #121212;
            }
        }
    }
`

const Sidebar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    .overlay {
        background-color: rgba(0, 0, 0, 0.7);
    }

   .sidebar-ul {
       background-color: white;
       padding: 80px 20px 40px;
       list-style: none;
       display: flex;
       flex-direction: column;
       gap: 30px;
       li {
           cursor: pointer;
            color: #686868;

           span {
               display: grid;
               grid-template-columns: 1fr 1fr;
               align-items: center;
           }

           .item-contents {
                display: flex;
                flex-direction: column;
                gap: 10px;

                .item-content {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    padding: 10px  0 0 25px;

                    img {
                        width: 17px;
                        margin-right: 15px;
                    }
                }
           }

           &.buttons {
               margin-top: auto;
               button {
                   display: block;
                   margin: 0 auto;
                   width: 100%;
                   font-size: 16px;
                   cursor: pointer;
                   padding: 15px;
                   background-color: transparent;
                   border-radius: 12px;
                   border: 1px solid transparent;
                   color: #686868;
                   &:last-child {
                       border: 1px solid #686868;
                   }
               }
           }
       }
   }

`

export default Header