import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";


const Profile = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const userId = useParams();

    useEffect(() => {
        fetch(`/user/${userId}`,{
            headers : { 
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((json) => {
            setCurrentUser(json.data);
        })
        .catch((err)=> console.log(err))
    }, []);

    return(
        <Wrapper>
        <h1>Constructors Cup Rankings</h1>
        <Users>
            {currentUser.map((x) => {
                return(
                    <>
                    <Content>
                        <User>
                            <UsernameInput>Username: {x.userName}</UsernameInput>
                            <EmailInput>Email:{x.email}</EmailInput>
                        </User>
                    </Content>
                    </>
                )
            })}
        </Users>
    </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Users = styled.div`
`

const Content = styled.div`
`

const User = styled.form`
`

const UsernameInput = styled.input`
`

const EmailInput = styled.input`
`

export default Profile