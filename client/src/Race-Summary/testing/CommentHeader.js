import CommentBtn from "./CommentBtn";

const CommentHeader = ({commentData, setDeleting, setDeleteModalState, setEditing, time}) => {
    return (
        <div>
            <div ></div>
            <div>{commentData.username}</div>
            {commentData.currentUser ? <div>you</div> : ""}
            <div>{`${time} ago`}</div>
            <CommentBtn
            commentData={commentData}
            // setReplying={setReplying}
            setDeleting={setDeleting}
            setDeleteModalState={setDeleteModalState}
            setEditing={setEditing}
            />
        </div>
    );
};

export default CommentHeader