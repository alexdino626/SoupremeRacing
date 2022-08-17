import styled from "styled-components";
import { useState, useEffect } from "react";



const TeamsRankings = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("/rankings/teams",{
            headers : { 
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((json) => {
            setTeam(json.data);
        })
        .catch((err)=> console.log(err))
    }, []);
    return(
    <Wrapper>
        <h1>Constructors Cup Rankings</h1>
        <Teams>
            {team.map((x) => {
                return(
                    <>
                    <Content>
                        <Team>
                            <Name>Name: {x.name}</Name>
                            <Points>Current Points:{x.points}</Points>
                        </Team>
                    </Content>
                    </>
                )
            })}
        </Teams>
    </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Teams = styled.div`
`

const Content = styled.div`
`

const Team = styled.div`
    margin-top: 15px;
    box-shadow: 3px 10px 10px -2px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 3px 10px 10px -2px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 3px 10px 10px -2px rgba(0, 0, 0, 0.7);
    border: solid 1px lightgrey;
    border-radius: 20px;
    background-color: #2b2d42;
    width: 800px;
    height: 110px;
    color: white;
    text-decoration: none;
    font-size: 32px;
`

const Name = styled.div`
margin-top: 10px;
margin-left: 10px;
`

const Points = styled.div`
margin-top: 10px;
margin-left: 10px;
`

export default TeamsRankings