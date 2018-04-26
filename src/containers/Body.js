import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm'
import { searchSong, reorderHistory } from '../actions/mainActions';
import Rightbody from './RightBody';
import History from './History';

class Body extends Component {

    onHistoryItemclick(index, artist, song) {
        this.props.history.push(`/${artist}/${song}`);
        this.props.reorderHistory(index);
    }

    render() { 
        return ( 
            <div className="container main-container">
                <div className="row justify-content-lg-center ">
                    <div className="col col-md-3 left-side">
                        <SearchForm artist={this.props.main.artist} song={this.props.main.song}/>
                        {this.props.main.history.map( (m,i) => {
                            return <History key={i} index={i} artist={m.artist} song={m.song} onItemClick={this.onHistoryItemclick.bind(this)} />
                        })}
                    </div>
                    <div className="col-md-9 right-side">
                        <Rightbody artist={this.props.main.artist} song={this.props.main.song} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        main: state.main
    }
}

const mapDispatchToProps = (distpatch) => {
    return{
        searchSong: (artist, song) => {
            distpatch(searchSong(artist, song));
        },
        reorderHistory: (index) => {
            distpatch(reorderHistory(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Body));