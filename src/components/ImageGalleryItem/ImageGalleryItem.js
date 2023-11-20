import { useState } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = images => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(prevIsOpen => !prevIsOpen);
  }
      const {
        images: { webformatURL, tags, largeImageURL },
  } = images;
  
  return (
    <Item>
      <img
        src={webformatURL}
        alt={tags}
        onClick={modalToggle}
        height="250px"
      />
      <Modal
        isOpen={isModalOpen}
        isClose={modalToggle}
        url={largeImageURL}
        tags={tags}
      />
    </Item>
  );
}
