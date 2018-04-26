import React, { Component } from 'react';

class History extends Component {
    onItemClick(e){
        const p = this.props;
        this.props.onItemClick(p.artist, p.song, p.lyrics, p.index);
    }
    render() { 
        return (
        <div className="history mt-2" onClick={this.onItemClick.bind(this)}>
            <p className="song p-0 m-0 ml-2">{this.props.song}</p>
            <p className="artist p-0 m-0 ml-2">{this.props.artist}</p>
        </div> )
    }
}

export default History;