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

export default DriversRankings