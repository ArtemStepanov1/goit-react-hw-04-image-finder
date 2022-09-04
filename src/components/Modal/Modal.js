import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
    ModalBackdrop,
    ModalContent
} from "./Modal.styled";

export const Modal = ( {onClose, largeImageURL} ) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        
        return () => {
            window.removeEventListener('keydown', handleKeydown);

      }
    });

    const handleKeydown = e => {
        if(e.code === 'Escape'){
            onClose();
        }
    }

    const handleBackdropClick = e => {
        if(e.currentTarget === e.target){
            onClose();
        }
    }

    return(
        <ModalBackdrop onClick={handleBackdropClick}>
            <ModalContent >
                <img src={largeImageURL} alt="" />
            </ModalContent>
        </ModalBackdrop>
    )
    
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};