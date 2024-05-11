import React from 'react'
import styled from 'styled-components';
import "../Medical/card.css"
const H5 = styled.h5`
font-size: 1.3rem;
font-weight: bold;
color:#005c53
`
const Div = styled.div`
background-color:#e6fffc;
border: 1px solid #e6fffc;
border-radius : 15px;
&:hover{
    background-color:#ffffff;

}`
export default function CardOpt({ title, children }) {
    return (
        <div>
            <Div className="card cardm">
                <div className="card-body">
                    {children}
                    <H5 className="card-title text-center text-uppercase">{title}</H5>
                </div>
            </Div>
        </div>
    )
}
