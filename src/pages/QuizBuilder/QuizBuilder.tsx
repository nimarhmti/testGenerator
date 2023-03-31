import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TestGenerator } from "../../components/testGenerator/TestGenerator";
import { ContainerWrapper } from "../../components/ui/wrappers/ContainerWrapper";
import { isAuthentication } from "../../store";
import { useAtom } from "jotai";
export const QuizBuilder = () => {
  const [isAuth, setIsAuth] = useAtom<boolean>(isAuthentication);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuth) navigate("/register");
  //   return;
  // }, [isAuth]);
  return (
    <>
      <ContainerWrapper>
        <TestGenerator />
      </ContainerWrapper>
    </>
  );
};
