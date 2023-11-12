import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(item => (
        <ImageGalleryItem key={item.id} images={item} />
      ))}
    </List>
  );
};
