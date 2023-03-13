import { info } from "console";
import { useMutation } from "react-query";
import { userAuthentication } from "./appAuthentication.api";
import type { authUserDataModel, MODEL } from "./appAuthentication.interface";

export const useUserAuthentication = () =>
  useMutation((info: MODEL) => userAuthentication(info), {
    onSuccess() {
      console.log("done");
    },
    onError() {
      console.log("some went wrong!");
    },
  });
