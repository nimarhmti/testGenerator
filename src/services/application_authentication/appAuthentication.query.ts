import { info } from "console";
import { useMutation } from "react-query";
import {
  userAuthentication,
  userLogIn,
  userLogout,
} from "./appAuthentication.api";
import type { authUserDataModel } from "./appAuthentication.interface";
export const localStorageKeyName = "Authentication";
export const useUserAuthentication = () =>
  useMutation((info: authUserDataModel) => userAuthentication(info), {
    onSuccess() {
      localStorage.setItem(localStorageKeyName, "true");
    },
    onError() {
      localStorage.setItem(localStorageKeyName, "false");
    },
  });

export const useUserLogIn = () =>
  useMutation((info: authUserDataModel) => userLogIn(info), {
    onSuccess() {
      localStorage.setItem(localStorageKeyName, "true");
    },
    onError() {
      localStorage.setItem(localStorageKeyName, "false");
    },
  });

export const useUserLogout = () =>
  useMutation((item: null) => userLogout(), {
    onSuccess() {
      localStorage.clear();
    },
  });
