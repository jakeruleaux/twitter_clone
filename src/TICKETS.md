Ticket for Twitter Clone

1. App should display a title, search, list of tweets, and hashtag container (see mocks) 

2. User should be able to search for tweets by keyword a. Search should be debounced b. Search should only return (5) tweets c. Hashtags found should be added to the hashtag list 

3. Tweets should match the mocks, and include the following: a. Avatar of the author b. Username of the author c. Tweet content d. Clickable URL of the tweet e. Clickable hashtag 

4. User should be able to click a “Load More” button to load additional tweets a. It should append to the list of tweets b. It should only add (5) additional tweets each click c. It should continue to add tweets until the API does not return more i. Hint: use the Twitter API query param max_id d. If unique hashtags are found they should be appended to the hashtag list 

5. User should be able to filter tweets by clicking on a hashtag a. Filter should be able to be set and unset b. When set, the list of tweets should only include those with a matching hashtag c. When unset, the list of tweets should be reset to its state before filtering
