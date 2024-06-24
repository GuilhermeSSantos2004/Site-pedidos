import React, { useState } from 'react';
import Modal from 'react-modal';
import './CommentsSection.css'; // Arquivo CSS para estilização
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';
import avatar5 from './assets/avatar5.jpg';
import avatar6 from './assets/avatar6.jpg';

const CommentsSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedComment, setSelectedComment] = useState({});

    const openModal = (comment) => {
        setSelectedComment(comment);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedComment({});
        setModalIsOpen(false);
    };

    return (
        <div className="commentsSection">
            <h2 className="title__comments">Comentários da galera</h2>
            <div className="comments">
                {/* Aqui vão os comentários */}
                <div className="comment" onClick={() => openModal({ author: 'João da Silva', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel est blandit, id rhoncus tortor mollis.' })}>
                    <img src={avatar1} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Um sabor perfeitamente equilibrado que aquece o coração</p>
                    </div>
                </div>
                <div className="comment" onClick={() => openModal({ author: 'Maria Oliveira', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' })}>
                    <img src={avatar2} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Uau, que prato incrível! Nunca provei nada igual.</p>
                    </div>
                </div>
                <div className="comment" onClick={() => openModal({ author: 'Carlos Souza', text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.' })}>
                    <img src={avatar3} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Delicioso, voltarei com certeza!</p>
                    </div>
                </div>
                <div className="comment" onClick={() => openModal({ author: 'Ana Paula', text: 'Vestibulum id ligula porta felis euismod semper.' })}>
                    <img src={avatar4} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Excelente atendimento e sabor maravilhoso.</p>
                    </div>
                </div>
                <div className="comment" onClick={() => openModal({ author: 'Pedro Henrique', text: 'Curabitur blandit tempus porttitor.' })}>
                    <img src={avatar5} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Altamente recomendado!</p>
                    </div>
                </div>
                <div className="comment" onClick={() => openModal({ author: 'Clara Mendes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}>
                    <img src={avatar6} alt="Avatar" className="avatar" />
                    <div className="comment-content">
                        <p className="comment-text">Ótima experiência, sabor incrível!</p>
                    </div>
                </div>
                {/* Adicione mais comentários conforme necessário */}
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="comment-modal"
                overlayClassName="comment-modal-overlay"
            >
                <div className="modal-content">
                    <p className="modal-text">{selectedComment.text}</p>
                    <p className="modal-author">{selectedComment.author}</p>
                    <button onClick={closeModal} className="modal-close-button">Fechar</button>
                </div>
            </Modal>
        </div>
    );
};

export default CommentsSection;
