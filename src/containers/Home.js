import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from './Body';
import Header from '../components/Header';
import { searchSong, reset } from '../actions/mainActions';

class Home extends Component {
    componentDidMount(){
        this.searchTheSong();
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.match.url !== this.props.match.url){
            this.searchTheSong();
        }
    }

    searchTheSong(){
        const { match } = this.props;
        if (match != null && match.params.artist != null && match.params.song != null) {
            this.props.searchSong(match.params.artist, match.params.song, this.props.main.local);
        } else {
            this.props.reset();
        }
    }

    render() { 
        return (<div>
                    <Header />
                    <Body />
                </div> 
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        main: state.main
    }
}

const mapDispatchToProps = (distpatch) => {
    return {
        searchSong: (artist, song) => {
            distpatch(searchSong(artist, song));
        },
        reset: () => {
            distpatch(reset());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);