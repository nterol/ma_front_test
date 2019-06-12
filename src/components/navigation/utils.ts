import axios from "axios";

export const markAsRead = async (id: string, realtor: string) => {
  try {
    const { REACT_APP_API_URL: API_URL } = process.env;
    await axios.post(`${API_URL}/realtors/${realtor}/messages/${id}`, "read=1");
  } catch (e) {
    console.log(e);
  }
};
