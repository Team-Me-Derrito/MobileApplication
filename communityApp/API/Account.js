import { ACCOUNT_ID, COMMUNITY_ID, ACCOUNT_NAME, GENDER, PHONE, EMAIL, PASSWORD, TOKEN, BIRTHDAY, ACCOUNT_FETCH_URL, ACCOUNT_LOGIN_URL, ACCOUNT_CREATE_URL, INTEREST_TYPES_SELECTED, MESSAGE, ACCOUNT_UPDATE_URL } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const path = 'accounts/';

/**
 * Gets the account info corresponding to the specific ID.
 * This should contain all the account info excluding password and salt.
 *
 * @param {string} token access token for the session
 * @param {Number} id associated account ID 
 * @returns Json object including the account info. 
 */
export async function getAccount() {

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
    const birthdayFormatted = birthday.toISOString().split('T')[0];
    const message = {
        [COMMUNITY_ID]: communityId,
        [ACCOUNT_NAME]: name,
        [INTEREST_TYPES_SELECTED]: interestTypes,
        [BIRTHDAY]: birthdayFormatted,
        [GENDER]: gender,
        [PHONE]: phone,
        [EMAIL]: email,
        [PASSWORD]: password
    }

    const endpoint = path + ACCOUNT_CREATE_URL; // accounts/create
    return await postRequest(endpoint, message);
}

/**
 * Updates an account with given information
 * 
 * @param {Number} communityId community_id property
 * @param {string} name AccountName property
 * @param {Array<Number>} interestTypes Array of selected interest types ids.
 *                          structure looks like:
 *                          [1, 45, 23, 22] <- you can assume those elements are Number type
 * @param {Date} birthday Birthday property
 * @param {string} gender Gender property
 * @param {string} phone PhoneNumber property
 * @param {string} email Email property
 * 
 * @returns Json object to tell if the update went successfully
 */
export async function updateAccount(communityId, name, interestTypes, birthday, gender, phone, email) {
    var account;
    var token;

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const birthdayFormatted = birthday.toISOString().split('T')[0];
    const message = {
        [ACCOUNT_ID]: accNum,
        [TOKEN]: token,
        [COMMUNITY_ID]: communityId,
        [ACCOUNT_NAME]: name,
        [INTEREST_TYPES_SELECTED]: interestTypes,
        [BIRTHDAY]: birthdayFormatted,
        [GENDER]: gender,
        [PHONE]: phone,
        [EMAIL]: email
    }
    console.log(`Sending: ${interestTypes, gender}`);

    const endpoint = path + ACCOUNT_UPDATE_URL; // accounts/update
    return await postRequest(endpoint, message);
}

/**
 * Creates a new post for the discussion forum.
 * 
 * @param {string} text 
 * @returns JSON object containing the response from the server
 */
export async function createPost(text) {
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
        [MESSAGE]: text,
    };

    const endpoint = path + 'post'; // account/post
    return await postRequest(endpoint, message);
}