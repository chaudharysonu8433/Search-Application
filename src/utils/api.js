import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyAEMb1MgoBC05SI5ZuwDKxmtLtXAiOImdM',
    cx:'657dc34a0f67f40bb'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    });
    return data;
};
