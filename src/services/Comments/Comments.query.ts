import { useQuery, useMutation } from "react-query";
import { postComments } from "./Comments.api";
import { postCommentsModel } from "./Comments.interface";

export const usePostComments = () =>
  useMutation((data: postCommentsModel) => postComments(data));
