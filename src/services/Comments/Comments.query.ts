import { useQuery, useMutation } from "react-query";
import { postComments } from "./Comments.api";

export const usePostComments = () =>
  useMutation((data: any) => postComments(data));
