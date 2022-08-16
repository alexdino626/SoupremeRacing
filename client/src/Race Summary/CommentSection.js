import { useEffect, useState } from "react"
import styled from "styled-components"

const CommentSection = () => {
    const [comment, setComment] = useState();


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch(`/comments/${comId}`);
    //         const json = await data.json();
    //         setComment(json.data);
    //         return json;
    //     };
    //     fetchData().catch((err) => {
    //         throw new Error(err)
    //     });
    // },[])


    <div>
        <AddComment>
            <InputComment type="text" placeholder="Comment..." ></InputComment>
            <Button>Post</Button>
        </AddComment>
        <ListOfComments></ListOfComments>
    </div>
};
const ListOfComments = styled.div`
`
const InputComment = styled.input`
`
const Button = styled.button`
`
const AddComment = styled.div`
`

export default CommentSection