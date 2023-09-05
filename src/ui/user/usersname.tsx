import styled from "styled-components";

type Props = {
  firstName: string;
  secondName: string;
};

export const Username: React.FC<Props> = ({ firstName, secondName }) => {
  const userName: Array<string> = [firstName, secondName].map(
    (item) =>
      item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()
  );
  const stringUserName: string = userName.join(" ");
  return <UsernameWrapper>{stringUserName}</UsernameWrapper>;
};

const UsernameWrapper = styled.span`
  color: white;
  font-weight: 300;
  font-size: 24px;
`;
