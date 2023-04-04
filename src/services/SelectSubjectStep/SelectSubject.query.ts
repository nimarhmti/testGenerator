import { useQuery } from "react-query";
import { getTopic } from "./SelectSubject.api";

export const useGetTopic = (id: number | string) =>
  useQuery({
    queryKey: "topics",
    queryFn: () => getTopic(id),
  });
