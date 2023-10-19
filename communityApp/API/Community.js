import { ACCOUNT_ID, TOKEN, POSTS, CREATE } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';
import { COMMUNITY_FETCH_URL } from "../constants/Database";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return await postRequest(endpoint, message);
}

/**
 * Gets community posts for the community discussion forum.
 * 
 * @param {string} token Access token for the session
 * @param {Number} id Account ID
 * @returns Json object containing the community posts
 */
export async function getCommunityPosts() {
    var account;
    var token;

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [ACCOUNT_ID]: accNum,
        [TOKEN]: token,
    };

    const endpoint = path + POSTS; // community/posts
    console.log("End: ", endpoint)
    return await postRequest(endpoint, message);
}
