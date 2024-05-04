import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SpinnerContainer = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();
  //3. if there is no authenticated user, redirect to the /login
  console.log(isLoading);
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //2. while loading, show spinner
  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  //4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
