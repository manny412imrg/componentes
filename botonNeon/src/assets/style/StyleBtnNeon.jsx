/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import styled from "styled-components"

export const H1 = styled.h1`
      color: white;
      
`

export const BtnNeon = styled.a`
      cursor: pointer;
      position: relative;
      display: inline-block;
      padding: 15px 30px;
      color: #fff;
      letter-spacing: 4px;
      font-size: 24px;
      text-decoration: none;
      overflow: hidden;
      transition: 0.2s;
      & .span {
            position: absolute;
            display: block;
      }   
      &:hover{
         background-color: #a945c7;
         box-shadow: 0 0 10px #a945c7, 0 0 40px #a945c7, 0 0 80px #a945c7;
         transition-delay:1s;
            }
`

export const Span1 = styled.span`
   top: 0;
   left: -100%;
   width: 100%;
   height: 2px;
   background: linear-gradient(90deg, transparent, #a945c7);
`