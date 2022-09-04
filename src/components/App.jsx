import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { FetchSearch } from "API";
import Notiflix from 'notiflix';

const perPage = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [isShowMore, setIsShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {     
      if (!value) return;
      setLoading(true);
      FetchSearch(value, page)
      .then(data => {
        setImages(prev => [...prev, ...data.hits]);
        setLoading(false);

        if(data.total > perPage){
          setIsShowMore( true )
        } else if(data.total - images.length <= perPage){
          setIsShowMore( false )
        }
      })  
      .catch(onApiError);
    
  },[value, page]);

  const handleSubmit = value => {
    setImages([]);
    setValue(value);
    setPage(1)
  }

  const onApiError = () => {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    setLoading(false)
    setShowModal(false)
  };

  const showMore = () => {
    setPage(prev => prev + 1);
    canShowMore();
  };

  const canShowMore = () => {
    if(images.total > perPage){
      setIsShowMore(true)
    } else if(images.total <= images.length + perPage){
      setIsShowMore(false)
      Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`)
    }
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  const onImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  return(
    <>
      <Searchbar onSubmit={handleSubmit}/>

      <ImageGallery 
        images={images}
        value={value}
        onClick={onImageClick}
      />

      {loading && <Loader />}

      {isShowMore && <LoadMoreBtn onShowMore={showMore}/>}

      {showModal && <Modal 
        onClose={toggleModal}
        largeImageURL={largeImageURL}
      />}

      <GlobalStyle/>
    </>
  )
}