import axios from "axios";
import { APIinstance } from "../axios/axios";
import { User } from "../types/user.type";

export const getVkontakteAuthUrl = async () => {
  try {
    const url = await APIinstance.get<string>("/login/vkontakte");

    return url.data;
  } catch (e: any) {
    throw new Error(`Ошибка, ${JSON.stringify(e.message)}`);
  }
};

export const getYandexAuthUrl = async () => {
  try {
    const url = await APIinstance.get<string>("/login/yandex");

    return url.data;
  } catch (e: any) {
    throw new Error(`Ошибка, ${JSON.stringify(e.message)}`);
  }
};

export const getUser = async (): Promise<User> => {
  const user = await APIinstance.get<User>("/user");

  return user.data;
};
