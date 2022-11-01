import styled from "styled-components";


export const JOB_LISTING_CONTAINER = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  background-color: #FFFFFF;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 2.4rem 1.6rem;
  min-height: 16.4rem;
  align-items: stretch;
  gap: 2.6rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CONTENT_BOX = styled.div`
  display: flex;
  align-items: center;
  align-items: stretch;
  gap: 3.2rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const INFO_BOX = styled.div`
  max-width: 120rem;
  flex-basis: 100%;
  display: flex;

  @media screen and (max-width: 700px) {
    order: 3;
  }
`;

export const IMG = styled.div`
  min-width: 8.5rem;
  min-height: 8.5rem;
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;

  @media screen and (max-width: 700px) {
    min-width: 6.6rem;
  min-height: 6.6rem;
  }
`;

export const INFO_CONTENT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  a {
    color: var(--text-dark);
    letter-spacing: -0.625px;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.625px;
  }

  span {
    color: var(--text-secondary);
    font-size: 1.6rem;
    letter-spacing: 0.23619px;
  }

  @media screen and (max-width: 700px) {
    gap: 0.5rem;

    a {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    span {
      font-weight: 400;
    }
  }
`;

export const LOCATION = styled.div`
  span {
    letter-spacing: 0.23619px;
    margin-left: 0.8rem;
  }
`;

export const DETAILS_BOX = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;

  svg {
    align-self: flex-end;
  }

  span {
    letter-spacing: 0.23619px;
    color: var(--text-secondary);
    font-size: 1.6rem;
    line-height: 2.5rem;
    text-align: end;
  }

  @media screen and (max-width: 700px) {
    order: 2;
    margin-left: auto;

    span {
      font-weight: 300;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }

    svg {
      display: none;
    }
  }
`;

export const STARS_BOX = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.9rem;
    height: 1.8rem;
  }

  @media screen and (max-width: 700px) {
    order: 1;

    svg {
    width: 1rem;
    height: 1rem;
    }
  }
`;