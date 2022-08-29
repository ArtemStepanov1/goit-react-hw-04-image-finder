import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryEl } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({images, onClick}) => {

    return(
        
        <ImageGalleryEl>

            {images.map(({ id, webformatURL, tags, largeImageURL }) => (

                <ImageGalleryItem 
                    key={id}
                    id={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    onClick={() => onClick(largeImageURL)}
                />

            ))}

        </ImageGalleryEl>
    )
}

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string,
          tags: PropTypes.string,
        })
    ),
};