import { ACCOUNT_ID, TOKEN, POSTS } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';
import { COMMUNITY_FETCH_URL } from "../constants/Database";

const path = 'community/';

/**
 * Get the list of available communities for the user.
 * It does not require access token for authentication since it will be used for signup the process.
 * 
 * @returns Json object containing the list of available communities
 */
export async function getCommunities() {
    const message = {
        // Empty message will be used for postRequest() function since it requires some object
    };

    const endpoint = path + COMMUNITY_FETCH_URL; // community/fetch
}

/**
 * Gets community posts for the community discussion forum.
 * 
 * @param {*} token Access token for the session
 * @param {*} id Account ID
 * @returns Json object containing the community posts
 */
export async function getCommunityPosts(token, id) {
    const message = {
        [ACCOUNT_ID]: id,
        [TOKEN]: token
    };

    const endpoint = path + POSTS; // community/posts
    return await postRequest(endpoint, message);
}
