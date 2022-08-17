import { useEffect, useState } from "react"
import styled from "styled-components"


const CommentSection = () => {
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();

        fetch("/comments", {
            method: "POST",
            body: JSON.stringify({
                userName: username,
                text: text,
                }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json" 
            },
            })
            .catch((err)=> console.log(err))

            .then((res) => res.json())
            .then((data) => {
                if (data.status === 400) {
                    alert(data.message);
                    } else {
                    window.location.href = "/racesummary";
                    }
            })
    }

    <div>
        <p>Comments</p>
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <TextArea
            onChange={handleChange}
            value={comment}
            placeholder="Write your comment"
            />
            <Button 
            type={"submit"}
            disabled={comment === ""}
            >
                {""}
                Post{""}
            </Button>
        </form>
    </div>
};
const TextArea = styled.input`
    width:100%;
    border-radius: 5px;
`
const Button = styled.button`
    width: 20%;
    height: 52%;
`


export default CommentSection