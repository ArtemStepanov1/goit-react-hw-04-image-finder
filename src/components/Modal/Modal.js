import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { 
    ModalBackdrop,
    ModalContent
} from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = e => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if(e.currentTarget === e.target){
            this.props.onClose();
        }
    }

    render() {

        const { largeImageURL } = this.props;

        return(createPortal(

            <ModalBackdrop onClick={this.handleBackdropClick}>
                <ModalContent >
                    <img src={largeImageURL} alt="" />
                </ModalContent>
            </ModalBackdrop>,
        
        modalRoot)
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};