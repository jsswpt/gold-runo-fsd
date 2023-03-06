import axios from "axios";
import { APIinstance } from "../axios/axios";

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

export const getUser = async () => {};
