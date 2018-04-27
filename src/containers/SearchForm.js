import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: this.props.artist,
            song: this.props.song,
            submitEnabled: false
        }
    }

    componentDidUpdate(previousProps, previousState){
        if (previousProps !== this.props){
            const { match } = this.props;
            if (match != null && match.params.artist != null && match.params.song != null) {
                this.setState({ artist: match.params.artist, song: match.params.song, submitEnabled: true});
            }else{
                this.setState({artist: '', song: ''})
            }
        }
    }

    updateInputValue(event) {
        let {artist, song} = this.state;
        switch (event.target.name) {
            case 'artist':
                artist = event.target.value;
                this.setState({artist});
                break;
            case 'song':
                song = event.target.value;
                this.setState({song});
                break;
            default:
                break;
        }
        if(artist !== "" && song !== ""){
            this.setState({ submitEnabled: true });
        }else{
            this.setState({ submitEnabled: false });
        }
    }

    submitForm(event){
        event.preventDefault();
        if (this.state.artist   !== "" && this.state.song !== "") {
            this.props.history.push('/' + this.state.artist + '/' + this.state.song);
        }
    }

    render() { 
        return (<form onSubmit={this.submitForm.bind(this)}>
                    <input value={this.state.artist} onChange={this.updateInputValue.bind(this)} name='artist' className="form-control" type="text" placeholder="Artist" />
                    <input value={this.state.song} onChange={this.updateInputValue.bind(this)} name='song' className="form-control" type="text" placeholder="Name of the song" />
                    <button type="submit" className="btn btn-light btn-block" disabled={!this.state.submitEnabled}>Search</button>
                </form>
         )
    }
}

export default withRouter(SearchForm);