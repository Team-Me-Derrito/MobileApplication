import { ACCOUNT_ID, TOKEN, POSTS } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const path = 'community/';

export async function getCommunityPosts(token, id) {
    const message = {
        [ACCOUNT_ID]: id,
        [TOKEN]: token
    };

    const endpoint = path + POSTS; // community/posts
    return await postRequest(endpoint, message);
}
