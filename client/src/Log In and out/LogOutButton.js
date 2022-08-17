import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";

const LogOutButton = () => {
    const {logout} = useAuth0();
    return (
        <Wrapper
        onClick={()=> logout()}
        variant="danger"
        >
            Log Out
        </Wrapper>
    )
};

const Wrapper = styled.button`
    background: #2b2d42;
    border-color: #2b2d42;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: block;
    font-family: "Spectral";
    font-size: 16px;
    font-weight: 600;
    margin: 0px 0px 0px 0px;
    height: 32px;
    width: 90px;
    `
export default LogOutButton