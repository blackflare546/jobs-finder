import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useJobs = () => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "7a6146aa71msh560f814062e4c05p12b843jsnc89fffc7e1cd",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const getAllJobs = async () => {
    const response = await axios.request(options);
    return response.data;
  };

  const { isLoading, data } = useQuery(["allJobs"], getAllJobs);
  return { data, isLoading };
};
