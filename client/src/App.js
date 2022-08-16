import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Homepage from "./Home/Homepage";
// import LogIn from "./Log In and out/LogIn";
import Register from "./Log In and out/Register";
import DriversRankings from "./Other/DriversRankings";
import RaceSummary from "./Race Summary/RaceSummary";
import TeamsRankings from "./Other/TeamsRankings";
import Profile from "./User/Profile";
import Auth0ProviderWithHistory from './auth0-provider-with-history';

const App = () => {
  return (
    <>
        <GlobalStyle />
        {/* <Div> */}
          <Router>
            <Header />
            <Auth0ProviderWithHistory>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                {/* <Route exact path="/logIn" element={<LogIn />} /> */}
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/rankings/drivers" element={<DriversRankings />} />
                <Route exact path="/rankings/teams" element={<TeamsRankings />} />
                <Route exact path="/racesummary" element={<RaceSummary />} />
                {/* <Route exact path="/news" element={<News />} /> */}
                <Route exact path="/user/:userId" element={<Profile />} />
              </Routes>
            </Auth0ProviderWithHistory>
          </Router>
        {/* </Div> */}
    </>
  );
};

// const Div = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 100%;
//   min-height: 1300px;
// `;

export default App;