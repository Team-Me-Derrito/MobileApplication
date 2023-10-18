import { VENUE_TYPE_FETCH_URL } from "../constants/Database";
import { postRequest } from './BaseRequest.js';


const path = 'venues/';

/**
 * Get the list of interest types.
 * It does not require access token for authentication since it will be used for signup the process.
 * 
 * @returns Json object containing the list of interest types
 */
export async function getVenues() {
    const message = {
    // Empty message will be used for postRequest() function since it requires some object
    };

    const endpoint = path + VENUE_TYPE_FETCH_URL; // venue/fetch
    return await postRequest(endpoint, message);
}
