import { URL } from "../constants/url";

export const getChartData = async <T>() => {
  try {
    const response = await fetch(URL);
    const data: T = await response.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};
