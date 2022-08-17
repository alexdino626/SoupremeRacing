const { useState } = require("react");
const { default: styled } = require("styled-components");

const AddComment = ({ buttonValue, addComments }) => {
    const [comment, setComment] = useState("");

    const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
        id: Math.floor(Math.random() * 100) + 5,
        content: replyingToUser + comment,
        createdAt: new Date(),
        score: 0,
        username: "juliusomo",
        currentUser: true,
        replies: [],
    };

    addComments(newComment);
    setComment("");
    };

    return (
        <div>
            <div></div>
            <textarea
            placeholder="Add a comment"
            value={comment}
            // onChange={(e) => {
            //     setComment(
            //     e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
            //     );}}
            />
            <div>
            <div></div>
            <button onClick={clickHandler}>
                {buttonValue}
            </button>
            </div>
        </div>
        );

};
export default AddComment
