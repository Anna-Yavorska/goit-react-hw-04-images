import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { loadImages } from 'api';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    query: '',
    error: false,
    quantity: 0,
    randomIndex: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, randomIndex } = this.state;
    if (
      prevState.query !== query ||
      prevState.page !== page ||
      prevState.randomIndex !== randomIndex
    ) {
      try {
        this.setState({ isLoading: true, error: false });
        const data = await loadImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          quantity: data.totalHits,
        }));
      } catch (error) {
        this.setState({ error: true });
        toast.error('Please, try to reload the page');
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  search = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
      randomIndex: Math.random(),
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  findMore = () => {
    return this.state.quantity - this.state.page * 12;
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.search} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {this.findMore() > 0 && <Button onClick={this.handleLoadMore} />}
        <GlobalStyle />
        <Toaster />
      </div>
    );
  }
}
