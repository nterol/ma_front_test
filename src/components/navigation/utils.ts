import axios from "axios";

const { REACT_APP_API_URL: API_URL } = process.env;

export const markAsRead = async (id: string, realtor: string) => {
  try {
    await axios.post(`${API_URL}/realtors/${realtor}/messages/${id}`, "read=1");
  } catch (e) {
    console.error(e);
  }
};

export const fetchMessages = async (page: number, realtor: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/realtors/${realtor}/messages?page=${page}`
    );

    return data;
  } catch (e) {
    console.error(e);
  }
};
