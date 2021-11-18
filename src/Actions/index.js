import { FETCH_TWEETS } from "./types";

// url
// https://api.twitter.com/1.1/search/tweets.json

// GET https://api.twitter.com/1.1/collections/list.json?screen_name=twittermusic&count=1



export const fetchTweets =() => async dispatch => {
    const response = await ('https://api.twitter.com/1.1/search/tweets.json');

    dispatch({ type: FETCH_TWEETS, payload: response.data });
};