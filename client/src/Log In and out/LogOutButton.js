import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";

const LogOutButton = ({disabled, subStatus}) => {
    const {logout} = useAuth0();
    return (
        <Wrapper
        disabled={disabled} 
        onClick={()=> logout()}
        variant="danger"
        >
            {subStatus === "pending" && (
            <Loading>
                <div></div>
                <div></div>
            </Loading>
            )}
            {subStatus === "idle" && <span>Log In</span>}
        </Wrapper>
    )
};

const Wrapper = styled.button`
    background: #8d99ae;
    border-color: #ef233c;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: block;
    font-family: "Spectral";
    font-size: 16px;
    font-weight: 600;
    margin: 16px;
    height: 42px;
    text-align: center;
        
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
const Loading = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    top: -21px;
    
div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
        
        &:nth-child(2) {
        animation-delay: -0.5s;
        }
    }
`;
    export default LogOutButton