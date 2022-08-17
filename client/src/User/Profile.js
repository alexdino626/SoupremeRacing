import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const defaultUser = {userName:"", email:""};

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(defaultUser);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`/user/${userId}`,{
            headers : { 
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((json) => {
            if (json.status === 200) {
                setCurrentUser(json.data);
            }
        })
        .catch((err)=> console.log(err))
    }, []);

    const updateUser = () => {
        console.log(currentUser);
        fetch(`/user`,{
            method: 'PATCH',
            headers : { 
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currentUser),
        })
        .then((res) => res.json())
        .catch((err)=> console.log(err))
    }

    const deleteUser = () => {
        fetch(`/user`,{
            method: 'DELETE',
            headers : { 
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
            }),
        })
        .then((res) => res.json())
        .then(() => {setCurrentUser(defaultUser)})
        .catch((err)=> console.log(err))
    }

    return(
        <Wrapper>
        <h1>User Info</h1>
        <Users>
            <Content>
                <User>
                    <label>
                        User Name:
                        <UsernameInput value={currentUser.userName} onChange={input => setCurrentUser({ ...currentUser, userName: input.target.value })} />
                    </label>
                    <br/>
                    <label>
                        Email:
                        <EmailInput value={currentUser.email} onChange={input => setCurrentUser({...currentUser, email: input.target.value})} />
                    </label>
                </User>
            </Content>
            <button onClick={updateUser}>update</button>
            <button onClick={deleteUser}>delete</button>
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