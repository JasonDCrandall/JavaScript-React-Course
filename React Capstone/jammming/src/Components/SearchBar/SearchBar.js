import React from 'react';

export class SearchBar extends React.Component {
    render() {
        return (
            <div class="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button claas="SearchButton">SEARCH</button>
            </div>
        )
    }
}