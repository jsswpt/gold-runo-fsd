import { SalesLeader } from "../";
import Image1 from "shared/assets/media/imgs/new-example.jpg";
import Image2 from "shared/assets/media/imgs/set-example.jpg";

export const getSalesLeader = (): Promise<{ data: SalesLeader[] }> => {
  return new Promise((res, rej) => {
    res({
      data: [
        {
          id: 1,
          image_url: Image1,
          title: "Бали",
          price: 500,
          colors: [
            {
              id: 18,
              title: "1",
              image_url: null,
            },
            {
              id: 20,
              title: "2",
              image_url: null,
            },
            {
              id: 21,
              title: "3",
              image_url: null,
            },
            {
              id: 22,
              title: "4",
              image_url: null,
            },
            {
              id: 23,
              title: "5",
              image_url: null,
            },
            {
              id: 24,
              title: "6",
              image_url: null,
            },
            {
              id: 25,
              title: "8",
              image_url: null,
            },
            {
              id: 26,
              title: "9",
              image_url: null,
            },
            {
              id: 27,
              title: "10",
              image_url: null,
            },
            {
              id: 28,
              title: "11",
              image_url: null,
            },
            {
              id: 29,
              title: "12",
              image_url: null,
            },
            {
              id: 30,
              title: "13",
              image_url: null,
            },
            {
              id: 31,
              title: "0",
              image_url: null,
            },
            {
              id: 32,
              title: "14",
              image_url: null,
            },
            {
              id: 34,
              title: "17",
              image_url: null,
            },
          ],
        },
        {
          id: 2,
          image_url: Image2,
          title: "Майами",
          price: 0,
          colors: [
            {
              id: 36,
              title: "1",
              image_url: null,
            },
            {
              id: 37,
              title: "2",
              image_url: null,
            },
            {
              id: 38,
              title: "3",
              image_url: null,
            },
          ],
        },
        {
          id: 3,
          image_url: Image1,
          title: "Калифорния",
          price: 0,
          colors: [
            {
              id: 40,
              title: "1",
              image_url: null,
            },
            {
              id: 41,
              title: "2",
              image_url: null,
            },
          ],
        },
      ],
    });
  });
};
