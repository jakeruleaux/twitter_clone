import { FETCH_TWEETS } from "./types";

// url
// https://api.twitter.com/1.1/search/tweets.json

export const fetchTweets =() => async dispatch => {
    const response = await ();

    dispatch({ type: FETCH_TWEETS, payload: response.data });
};