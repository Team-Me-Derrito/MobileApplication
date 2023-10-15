import { ACCOUNT_ID, TOKEN, RECOMMENDED, UPCOMING, SEARCH, ALL, COMMUNITY, QUERY } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const path = 'events/';

/**
 * Get the list of recommended events fir the user
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @returns Json object containing the list of the recommended events
 */
export async function getRecommended(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + RECOMMENDED; // events/recommended
    return await postRequest(endpoint, message);
}

/**
 * Get the list of all events available
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @returns Json object containing the list of all events
 */
export async function getAllEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + ALL; // events/all
    return await postRequest(endpoint, message);
}

/**
 * Get the list of upcoming events
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @returns Json object containing the list of upcoming events
 */
export async function getUpcoming(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + UPCOMING; // events/upcoming
    return await postRequest(endpoint, message);
}

/**
 * Get the list of events with the search keywords
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @param {string} search keyword for the search
 * @returns Json object containing the list of corresponding events
 */
export async function searchEvents(token, id, search) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [QUERY]: search
    };

    const endpoint = path + SEARCH; // events/search
    return await postRequest(endpoint, message);
}

/**
 * Get the list of events inside the specific community that the user belongs
 * 
 * @param {*} token access token for the session
 * @param {*} id account ID
 * @returns Json object containing the list of corresponding events
 */
export async function getCommunityEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + COMMUNITY; // events/community
    return await postRequest(endpoint, message);
}