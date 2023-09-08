import { styled } from "styled-components";
import { IPostCard } from "../../post.date";
import React, { useState } from "react";

type DefaultCardProps = {
  post: IPostCard;
};

export const DefaultCard: React.FC<DefaultCardProps> = ({ post }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isDislike, setIsDislike] = useState<boolean>(false);
  const [amountLike, setAmountLike] = useState<number>(post.like_amount);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function like() {
    setIsLike(!isLike);
    setIsDislike(false);
    setAmountLike(isLike ? amountLike - 1 : amountLike + 1);
  }

  function dislike() {
    if (isLike) {
      setAmountLike(amountLike - 1);
    }
    setIsDislike(!isDislike);
    setIsLike(false);
  }
  
  return (
    <>
      <DefaultCardWrapper key={post.id}>
        <DefaultCardTopWrapper>
          <DefaultCardLeftWrapper>
            <DefaultCardDateWrapper>{post.date}</DefaultCardDateWrapper>
            <DefaultCardTitleWrapper>{post.title}</DefaultCardTitleWrapper>
            <DefaultCardTextWrapper>{post.text}</DefaultCardTextWrapper>
          </DefaultCardLeftWrapper>
          <DefaultCardRightWrapper>
            <DefaultCardImgWrapper>
              <img src={post.image} alt="#"></img>
            </DefaultCardImgWrapper>
          </DefaultCardRightWrapper>
        </DefaultCardTopWrapper>
        <DefaultCardIconWrapper>
          <DefaultCardLeftIconWrapper>
            <DefaultCardIconLike onClick={like}>
              {isLike ? (
                <i className="fa-solid fa-thumbs-up fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-up fa-xl"></i>
              )}
            </DefaultCardIconLike>
            <AmountLike>{amountLike}</AmountLike>
            <DefaultCardIconDislike onClick={dislike}>
              {isDislike ? (
                <i className="fa-solid fa-thumbs-down fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-down fa-xl"></i>
              )}
            </DefaultCardIconDislike>
          </DefaultCardLeftIconWrapper>
          <DefaultCardRightIconWrapper>
            <DefaultCardIconSave onClick={() => setIsSaved(!isSaved)}>
              {isSaved ? (
                <i className="fa-solid fa-bookmark fa-xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark fa-xl"></i>
              )}
            </DefaultCardIconSave>
            <DefaultCardIconDots>
              <i className="fa-solid fa-ellipsis fa-xl"></i>
            </DefaultCardIconDots>
          </DefaultCardRightIconWrapper>
        </DefaultCardIconWrapper>
      </DefaultCardWrapper>
    </>
  );
};

export default DefaultCard;

const DefaultCardWrapper = styled.div`
  all: unset;
  display: flex;
  width: 750px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  &:after {
    content: "";
    display: block;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 98%;
    height: 2px;
    background-color: grey;
  }
`;

const DefaultCardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;

const DefaultCardLeftWrapper = styled.div`
  width: 400px;
`;
const DefaultCardRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

const DefaultCardDateWrapper = styled.div`
  margin-top: 20px;
  width: 150px;
  color: grey;
`;
const DefaultCardTitleWrapper = styled.h2`
  width: 400px;
  font-size: 34px;
`;

const DefaultCardImgWrapper = styled.div`
  width: 300px;
  height: 250px;
  margin-left: auto;
  margin-top: 20px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const DefaultCardIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const DefaultCardLeftIconWrapper = styled.div`
  display: flex;
  width: 100px;
`;

const DefaultCardRightIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
`;

const DefaultCardIconLike = styled.div`
  margin-left: 30px;
  cursor: pointer;
`;

const DefaultCardIconDislike = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;

const DefaultCardIconSave = styled.button`
  margin-right: 10px;
  border: none;
  background-color: lightgrey;
  cursor: pointer;
`;

const DefaultCardIconDots = styled.button`
  margin-right: 30px;
  cursor: pointer;
  border: none;
  background-color: lightgrey;
  cursor: pointer;
`;

const AmountLike = styled.div`
  font-size: 16px;
  margin: 0 5px;
`;

const DefaultCardTextWrapper = styled.p`
  margin-top: 15px;
  font-size: 24px;
  color: grey;
`;
