import { ACCOUNT_ID, COMMUNITY_ID, NAME, GENDER, PHONE, EMAIL, PASSWORD, SALT, TOKEN, FETCH, CREATE, BIRTHDAY, MESSAGE } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const path = 'accounts/';

export async function getAccount(token, id) {
    const message = {
        [ACCOUNT_ID]: id,
        [TOKEN]: token
    };

    const endpoint = path + FETCH; // accounts/fetch
    return await postRequest(endpoint, message);
}

export async function createAccount(communityId, name, birthday, gender, phone, email, password, salt) {
    const message = {
        [COMMUNITY_ID]: communityId,
        [NAME]: name,
        [BIRTHDAY]: birthday,
        [GENDER]: gender,
        [PHONE]: phone,
        [EMAIL]: email,
        [PASSWORD]: password,
        [SALT]: salt
    }

    const endpoint = path + CREATE; // accounts/create
    return await postRequest(endpoint, message);
}

export async function createPost(token, id, text) {
    const message = {
        [ACCOUNT_ID]: id,
        [TOKEN]: token,
        [MESSAGE]: text
    };

    const endpoint = path + 'post'; // account/post
    return await postRequest(endpoint, message);
}