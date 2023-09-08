export interface IPostCard {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  like_amount: number;
}

export const PostCard: IPostCard[] = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/the-futuristic-astronaut-in-his-space-suit-stood-determinedly-armed-generated-by-ai_24640-93266.jpg?w=996&t=st=1694035687~exp=1694036287~hmac=4d2b1196123a09d09b12e200d9a03cee4eeb8c6bf2a91873c92edcbb37076531",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit.In similique, repudiandae incidunt modi eius placeat.",
    date: "2021-10-06",
    lesson_num: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: 5,
    like_amount: 44,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/full-shot-female-astronaut-wearing-spacesuit_23-2150417571.jpg?w=900&t=st=1694035661~exp=1694036261~hmac=a4ec9fdb3b20f853ac2b6ad0ea1e74b8746df1f68cc78ba27f31e9c5fab15c32",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. In similique, repudiandae incidunt modi eius placeat.",
    date: "2023-05-06",
    lesson_num: 12,
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: 1,
    like_amount: 22,
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/the-futuristic-astronaut-in-his-space-suit-stood-determinedly-armed-generated-by-ai_24640-93266.jpg?w=996&t=st=1694035687~exp=1694036287~hmac=4d2b1196123a09d09b12e200d9a03cee4eeb8c6bf2a91873c92edcbb37076531",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique, repudiandae incidunt modi eius placeat.",
    date: "2022-01-16",
    lesson_num: 23,
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: 4,
    like_amount: 16,
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/the-futuristic-astronaut-in-his-space-suit-stood-determinedly-armed-generated-by-ai_24640-93266.jpg?w=996&t=st=1694035687~exp=1694036287~hmac=4d2b1196123a09d09b12e200d9a03cee4eeb8c6bf2a91873c92edcbb37076531",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. In similique, repudiandae incidunt modi eius placeat.",
    date: "2020-10-06",
    lesson_num: 13,
    title: "Lorem ipsum dolor sit amet consectetur.",
    author: 2,
    like_amount: 53,
  },
];
