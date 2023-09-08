import React, { useState } from "react";
import { IPostCard } from "../../post.date";
import styled from "styled-components";

type MidleCardProps = {
  post: IPostCard;
};

export const MidleCard: React.FC<MidleCardProps> = ({ post }) => {
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
      <MidleCardWrapper key={post.id}>
        <MidleCardTopWrapper>
          <MidleCardImgWrapper>
            <img src={post.image} alt="#"></img>
          </MidleCardImgWrapper>
          <MidleCardDateWrapper>{post.date}</MidleCardDateWrapper>
          <MidleCardTitleWrapper>{post.title}</MidleCardTitleWrapper>
        </MidleCardTopWrapper>
        <MidleCardIconWrapper>
          <MidleCardLeftIconWrapper>
            <MidleCardIconLike onClick={like}>
              {isLike ? (
                <i className="fa-solid fa-thumbs-up fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-up fa-xl"></i>
              )}
            </MidleCardIconLike>
            <AmountLike>{amountLike}</AmountLike>
            <MidleCardIconDislike onClick={dislike}>
              {isDislike ? (
                <i className="fa-solid fa-thumbs-down fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-down fa-xl"></i>
              )}
            </MidleCardIconDislike>
          </MidleCardLeftIconWrapper>
          <MidleCardRightIconWrapper>
            <MidleCardIconSave onClick={() => setIsSaved(!isSaved)}>
              {isSaved ? (
                <i className="fa-solid fa-bookmark fa-xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark fa-xl"></i>
              )}
            </MidleCardIconSave>
            <MidleCardIconDots>
              <i className="fa-solid fa-ellipsis fa-xl"></i>
            </MidleCardIconDots>
          </MidleCardRightIconWrapper>
        </MidleCardIconWrapper>
      </MidleCardWrapper>
    </>
  );
};

export default MidleCard;

const MidleCardWrapper = styled.div`
  all: unset;
  display: flex;
  width: 375px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  &:after {
    content: "";
    display: block;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 98%;
    height: 2px;
    background-color: grey;
  }
`;

const MidleCardTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const MidleCardDateWrapper = styled.div`
  width: 350px;
  margin-top: 15px;
  font-weight: 400;
  color: grey;
`;
const MidleCardTitleWrapper = styled.h2`
  display: flex;
  width: 100%;
`;

const MidleCardImgWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 250px;
  align-items: center;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const MidleCardIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const MidleCardLeftIconWrapper = styled.div`
  display: flex;
  width: 100px;
`;

const MidleCardRightIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
`;

const MidleCardIconLike = styled.div`
  margin-left: 30px;
  cursor: pointer;
`;

const MidleCardIconDislike = styled.div`
  margin-left: 15px;
`;

const MidleCardIconSave = styled.button`
  margin-right: 10px;
  border: none;
  background-color: lightgrey;
  cursor: pointer;
`;

const MidleCardIconDots = styled.button`
  margin-right: 30px;
  cursor: pointer;
  border: none;
  background-color: lightgrey;
`;

const AmountLike = styled.div`
  font-size: 16px;
  margin-left: 5px;
`;
