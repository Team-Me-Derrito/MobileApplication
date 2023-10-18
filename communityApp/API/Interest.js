import { INTEREST_TYPE_FETCH_URL } from "../constants/Database";
import { postRequest } from './BaseRequest.js';


const path = 'interests/';

/**
 * Get the list of interest types.
 * It does not require access token for authentication since it will be used for signup the process.
 * 
 * @returns Json object containing the list of interest types
 */
export async function getInterestTypes() {
    const message = {
    // Empty message will be used for postRequest() function since it requires some object
    };

    const endpoint = path + INTEREST_TYPE_FETCH_URL; // interest_type/fetch
    return await postRequest(endpoint, message);
}
