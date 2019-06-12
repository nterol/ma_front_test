import axios from "axios";

export async function dataFetcher(realtor: string = "", cancelToken: any) {
  const { REACT_APP_API_URL: API_URL } = process.env;
  try {
    const { data } = await axios.get(
      `${API_URL}/realtors${realtor ? `/${realtor}` : ""}`,
      { cancelToken }
    );

    return data;
  } catch (e) {
    console.log("Error while fetching");
  }
}
