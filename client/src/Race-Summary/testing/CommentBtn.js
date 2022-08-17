import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import { MdMode as EditIcon } from "react-icons/md";

const CommentBtn = ({commentData, setDeleting, setDeleteModalState, setEditing}) => {

    // let counter = false;
    // const showAddComment = () => {
    //     counter ? setReplying(false) : setReplying(true);
    //     counter = true;
    // };

    // delete comment
    const showDeleteModal = () => {
        setDeleting(true);
        setDeleteModalState(true);
    };

    // edit comment
    const showEditComment = () => {
        setEditing(true);
    };

    return (
        <div>
            <button
            onClick={showDeleteModal}
            >
            <DeleteIcon /> Delete
            </button>
            <button
            onClick={showEditComment}
            >
            <EditIcon /> Edit
            </button>
        </div>
        );
};

export default CommentBtn