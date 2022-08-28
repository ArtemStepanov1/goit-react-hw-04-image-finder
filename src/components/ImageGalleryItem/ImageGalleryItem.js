import {
    ImageGalleryItemEl,
    ImageGalleryItemImg,
} from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
    
    return(  

        <ImageGalleryItemEl >
            <ImageGalleryItemImg id={id} src={webformatURL} alt={tags} />
        </ImageGalleryItemEl>

    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };