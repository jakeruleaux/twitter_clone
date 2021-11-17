import React, { useState } from 'react';
import HashTagView from './HashTagView';
import TweetView from './TweetView';

const TweetFeedContainer = () => {
    return(
        <div>
            <h1>Tweet Feed</h1>
            <div>
                <input placeholder="Search by keyword"></input>
                <TweetView />
                <HashTagView />
            </div>
        </div>
    );
};

export default TweetFeedContainer;