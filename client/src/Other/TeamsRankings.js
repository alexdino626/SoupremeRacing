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
`

const Name = styled.div`
`

const Points = styled.div`
`

export default TeamsRankings