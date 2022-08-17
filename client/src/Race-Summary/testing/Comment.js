import { useState } from "react";
// import AddComment from "./AddComment";
// import ReplyContainer from "./ReplyContainer";
import DeleteModal from "./DeleteModal";
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";


const Comment = ({
    commentData,
    // updateScore,
    // updateReplies,
    editComment,
    commentDelete,
    setDeleteModalState,
}) => {
    // const [replying, setReplying] = useState(false);
    // const [time, setTime] = useState("");
    // const [vote, setVoted] = useState(false);
    // const [score, setScore] = useState(commentData.score);
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState(commentData.content);
    const [deleting, setDeleting] = useState(false);

    const updateComment = () => {
        editComment(content, commentData.id, "comment");
        setEditing(false);
    };

    const deleteComment = (id, type) => {
        const finalType = type !== undefined ? type : "comment";
        const finalId = id !== undefined ? id : commentData.id;
        commentDelete(finalId, finalType, commentData.id);
        setDeleting(false);
    };

    return (
        <div
        >
            <div>
                <div>
                    <CommentHeader
                    commentData={commentData}
                    // setReplying={setReplying}
                    setDeleting={setDeleting}
                    setDeleteModalState={setDeleteModalState}
                    setEditing={setEditing}
                    // time={time}
                    />
                    {!editing ? (
                    <div>{commentData.content}</div>
                    ) : (
                    <textarea
                        value={content}
                        onChange={(e) => {
                        setContent(e.target.value);
                        }}
                    />
                    )}
                    {editing && (
                    <button onClick={updateComment}>
                        update
                    </button>
                    )}
                </div>
            <CommentFooter
                // vote={vote}
                // setVoted={setVoted}
                // score={score}
                // setScore={setScore}
                // updateScore={updateScore}
                commentData={commentData}
                // setReplying={setReplying}
                setDeleting={setDeleting}
                setDeleteModalState={setDeleteModalState}
                setEditing={setEditing}
            />{" "}
            </div>    
            {deleting && (
            <DeleteModal
                setDeleting={setDeleting}
                deleteComment={deleteComment}
                setDeleteModalState={setDeleteModalState}
            />
            )}
        </div>
    );
};

export default Comment