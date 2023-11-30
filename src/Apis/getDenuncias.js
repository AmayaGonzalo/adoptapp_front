import axios from "axios";

export const fetchComplaints = async () => {
  try {
    const response = await axios.get(
      "https://647d3b58af98471085498b1c.mockapi.io/denuncias"
    );
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};
