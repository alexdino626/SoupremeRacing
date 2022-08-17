const DeleteModal = ({ setDeleting, deleteComment, setDeleteModalState }) => {
    const cancelDelete = () => {
        setDeleting(false);
        setDeleteModalState(false);
    };

    const deleteBtnClick = () => {
        deleteComment();
        setDeleteModalState(false);
    };

    return (
        <div>
            <div>
            <div></div>
            <div>
                Are you sure you want to delete this comment? This will remove the
                comment and can't be undone.
            </div>
            <div>
                <button onClick={cancelDelete}>
                No, cancel
                </button>
                <button onClick={deleteBtnClick}>
                Yes, delete
                </button>
            </div>
            </div>
        </div>
    );
};

export default DeleteModal