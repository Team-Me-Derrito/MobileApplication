
export async function getRecommended(token, id) {
    try {
        const url = `http://127.0.0.1/api/recommendedevents`;
        const message = {
            token: token,
            account_id: id
        };
        const method = "POST";
        const response = await fetch(url, {
            method: method,
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

export async function getAllEvents(token, id) {
    try {
        const url = `http://127.0.0.1/api/allevents`;
        const message = {
            token: token,
            account_id: id
        };
        const method = "POST";
        const response = await fetch(url, {
            method: method,
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

export async function getUpcoming(token, id) {
    try {
        const url = `http://127.0.0.1/api/upcomingevents`;
        const message = {
            token: token,
            account_id: id
        };
        const method = "POST";
        const response = await fetch(url, {
            method: method,
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

export async function searchEvents(id, token, search) {
    try {
        const url = `http://127.0.0.1/api/searchevents`;
        const message = {
            token: token,
            account_id: id,
            query: search
        };
        const method = "POST";
        const response = await fetch(url, {
            method: method,
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

export async function getCommunityEvents(token, id) {
    try {
        const url = `http://127.0.0.1/api/communityevents`;
        const message = {
            token: token,
            account_id: id
        };
        const method = "POST";
        const response = await fetch(url, {
            method: method,
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