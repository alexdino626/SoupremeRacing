import styled from "styled-components";

const RegisterButton = ({ handleClick, disabled, subStatus }) => (
    <Wrapper disabled={disabled} onClick={handleClick}>
        {subStatus === "pending" && (
        <Loading>
            <div></div>
            <div></div>
        </Loading>
        )}
        {subStatus === "idle" && <span>Register</span>}
    </Wrapper>
    );
        
const Wrapper = styled.button`
    background: #2b2d42;
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
    export default RegisterButton