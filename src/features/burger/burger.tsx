import { useState } from "react";
import styled from "styled-components";

type Props = {
  items: Array<{
    id: string;
    title: string;
  }>;

  onClick: () => void;
};

export const Burger: React.FC<Props> = ({ items }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <BurgerWrapper onClick={toggleBurger}>
        <BurgerLine
          className="burger-Line-1"
          style={{ transform: burgerOpen ? "rotate(45deg)" : "rotate(0)" }}
        ></BurgerLine>
        <BurgerLine
          className="burger-Line-2"
          style={{ transform: burgerOpen ? "rotate(-45deg)" : "rotate(0)" }}
        ></BurgerLine>
      </BurgerWrapper>
      <ListWrapper style={{ display: burgerOpen ? "block" : "none" }}>
        {items.map(({ id, title }) => (
          <ListLineWrapper key={id}>{title}</ListLineWrapper>
        ))}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.ul`
  all: unset;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 30;
  width: 250px;
  height: 100px;
  border-radius: 0;
  background-color: #283ca4;
`;

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  background-color: #283ca4;
  color: white;
`;

const BurgerWrapper = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  padding: 15px 30px 0px 0px;
  cursor: pointer;
`;

const BurgerLine = styled.div`
  width: 24px;
  height: 4px;
  border-radius: 10px;
  transform-origin: 6px;
  transition: all 0.2s linear;
  background-color: white;
`;
