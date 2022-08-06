import React from 'react'

import styled from 'styled-components'

const StyledMiniCards = styled.a`
  color: #585860;
  background-color: ${({ theme }) => theme.cardBG};
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: transform 0.3s ease;
  will-change: transform;
  text-align: center;

  @media (max-width: 960px) {
    width: 50%;
    margin-bottom: .5rem;
  }

  &.active div {
    background: #fff;
  }

  &.active p {
    color: #fff;
  }
`
const StyledCardBG = styled.img`
  width: 80px;
  height: 220px;
  position: absolute !important;
  top: 0px;
  right: 0px;
  background-size: auto;
  background-position: center;
  z-index: -1;
`

const Tag = styled.p`
  top: 16px;
  right: 16px;
  font-size: 32px;
`

const StyledMiniCardHeader = styled.p`
  line-height: 130%;
  margin-top: 0px;
  font-weight: 500;
  font-size: 1.25rem;
  font-family: "GT Haptik Medium";
  font-style: monospace;
`

const StyledMiniCardDesc = styled.p`
  font-size: 0.825rem;
  line-height: 140%;
  font-weight: 400;
`
const StyledMiniImage = styled.img`
  width: 170px;
  margin-bottom: 0;
  @media (max-width: 960px) {
    width: 5.31rem;
    height: 5.31rem;
  }
`

const StyledCircle = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #585860;
  margin: 15px 0 25px;
  @media (max-width: 960px) {
    margin: .43rem 0 .93rem;
  }
`;

const InlineCard = props => {
  return (
    <StyledMiniCards className={props.className} {...props} style={{ backgroundColor: props.backgroundColor, color: props.color }} to={props.to}>
      <StyledMiniImage src={props.icon} />
      {props.image && <StyledCardBG fluid={props.image} />}
      <StyledCircle />
      <StyledMiniCardHeader style={{ color: props.color }}>{props.title}</StyledMiniCardHeader>
      <StyledMiniCardDesc>{props.description || props.desc}</StyledMiniCardDesc>
    </StyledMiniCards>
  )
}

export default InlineCard
