import { BASE_URL, API_KEY, ACCOUNT_ID, COMMUNITY_ID, NAME, AGE, GENDER, PHONE, EMAIL, PASSWORD, SALT, TOKEN, OPTION, FETCH, CREATE } from '../constants/Database.js';
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

export async function createAccount(communityId, name, age, gender, phone, email, password, salt) {
    const message = {
        [COMMUNITY_ID]: communityId,
        [NAME]: name,
        [AGE]: age,
        [GENDER]: gender,
        [PHONE]: phone,
        [EMAIL]: email,
        [PASSWORD]: password,
        [SALT]: salt
    }

    const endpoint = oath + CREATE; // accounts/create
    return await postRequest(endpoint, message);
}