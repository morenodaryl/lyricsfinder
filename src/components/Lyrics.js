import React from 'react';

const Lyrics = (props) =>
    <div className="right-body text-center mb-5">
        <h1 className="mt-4">{props.artist.toUpperCase()}</h1>
        <h3 className="mt-2">{props.song.toUpperCase()}</h3>
        <div className="mt-2 lyrics">
            {props.lyrics}
        </div>
    </div> 
 
export default Lyrics;