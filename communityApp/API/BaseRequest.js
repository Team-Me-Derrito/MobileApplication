import { BASE_URL, API_KEY } from '../constants/Database.js';


<<<<<<< HEAD
/**
 * Generic function that sends a request to the server and returns a response from there
 * 
 * @param {string} endpoint endpoint to send request to
 * @param {object} message Json object containing the message to the server
 * @returns 
 */
=======
>>>>>>> main
export async function postRequest(endpoint, message) {
    if (typeof(endpoint) != 'string') {
        throw new TypeError('Invalid endpoint of type ' + typeof(endpoint));
    }
    if (typeof(message) != 'object') {
        throw new TypeError('Invalid message of type ' + typeof(message));
    }

    try {
        const url = `${BASE_URL}/${endpoint}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        const json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
        return null;
    }
}
