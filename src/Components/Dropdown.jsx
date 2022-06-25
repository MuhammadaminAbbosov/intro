import React from 'react'
import styled from 'styled-components'

const Dropdown = ({ options }) => {
    return (
        <Wrapper>
            {
                options.map((option) =>
                    <li key={option.text}>
                        {option.icon && <img src={option.icon} alt="" />}
                        <p>{option.text}</p>
                    </li>)
            }
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    top: 25px;
    right: 0;
    position: absolute;
    padding: 25px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0 , 0, 0.1);

    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 120px;

    li {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 14px;

        img {
            width: 21px;
        }

        &:hover {
           p {
                color: #2d2d2d;
           } 
        }
    }
`

export default Dropdown