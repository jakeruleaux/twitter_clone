import React, { useState } from 'react';
import Styles from '../Styles/TweetFeedContainer.css';
import HashTagView from './HashTagView';
import TweetView from './TweetView';
import SearchIcon from '../Icons/SearchIcon';

const TweetFeedContainer = () => {
    return(
        <div>
            <h1 className="title">Tweet Feed</h1>
            <div>
                <div className="inputContainer">
                    <SearchIcon />
                    <input className="searchInput" placeholder="Search by keyword"/>
                </div>
                <TweetView />
                <HashTagView />
            </div>
        </div>
    );
};

export default TweetFeedContainer;