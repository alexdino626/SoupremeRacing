// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
// import CommentSection from "./CommentSection";
// import CommentForm from "./CommentForm";
// import Comments from "./Comments";
import Comment from "../test/Comment";


const RaceSummary = () => {


    
return(
    <Wrapper>
        <Title>A Quick Summary of the Hungarian Grand Prix 2022 Race Day</Title>
        <Text> 
        Max Verstappen won the 2022 Hungarian Grand Prix from P10 with pitch-perfect execution of 
        Red Bull’s strategy, while Lewis Hamilton finished second ahead of his pole-sitting Mercedes
        team mate George Russell.
        </Text>
        <Text> 
        Russell led on soft tyres and pitted on Lap 15, soft-shod Verstappen pitting from P5 a lap
        later to force Carlos Sainz to pit from the lead. Charles Leclerc meanwhile stayed out in the
        lead, extending his first stint until Lap 22. Russell led again but was passed by Sainz on Lap 31.
        So, from P4, Verstappen forced the issue with a second stop for mediums on Lap 39.
        </Text>
        <Text>
        Crucially, with that stop, Verstappen had pulled off an undercut on Sainz and had an advantage on Leclerc
        too, the Monegasque starting on mediums to swap for the same compound after a lengthy first stint – and from
        the lead pitting from hard tyres well after Verstappen. The Dutchman cleared his rival with ease soon after that
        and it became clear that hard tyres weren’t the answer; Leclerc falling to P6 as he switched again for softs while
        Verstappen won by 7.8s.
        </Text>
        <Text>
        And that was despite a 360-degree spin that almost cost Verstappen at the final corner and forced him to make another
        overtake on Leclerc. Hamilton started seventh on mediums, cleared the Alpines, pitted for mediums and stayed out long
        to ensure he could finish the race on softs, which ensured he could pass the likes of Sainz and then Russell to finish second.
        </Text>
        <Text>
        Having started on pole, Russell couldn’t convert that to a win, his soft-medium-medium strategy seeing him end up third
        ahead of Sainz, who was cost by slow pit stops to finish fourth behind the Mercedes. Sainz still held off Sergio Perez by
        a second, while Leclerc couldn’t use his soft tyres to pass Perez and ended up sixth behind the Red Bull on another
        disappointing day for the Scuderia. Lando Norris beat the Alpines to seventh, while Fernando Alonso finished P8 at the
        expense of team mate Esteban Ocon. Sebastian Vettel scrapped with Lance Stroll to lead his Canadian team mate for P10.
        </Text>
        <Text>
        Pierre Gasly took P12, comfortably ahead of 13th-place Zhou Guanyu. Mick Schumacher was next, while Daniel Ricciardo
        could only manage 15th thanks to a five-second penalty ahead of the other Haas of Kevin Magnussen – who was involved
        in a minor collision early on. Williams were next, Alex Albon finishing ahead of Nicholas Latifi in P17 and P18 respectively,
        while a spin saw Yuki Tsunoda finish 19th and last for AlphaTauri. Valtteri Bottas stopped five laps from the end to
        bring out a Virtual Safety Car and a last-place classification for the Alfa Romeo.
        </Text>
        
        {/* <CommentForm
        currentUserId = {user}
        />
        <Comments /> */}
        {/* <CommentSection /> */}
    </Wrapper>

)
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 23px;
    letter-spacing: .2px;
    padding-top: 20px;
    padding: 10px;
    color: black;
`;

const Title = styled.h1`
    font-size: 37px;
    font-weight: 600px;
    margin-bottom: 10px;
`
const Text = styled.p`
    font-size: 18px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

export default RaceSummary