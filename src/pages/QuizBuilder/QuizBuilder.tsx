import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TestGenerator } from "../../components/testGenerator/TestGenerator";
import { ContainerWrapper } from "../../components/ui/wrappers/ContainerWrapper";
import { isAuthentication } from "../../store";
import { useAtom } from "jotai";
import { localStorageKeyName } from "../../services/application_authentication/appAuthentication.query";
export const QuizBuilder = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(localStorageKeyName) === "false") {
      navigate("/register");
    }
    return;
  }, []);
  return (
    <>
      <ContainerWrapper>
        <TestGenerator />
      </ContainerWrapper>
    </>
  );
};
