import { styled } from "styled-components";
import { IPostCard } from "../../post.date";
import React, { useState } from "react";

type SmallCardProps = {
  post: IPostCard;
};

export const SmallCard: React.FC<SmallCardProps> = ({ post }) => {
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
      <SmallCardWrapper key={post.id}>
        <SmallCardTopWrapper>
          <SmallCardLeftWrapper>
            <SmallCardDateWrapper>{post.date}</SmallCardDateWrapper>
            <SmallCardTitleWrapper>{post.title}</SmallCardTitleWrapper>
          </SmallCardLeftWrapper>
          <SmallCardRightWrapper>
            <SmallCardImgWrapper>
              <img src={post.image} alt="#"></img>
            </SmallCardImgWrapper>
          </SmallCardRightWrapper>
        </SmallCardTopWrapper>
        <SmallCardIconWrapper>
          <SmallCardLeftIconWrapper>
            <SmallCardIconLike onClick={like}>
              {isLike ? (
                <i className="fa-solid fa-thumbs-up fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-up fa-xl"></i>
              )}
            </SmallCardIconLike>
            <AmountLike>{amountLike}</AmountLike>
            <SmallCardIconDislike onClick={dislike}>
              {isDislike ? (
                <i className="fa-solid fa-thumbs-down fa-xl"></i>
              ) : (
                <i className="fa-regular fa-thumbs-down fa-xl"></i>
              )}
            </SmallCardIconDislike>
          </SmallCardLeftIconWrapper>
          <SmallCardRightIconWrapper>
            <SmallCardIconSave onClick={() => setIsSaved(!isSaved)}>
              {isSaved ? (
                <i className="fa-solid fa-bookmark fa-xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark fa-xl"></i>
              )}
            </SmallCardIconSave>
            <SmallCardIconDots>
              <i className="fa-solid fa-ellipsis fa-xl"></i>
            </SmallCardIconDots>
          </SmallCardRightIconWrapper>
        </SmallCardIconWrapper>
      </SmallCardWrapper>
    </>
  );
};

export default SmallCard;

const SmallCardWrapper = styled.div`
  all: unset;
  display: flex;
  width: 325px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  &:after {
    content: "";
    display: block;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 98%;
    height: 2px;
    background-color: grey;
  }
`;

const SmallCardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
`;

const SmallCardLeftWrapper = styled.div`
  width: 200px;
`;
const SmallCardRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const SmallCardDateWrapper = styled.div`
  margin-top: 15px;
  width: 150px;
  color: grey;
`;
const SmallCardTitleWrapper = styled.h2`
  font-size: 16px;
  width: 200px;
`;

const SmallCardImgWrapper = styled.div`
  margin-top: 15px;
  width: 100px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SmallCardIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const SmallCardLeftIconWrapper = styled.div`
  display: flex;
  width: 100px;
`;

const SmallCardRightIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
`;

const SmallCardIconLike = styled.div`
  margin-left: 30px;
  cursor: pointer;
`;

const SmallCardIconDislike = styled.div`
  margin-left: 15px;
`;

const SmallCardIconSave = styled.button`
  margin-right: 10px;
  border: none;
  background-color: lightgrey;
  cursor: pointer;
`;

const SmallCardIconDots = styled.button`
  margin-right: 30px;
  cursor: pointer;
  border: none;
  background-color: lightgrey;
`;

const AmountLike = styled.div`
  font-size: 16px;
  margin: 0 5px;
`;
