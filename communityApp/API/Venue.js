import { VENUE_TYPE_FETCH_URL } from "../constants/Database";
import { postRequest } from './BaseRequest.js';


const path = 'venues/';

/**
 * Get the list of venues.
 * It does not require access token for authentication since it is public information
 * 
 * @returns Json object containing the list of venues
 */
export async function getVenues() {
    const message = {
    // Empty message will be used for postRequest() function since it requires some object
    };

    const endpoint = path + VENUE_TYPE_FETCH_URL; // venue/fetch
    return await postRequest(endpoint, message);
}
