import { ACCOUNT_ID, COMMUNITY_ID, ACCOUNT_NAME, GENDER, PHONE, EMAIL, PASSWORD, SALT, TOKEN, BIRTHDAY, ACCOUNT_FETCH_URL, ACCOUNT_LOGIN_URL, ACCOUNT_CREATE_URL, INTEREST_TYPES_SELECTED } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const path = 'accounts/';

/**
 * Gets the account info corresponding to the specific ID.
 * This should contain all the account info excluding password and salt.
 *
 * @param {string} token access token for the session
 * @param {Number} id associated account ID 
 * @returns Json object including the account info. 
 */
export async function getAccount(token, id) {
    const message = {
        [ACCOUNT_ID]: id,
        [TOKEN]: token
    };

    const endpoint = path + ACCOUNT_FETCH_URL; // accounts/fetch
    return await postRequest(endpoint, message);
}

/**
 * Attempts to login with the server.
 * It will return the account ID and the session token when it is successful.
 * 
 * @param {string} email email address to be authenticated
 * @param {string} password raw password to be authenticated
 * @returns Json object including the account ID and the session token.
 */
export async function attemptLogin(email, password) {
    const message = {
        [EMAIL]: email,
        [PASSWORD]: password
    };

    const endpoint = path + ACCOUNT_LOGIN_URL; // accounts/login
    return await postRequest(endpoint, message);
}

/**
 * Creates a new account with given information
 * 
 * @param {Number} communityId community_id property
 * @param {string} name AccountName property
 * @param {object} interestTypes Array of selected interest types ids.
 *                          structure looks like:
 *                          [1, 45, 23, 22] <- you can assume those elements are Number type
 * @param {Date} birthday Birthday property
 * @param {string} gender Gender property
 * @param {string} phone PhoneNumber property
 * @param {string} email Email property
 * @param {string} password Password property
 * 
 * @returns Json object to tell if the creation went successfully
 */
export async function createAccount(communityId, name, interestTypes, birthday, gender, phone, email, password) {
    const message = {
        [COMMUNITY_ID]: communityId,
        [ACCOUNT_NAME]: name,
        [INTEREST_TYPES_SELECTED]: interestTypes,
        [BIRTHDAY]: birthday,
        [GENDER]: gender,
        [PHONE]: phone,
        [EMAIL]: email,
        [PASSWORD]: password
    }

    const endpoint = path + ACCOUNT_CREATE_URL; // accounts/create
    return await postRequest(endpoint, message);
}