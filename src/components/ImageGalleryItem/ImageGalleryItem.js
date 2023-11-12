import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
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
          onClick={this.openModal}
          height="250px"
        />
        <Modal
          isOpen={isModalOpen}
          isClose={this.closeModal}
          url={largeImageURL}
          tags={tags}
        />
      </Item>
    );
  }
}
