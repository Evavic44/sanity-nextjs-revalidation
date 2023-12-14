export type PostType = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  cover: {
    image: string;
    lqip: string;
    alt: string;
  };
};
