import AppHeader from "container/app-header/AppHeader";
import AppRouter from "routes/routes";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;

const AppContent = () => {
  return (
    < >
      <AppHeader />
      <Wrapper>
        <AppRouter />
      </Wrapper>
    </>
  );
};

export default AppContent;
