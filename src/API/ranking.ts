import { BASE_URL, header } from "../config";

export class Ranking {
    async getRank(id: number, sort = "score", page = 1) {
        const path = encodeURI(`ranking/best?id=${id}&sort=${sort}&page=${page}`)
        const res = await fetch(`${BASE_URL}/${path}`, {
            method: "GET",
            headers: header
        });
        if (res.status != 200) throw await res.text()
        return res.json()
    }
}
