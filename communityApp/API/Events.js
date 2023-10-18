import { ACCOUNT_ID, TOKEN, EVENT_RECOMMENDED_URL, EVENT_UPCOMING_URL, EVENT_SEARCH_URL, EVENT_ALL_URL, EVENT_COMMUNITY_URL, EVENT_QUERY_URL, EVENT_ID, EVENT_ATTENDANCE_URL, EVENT_TICKET, DESCRIPTION, PRICE, DURATION, TITLE, START_DATE, VENUE, CREATE, PROJECT_ID, INTEREST_ID } from '../constants/Database';
import { postRequest } from './BaseRequest';


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

    const endpoint = path + EVENT_RECOMMENDED_URL; // events/recommended
    return await postRequest(endpoint, message);
}

export async function getEvent(token, id, eventID) {
    console.log(token, id, eventID);
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [EVENT_ID]: eventID
    };

    const endpoint = path + EVENT_ID;
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

    const endpoint = path + EVENT_ALL_URL; // events/all
    console.log("endpoint is", endpoint);
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

    const endpoint = path + EVENT_UPCOMING_URL; // events/upcoming
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

    const endpoint = path + EVENT_SEARCH_URL; // events/search
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

    const endpoint = path + EVENT_COMMUNITY_URL; // events/community
    return await postRequest(endpoint, message);
}

export async function createEvent(token, id, name, description, price, duration, date, location, project_id, interest_id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [TITLE]: name,
        [DESCRIPTION]: description,
        [PRICE]: price,
        [DURATION]: duration,
        [START_DATE]: date,
        [VENUE]: location,
        [PROJECT_ID]: project_id,
        [INTEREST_ID]: interest_id,
    };

    const endpoint = path + CREATE; // events/create
    return await postRequest(endpoint, message);
}

/**
 * Get the list of events with the search keywords
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @param {string} ticketed boolean for accounts attendence to event
 * @returns Json object containing the list of corresponding events
 */
export async function setAttendence(token, id, ticketed, eventID) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [EVENT_ATTENDANCE_URL]: ticketed,
        [EVENT_ID]: eventID
    };

    const endpoint = path + EVENT_ATTENDANCE_URL + "/set"; // /api/events/attendance/set
    console.log("url and message is", endpoint, message);
    return await postRequest(endpoint, message);
}


/**
 * Get the list of events with the search keywords
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @param {string} ticketed boolean for accounts attendence to event
 * @returns Json object containing the list of corresponding events
 */
export async function getAttendence(token, id, eventID) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [EVENT_ID]: eventID
    };
    const endpoint = path + EVENT_ATTENDANCE_URL + "/get"; // /api/events/attendance/get
    return await postRequest(endpoint, message);
}