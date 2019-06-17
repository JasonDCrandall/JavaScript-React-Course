import React from 'react';
import '../Track/Track';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
                <Track />
                <Track />
            </div>
        )
    }
}