import  styled  from 'styled-components';


type Props = {
    children: string;
  };
  
  
  export const Title: React.FC<Props> = ({ children }) => {
    return <TitleWrapper>{children}</TitleWrapper>;
  };
  
  const TitleWrapper = styled.h1`
    color: black;
    font-weight: 500;
    font-size: 32px;
  `;