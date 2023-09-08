import React, { useState } from "react";
import styled from "styled-components";

export interface MyTabs {
  id: number;
  title: string;
  isDisable?: boolean;
}

export const tabItems: MyTabs[] = [
  { id: 1, title: "Tab1", isDisable: true },
  { id: 2, title: "Tab2" },
  { id: 3, title: "Tab3" },
];

type TabsProps = {
  tabs: MyTabs[];
};

export const Tabs: React.FC<TabsProps> = () => {
  const [selectTabId, setSelectTabId] = useState<number>(tabItems[1].id);

  return (
    <TabsWrapper>
      {tabItems.map((tabItems) => (
        <TabButton
          type="button"
          key={tabItems.id}
          onClick={() => setSelectTabId(tabItems.id)}
          isSelect={selectTabId === tabItems.id}
          disabled={tabItems.isDisable}
        >
          {tabItems.title}
        </TabButton>
      ))}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
`;

const TabButton = styled.button<{ isSelect: boolean }>`
  all: unset;
  font-size: 32px;
  padding: 0px 40px;
  border-bottom: 3px solid;
  border-color: ${({ isSelect }) => ({isSelect} ? "#47464d" : "transparent")};
  color: #201e1e;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #1d2d97;
  }

  &:disabled {
    color: gray;
  }
`;
