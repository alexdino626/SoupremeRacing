import { useState, useEffect } from "react";
import styled from "styled-components";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [load, setLoad] = useState(false);
    const [slice, setSlice] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("/comments");
            const json = await data.json();
            setComments(json.data);
            setLoad(true);
            setSlice(4);
            return json;
        };
        fetchData().catch((err) => {
            throw new Error(err)
        });
    },[])
    if (load === false) {
        return <Loading>loading</Loading>;
    }

    const handleClick = () => {
        if (slice < comments.length) {
        setSlice(slice + 4);
        } else {
        window.scrollTo(0, 0);
        }
    };


    return(
<>
    <Wrapper>
        <Title>Discussion Section</Title>
        <CommentsWrap>
        {comments.slice(0, slice).map((x) => {
            return (
            <>
                {/* <LinkItem to={`/user/${x._id}`}> */}
                <Content>
                    {comments.body}
                </Content>
                {/* </LinkItem> */}
            </>
            );
        })}
        </CommentsWrap>
        {slice < comments.length ? (
        <Button onClick={handleClick}>Load more</Button>
        ) : (
        <Button onClick={handleClick}>Go back at top</Button>
        )}
    </Wrapper>
    </>

    )
}

const Wrapper = styled.div`
    font-family: "Spectral";
    padding-top: 20px;
    padding: 10px;
    color: black;
`;

const Title = styled.div`
    font-weight: bold;
    font-style: italic;
    font-size: 25px;
    padding-bottom: 40px;
`;

const CommentsWrap = styled.div`
`

const Button = styled.button`
    margin: 50px 575px;
    font-size: 25px;
    width: 200px;
    background-color: #8d99ae;
    color: white;
    border: outset 5px #1c77b0;
    padding: 20px;
    border-radius: 20px;
    &:hover {
        background-color: #2b2d42;
        border: outset 5px #4faae3;
        cursor: pointer;
    }
`

const Content = styled.div`
    width: 175px;
    padding: 15px;
`;

const Loading = styled.div`
    font-family: "Spectral";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    font-size: 20px;
    color: black;
    letter-spacing: 4px;
    text-transform: uppercase;
`

export default Comments