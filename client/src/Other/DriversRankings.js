import styled from "styled-components";
import { useState, useEffect } from "react";


const DriversRankings = () => {
    const [driver, setDriver] = useState([]);

    useEffect(() => {
        fetch("/rankings/drivers",{
            headers : {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((json) => {
            setDriver(json.data);
        })
        .catch((err)=> console.log(err))
    }, []);

    return(
    <Wrapper>
        <h1>World Championship Rankings</h1>
        <Drivers>
            {driver.map((x) => {
                return(
                    <>
                    <Content>
                        <Driver>
                            <Name>Name: {x.name}</Name>
                            <Points>Current Points:{x.points}</Points>
                        </Driver>
                    </Content>
                    </>
                )
            })}
        </Drivers>
    </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Drivers = styled.div`
`

const Content = styled.div`
`

const Driver = styled.div`
`

const Name = styled.div`
`

const Points = styled.div`
`

export default DriversRankings