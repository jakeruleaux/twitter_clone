import React, { useState } from 'react';
import HashTagView from './HashTagView';
import TweetView from './TweetView';

const TweetFeedContainer = () => {
    return(
        <div>Container 
            <TweetView />
            <HashTagView />
        </div>
    );
};

export default TweetFeedContainer;