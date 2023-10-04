import { BASE_URL, API_KEY, OPTION, ACCOUNT_ID, TOKEN, RECOMMENDED, UPCOMING, SEARCH, ALL, COMMUNITY, QUERY } from '../constants/Database.js';
import { postRequest } from './BaseRequest.js';


const endpoint = 'events';

export async function getRecommended(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [OPTION]: RECOMMENDED
    };

    await postRequest(endpoint, message);
}

export async function getAllEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [OPTION]: ALL
    };

    await postRequest(endpoint, message);
}

export async function getUpcoming(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [OPTION]: UPCOMING
    };

    await postRequest(endpoint, message);
}

export async function searchEvents(id, token, search) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [OPTION]: SEARCH,
        [QUERY]: search
    };

    await postRequest(endpoint, message);
}

export async function getCommunityEvents(token, id) {
    const message = {
        [TOKEN]: token,
        [ACCOUNT_ID]: id,
        [OPTION]: COMMUNITY
    };

    await postRequest(endpoint, message);
}