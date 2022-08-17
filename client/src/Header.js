import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogButton from "./Log In and out/LogButton";
import LogOutButton from "./Log In and out/LogOutButton";
// import { ReactComponent as Logo} from "./assets/Soupreme-racing-.svg"
import Logo from "./assets/Soupreme-racing-.svg"

const AuthNav = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <Bar>
            {isAuthenticated ? <LogOutButton /> : <LogButton />}
        </Bar>
    )
}

const Header = () => {
    return (
        <Bar>
            <StyledLink to={"/"}>
                    <Image src={Logo} alt="Soup on wheels Logo" />
            </StyledLink>
            <StyledLink to={"/racesummary"}>
                <Span>
                Race Summary
                </Span>
            </StyledLink>
            <StyledLink to={"/rankings/drivers"}>
                <Span>
                Driver Standings
                </Span>
            </StyledLink>
            <StyledLink to={"/rankings/teams"}>
                <Span>
                Constructor Standings
                </Span>
            </StyledLink>
            <StyledLink to={"/user/:userId"}>
                <Span>
                Profile
                </Span>
            </StyledLink>
            <StyledLink to={"/register"}>
                <Span>
                Register
                </Span>
            </StyledLink>
            <AuthNav />
            </Bar>
        );
    };
const Bar = styled.div`
    justify-content: space-around;
    font-family: "Spectral";
    font-size: 20px;
    display: flex;
    padding: 15px 15px;
    background-color: #d90429;
    /* border-bottom: outset 2px #ef233c; */
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #edf2f4;
    &:hover {
    color: #8d99ae;
    transition: 0.5s;
    }
    &.active {
    color: #2b2d42;
    }
`;

const Span = styled.span`
    font-weight: bold;
`;

const Image = styled.img`
    height:60px;
    width:70px;
`

export default Header