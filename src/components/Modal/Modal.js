import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
    width: '70%',
    height: '90%',
    overflow: 'hidden',
  },
};

ReactModal.setAppElement('#root');
export const Modal = ({ isOpen, isClose, url, tags }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Large image"
    >
      <img src={url} alt={tags} height="100%" />
    </ReactModal>
  );
};
