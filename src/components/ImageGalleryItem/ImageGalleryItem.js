import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      images: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <Item>
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.modalToggle}
          height="250px"
        />
        <Modal
          isOpen={isModalOpen}
          isClose={this.modalToggle}
          url={largeImageURL}
          tags={tags}
        />
      </Item>
    );
  }
}
