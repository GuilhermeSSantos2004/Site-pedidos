import React, { useState } from 'react';
import Modal from 'react-modal';
import './Comment.css'; // Arquivo CSS para estilização

const Comment = ({ avatar, text, author }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="comment">
            <img src={avatar} alt="Avatar" className="avatar" onClick={() => setModalIsOpen(true)} />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="comment-modal"
                overlayClassName="comment-modal-overlay"
            >
                <div className="modal-content">
                    <img src={avatar} alt="Avatar" className="avatar-modal" />
                    <p className="comment-text">{text}</p>
                    <p className="comment-author">{author}</p>
                    <p className="comment-likes">Curtidas: {likes}</p>
                </div>
            </Modal>

            <button className="like-button" onClick={handleLike}>
                Curtir
            </button>
        </div>
    );
};

export default Comment;
