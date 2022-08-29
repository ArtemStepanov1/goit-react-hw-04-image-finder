import {
    ImageGalleryItemEl,
    ImageGalleryItemImg,
} from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, onClick}) => {
    
    return(  

        <ImageGalleryItemEl onClick={onClick}>
            <ImageGalleryItemImg src={webformatURL} alt={tags} />
        </ImageGalleryItemEl>

    )
}

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };