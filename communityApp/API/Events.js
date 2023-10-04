
export async function getRecommended(token, id) {
    try {
        const url = `http://127.0.0.1/api/recommendedEvents`;
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

