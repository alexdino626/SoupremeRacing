import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Homepage from "./Home/Homepage";
// import LogIn from "./Log In and out/LogIn";
import Register from "./Log In and out/Register";
import DriversRankings from "./Other/DriversRankings";
import RaceSummary from "./Race Summary/RaceSummary";
import TeamsRankings from "./Other/TeamsRankings";
import Profile from "./User/Profile";

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/">
              <Homepage />
              </Route>
              {/* <Route exact path="/logIn" element={<LogIn />} /> */}
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/rankings/drivers" element={<DriversRankings />} />
              <Route exact path="/rankings/teams" element={<TeamsRankings />} />
              <Route exact path="/racesummary" element={<RaceSummary />} />

              {/* <Route exact path="/news" element={<News />} /> */}
              <Route exact path="/user/:userId" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 1300px;
`;

export default App;