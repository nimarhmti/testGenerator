import { info } from "console";
import { useMutation } from "react-query";
import {
  userAuthentication,
  userLogIn,
  userLogout,
} from "./appAuthentication.api";
import type { authUserDataModel } from "./appAuthentication.interface";

export const useUserAuthentication = () =>
  useMutation((info: authUserDataModel) => userAuthentication(info));

export const useUserLogIn = () =>
  useMutation((info: authUserDataModel) => userLogIn(info));

export const useUserLogout = () => useMutation((item: null) => userLogout());
