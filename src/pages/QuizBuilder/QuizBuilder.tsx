import React from "react";
import { TestGenerator } from "../../components/testGenerator/TestGenerator";
import { ContainerWrapper } from "../../components/ui/wrappers/ContainerWrapper";

export const QuizBuilder = () => {
  return (
    <>
      <ContainerWrapper>
        <TestGenerator />
      </ContainerWrapper>
    </>
  );
};
