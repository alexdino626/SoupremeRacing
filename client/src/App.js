import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Homepage from "./Home/Homepage";
// import LogIn from "./Log In and out/LogIn";
import Register from "./Log In and out/Register";
import DriversRankings from "./Other/DriversRankings";
import RaceSummary from "./Race-Summary/RaceSummary";
import TeamsRankings from "./Other/TeamsRankings";
import Profile from "./User/Profile";

const App = () => {
  return (
    <>
        <GlobalStyle />
        {/* <Div> */}
          <Router>
            <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route exact path="/logIn" element={<LogIn />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/rankings/drivers" element={<DriversRankings />} />
                <Route path="/rankings/teams" element={<TeamsRankings />} />
                <Route path="/racesummary" element={<RaceSummary />} />
                {/* <Route exact path="/news" element={<News />} /> */}
                <Route path="/user/:userId" element={<Profile />} />
              </Routes>
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