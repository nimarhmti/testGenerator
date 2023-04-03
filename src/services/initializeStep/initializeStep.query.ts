import React from "react";
import { useQuery } from "react-query";
import { getSection } from "./initializeStep.api";

export const useGetSection = () =>
  useQuery({
    queryKey: "section",
    queryFn: () => getSection(),
    keepPreviousData: true,
  });
