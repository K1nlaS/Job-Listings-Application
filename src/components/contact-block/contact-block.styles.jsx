import styled from "styled-components";


export const CONTACT_BLOCK_CONTAINER = styled.div`
  position: absolute;
  top: 5.6rem;
  right: -48.2rem;

  @media screen and (max-width: 1300px) {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    margin-top: 4rem;
  }
  width: 40.2rem;
  background-color: #2A3047;
  border-radius: 0.8rem;
`;

export const INFO_BOX = styled.div`
  padding: 3.2rem 6.2rem 2.4rem;
  position: relative;

  span {
    display: block;
    color: #E7EAF0;
  }
`;


export const NAME = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -0.625px;
  margin-bottom: 0.8rem;
`;

export const ADDRESS = styled.span`
  margin-bottom: 0.8rem;
  display: block;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #E7EAF0;

  svg {
    margin-right: 0.8rem;
  }
`;

export const CONTACTS = styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const MAP_BOX = styled.div`
  div {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;