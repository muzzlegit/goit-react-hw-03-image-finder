import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
//ICONS
import { MdImageSearch } from 'react-icons/md';
//STYLS
import { Header, Input, Button } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQuery = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('🦄 Wow so easy!');
      return;
    }
    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQuery}
          />
        </form>
        <Button type="submit" onClick={this.handleSubmit}>
          <MdImageSearch size="24px" />
        </Button>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
