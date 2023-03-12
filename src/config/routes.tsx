import { ReactElement } from "react";
import {
  HomePage,
  LogIn,
  Pricing,
  QuizBuilder,
  Register,
  Support,
  Templates,
} from "../pages/index";
export interface routeModel {
  id: string;
  path: string;
  components: ReactElement | null;
  private: boolean;
}

export const routes: routeModel[] = [
  {
    id: "homepage",
    path: "/",
    components: <HomePage />,
    private: false,
  },
  {
    id: "login",
    path: "/login",
    components: <LogIn />,
    private: false,
  },
  {
    id: "pricing",
    path: "/pricing",
    components: <Pricing />,
    private: false,
  },
  {
    id: "quizbuilder",
    path: "/quizBuilder",
    components: <QuizBuilder />,
    private: true,
  },
  {
    id: "register",
    path: "/register",
    components: <Register />,
    private: false,
  },
  {
    id: "support",
    path: "/support",
    components: <Support />,
    private: false,
  },
  // {
  //   id: "templates",
  //   path: "/templates",
  //   components: <Templates />,
  //   private: false,
  // },
];
