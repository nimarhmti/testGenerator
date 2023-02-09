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
interface routeModel {
  path: string;
  components: ReactElement | null;
}

export const routes: routeModel[] = [
  {
    path: "/homepage",
    components: <HomePage />,
  },
  {
    path: "/login",
    components: <LogIn />,
  },
  {
    path: "/pricing",
    components: <Pricing />,
  },
  {
    path: "/quizBuilder",
    components: <QuizBuilder />,
  },
  {
    path: "/register",
    components: <Register />,
  },
  {
    path: "/support",
    components: <Support />,
  },
  {
    path: "/templates",
    components: <Templates />,
  },
];
