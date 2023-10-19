import { ACCOUNT_ID, TOKEN, EVENT_RECOMMENDED_URL, EVENT_UPCOMING_URL, EVENT_SEARCH_URL, EVENT_ALL_URL, EVENT_COMMUNITY_URL, EVENT_QUERY_URL, EVENT_ID, EVENT_ATTENDANCE_URL, EVENT_TICKET, DESCRIPTION, PRICE, DURATION, TITLE, START_DATE, VENUE, CREATE, PROJECT_ID, INTEREST_ID } from '../constants/Database';
import { postRequest } from './BaseRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

const path = 'events/';

/**
 * Get the list of recommended events fir the user
 * 
 * @param {string} token access token for the session
 * @param {Number} id account ID
 * @returns Json object containing the list of the recommended events
 */
export async function getRecommended() {

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
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
    };

    const endpoint = path + EVENT_RECOMMENDED_URL; // events/recommended
    return await postRequest(endpoint, message);
}

/**
 * Gets the event info with the given event ID
 * 
 * @param {Number} eventID 
 * @returns Json object containing the event info
 */
export async function getEvent(eventID) {

    var account;
    var token;

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    console.log(eventID);
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
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
export async function getAllEvents() {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
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
export async function getUpcoming() {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
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
export async function searchEvents(search) {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
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
export async function getCommunityEvents() {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);
    
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
    };

    const endpoint = path + EVENT_COMMUNITY_URL; // events/community
    return await postRequest(endpoint, message);
}

/**
 * Creates a new event with the given information.
 * 
 * @param {string} name Name of the event
 * @param {string} description Description of the event
 * @param {string} price Price of the event
 * @param {string} duration Duration of the event (How long the event will be held for)
 * @param {Date} date Date of the event
 * @param {string} location Location of the event 
 * @param {Number} interest_id Interest type associated with the event
 * @returns Json object containing the response from the server
 */
export async function createEvent(name, description, price, duration, date, location, interest_id) {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
        [TITLE]: name,
        [DESCRIPTION]: description,
        [PRICE]: price,
        [DURATION]: duration,
        [START_DATE]: date,
        [VENUE]: location,
        [PROJECT_ID]: 1,
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
export async function setAttendence(ticketed, eventID) {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
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
export async function getAttendence(eventID) {

    account = "3";
    token = "3";

    try {
        account = await AsyncStorage.getItem('account_id');
        token = await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error checking user token:', error);
    }

    accNum = parseInt(account);

    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: accNum,
        [EVENT_ID]: eventID
    };
    const endpoint = path + EVENT_ATTENDANCE_URL + "/get"; // /api/events/attendance/get
    return await postRequest(endpoint, message);
}