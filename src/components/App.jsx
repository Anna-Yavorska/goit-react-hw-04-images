import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { loadImages } from 'api';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const data = await loadImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setQuantity(data.totalHits);
      } catch (error) {
        setError(true);
        toast.error('Please, try to reload the page');
      } finally {
        setIsLoading(false);
      }
    };
    
    getImages();
  }, [page, query, randomIndex]);

  const search = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setRandomIndex(Math.random());
  };

  const findMore = () => quantity - page * 12;

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <div>
      <Searchbar onSubmit={search} />
      {isLoading && <Loader />}
      {images.length > 0 && !error && <ImageGallery images={images} />}
      {findMore() > 0 && <Button onClick={handleLoadMore} />}
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
