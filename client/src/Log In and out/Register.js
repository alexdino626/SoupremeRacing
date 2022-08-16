import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegisterButton from "./RegisterButton";
import RegisterInput from "./RegisterInput"

const Register = () => {
    const initialState = {
        userName: "",
        password: "",
        email: "",
    }

    const [formData, setFormData] = useState(initialState);
    const [disabled, setDisabled] = useState(true);
    const [subStatus, setSubStatus] = useState("idle");

    useEffect(() => {
    Object.values(formData).includes("") || formData.order === "undefined"
        ? setDisabled(true)
        : setDisabled(false);
    }, [formData, setDisabled]);
    
    const handleChange = (value, name) => {
        setFormData({ ...formData, [name]: value });
        };
        const navigate = useNavigate();

        const handleClick = (ev) => {
            ev.preventDefault();
            setSubStatus("pending");
            fetch("/register", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((json) => {
                const { status, error } = json;
                if (status === "success") {
                    setSubStatus("confirmed");
                    navigate("/")
                } else if (error) {
                    setSubStatus("error");
                    
                }
                });
            };
    return(
        <Wrapper>
            <FormGroup>
                <RegisterInput 
                name="userName"
                type="text"
                placeholder="User name"
                handleChange={handleChange}/>
                <RegisterInput
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange} 
                />
                <RegisterInput 
                name="email"
                type="text"
                placeholder="Email"
                handleChange={handleChange}
                />
                <RegisterButton 
                formData={formData}
                handleClick={handleClick}
                disabled={disabled}
                subStatus={subStatus}
                
                />
            </FormGroup>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    padding: 0 20px;
`;

const FormGroup = styled.div`
`;

export default Register