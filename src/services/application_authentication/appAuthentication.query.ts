import { info } from "console";
import { useMutation } from "react-query";
import { userAuthentication, userLogIn } from "./appAuthentication.api";
import type { authUserDataModel } from "./appAuthentication.interface";

export const useUserAuthentication = () =>
  useMutation((info: authUserDataModel) => userAuthentication(info), {
    onSuccess() {
      console.log("done");
    },
    onError() {
      console.log("some went wrong!");
    },
  });

export const useUserLogIn = () =>
  useMutation((info: authUserDataModel) => userLogIn(info), {
    onSuccess() {
      console.log("done");
    },
    onError() {
      console.log("some went wrong!");
    },
  });
