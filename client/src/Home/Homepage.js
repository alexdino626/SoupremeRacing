import styled from "styled-components"
import Logo from "../assets/Soupreme-racing.png"


const Homepage = () => {
    return(
    <Wrapper>
        <Image src={Logo} alt="Soup on wheels Logo" />
        <Title>Soupreme Racing</Title>
        <Slogan>F1 Racing News, Stats and More</Slogan>
    </Wrapper>
    )
}
const Title = styled.h1`
    font-size: 60px;

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height:600px;
    width:700px;
`
const Slogan = styled.div`
    margin-top:10px;
    font-size: 25px;
`

export default Homepage