import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lyrics from '../components/Lyrics'; 
import Welcome from '../components/Welcome';
import NotFound from '../components/NotFound';
import Searching from '../components/Searching';

class Rightbody extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        if (this.props.main.searching === true) {
            return (<Searching />)
        }
        else if (this.props.main.found){ // lyrics found
            return ( <Lyrics artist={this.props.main.artist} song={this.props.main.song} lyrics={this.props.main.lyrics} /> )
        } 
        else if (this.props.main.found === false){ // haven't search yet
            return (<NotFound /> )
        }
        else { // not found
            return ( <Welcome/> )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        main: state.main
    }
}
 
export default connect(mapStateToProps)(Rightbody);