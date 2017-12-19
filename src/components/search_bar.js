import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(term) {
        this.setState({term});
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={e => this.onChangeInput(e.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
