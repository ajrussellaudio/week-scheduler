import styled, { css } from 'styled-components';

export const Grid = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const DayName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const EventsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Clashing = css`
  border-color: red;
  background-color: tomato;
`;

type EventProps = {
  $isClashing?: boolean;
};

export const Event = styled.li<EventProps>`
  width: 100%;
  padding: 0.333rem;
  border-radius: 0.2rem;
  border: 1px solid transparent;
  box-shadow: 0 0 17px 2px rgb(0 0 0 / 10%);

  ${(props) => props.$isClashing && Clashing}
`;

export const Subject = styled.span`
  display: block;
  white-space: nowrap;
`;

export const Time = styled.span`
  font-size: 0.666rem;
  white-space: nowrap;
`;
