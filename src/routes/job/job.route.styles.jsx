import styled from "styled-components";


export const JOB_CONTAINER = styled.div`
  padding: 5.6rem 0;
  max-width: 77.4rem;
  position: relative;
`;

export const HEAD_SECTION = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid #3A4562;

  h1 {
    color: var(--text-dark);
    margin: 0;
    padding: 0;
  }
`;

export const ACTIONS_BOX = styled.div`
  display: flex;
  gap: 2.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-size: 1.8rem;
      line-height: 2.4rem;
      letter-spacing: -0.5625px;
      color: var(--text-dark);
    }

    svg {
      color: #70778B;
    }
  }
`;

export const APPLY_BUTTON_CONTAINER = styled.div`
  margin-top: 4rem;

  button {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: white;
    padding: 1.8rem 3rem;
    border: none;
    background-color: #384564;
    border-radius: 0.8rem;
    cursor: pointer;
  }
`;

export const INFO_SECTION = styled.section`
  
`;

export const TITLE_BOX = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
  color: #3A4562;

  div {
    max-width: 50rem;

    span {
      margin-top: 0.7rem;
      display: block;
    }
  }
`;

export const SALARY = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.625px;

  span {
    font-weight: 400;
    line-height: 2.4rem;
    font-size: 1.8rem;
    letter-spacing: -0.5625px;
  }
`;

export const DESCRIPTION = styled.div`
  margin-top: 0.7rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.5625px;
  color: var(--text-dark);
`;

export const RESPONSIBILITIES = styled.div`
  margin-top: 4rem;

  h3 {
    color: var(--text-dark);
    margin: 0;
    letter-spacing: -0.625px;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-dark);
  }
`;

export const BENEFITS = styled.div`
  margin-top: 4rem;

  h3 {
    color: var(--text-dark);
    margin: 0;
    letter-spacing: -0.625px;
    margin-bottom: 1rem;
  }

  ul {
    color: var(--text-dark);
    list-style-type: square;
  }
`;

export const ADDITIONAL_INFO_SECTION = styled.section`
  margin-top: 4rem;
`;

export const ADDITIONAL_INFO_HEAD = styled.div`
  padding-bottom: 0.9rem;
  border-bottom: 1px solid #3A4562;
  
  h1 {
    color: var(--text-dark);
    margin: 0;
  }
`;

export const ADDITIONAL_INFO_CONTENT = styled.div`
  margin-top: 1.6rem;

  &:last-child {
    margin-top: 2.3rem;
  }

  span {
    display: block;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5625px;
    color: #3A4562;
  }

  & > div {
    display: flex;
    gap: .8rem;
  }
`;

export const EMPLOYMENT = styled.div`
  text-align: center;
  padding: 1.6rem 0;
  max-width: 22.2rem;
  width: 100%;
  background: rgba(161, 177, 219, 0.317343);
  border: 1px solid rgba(85, 105, 158, 0.3);
  border-radius: 0.8rem;

  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.457143px;
  color: #55699E;
`;

export const BENEFIT = styled(EMPLOYMENT)`
  color: #988B49;
  background: rgba(255, 207, 0, 0.15);
  border: 1px solid #FFCF00;
`;

export const IMG_SECTION = styled.section`
  margin-top: 8.7rem;

  & > div:first-of-type {
    padding-bottom: 0.9rem;
    border-bottom: 1px solid #3A4562;
  
    h1 {
      color: var(--text-dark);
      margin: 0;
    }
  }
`;

export const IMG_BLOCK = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const IMG = styled.div`
  width: 21rem;
  height: 11.6rem;
  background-image: url(${props => props.img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.8rem;
`;

export const RETURN_CONTAINER = styled.div`
  margin-top: 9.6rem;
  max-width: 21.4rem;
  border-radius: 0.8rem;

  a {
    color: #3A4562;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.9rem;
    background-color: #E4E5EA;
    padding: 1.6rem 2.4rem;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;