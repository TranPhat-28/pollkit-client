import axios from "axios";
import { IResponse, IPoll } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getAllPolls = () => axios.get<IResponse<IPoll[]>>("/api/polls");

export const useAllPolls = () =>
  useQuery<IPoll[]>({
    queryKey: ["all-polls"],
    queryFn: async () => {
      try {
        const { data } = await getAllPolls();
        return data.data;
      } catch (error) {
        console.log("Error ", error);
        return [{ id: "test-poll", title: "test-poll" }];
      }
    }
  });
