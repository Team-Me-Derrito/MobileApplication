import { ACCOUNT_ID, TOKEN, RECOMMENDED, UPCOMING, SEARCH, ALL, COMMUNITY, QUERY, EVENT_ID } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const path = 'events/';

export async function getRecommended(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + RECOMMENDED; // events/recommended
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

export async function getAllEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + ALL; // events/all
    return await postRequest(endpoint, message);
}

export async function getUpcoming(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + UPCOMING; // events/upcoming
    return await postRequest(endpoint, message);
}

export async function searchEvents(id, token, search) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [QUERY]: search
    };

    const endpoint = path + SEARCH; // events/search
    return await postRequest(endpoint, message);
}

export async function getCommunityEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id
    };

    const endpoint = path + COMMUNITY; // events/community
    return await postRequest(endpoint, message);
}