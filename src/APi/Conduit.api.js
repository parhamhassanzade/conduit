import axios from "axios";
import { useNavigate } from "react-router-dom";
import reactRoute from '../routes/Routes';
let apiAddress = "https://api.realworld.io/api";
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//     apiAddress = "https://api.realworld.io/api";
// } else {
//     //? production code
//     apiAddress = "https://api.realworld.io/api";
// }
// let token;
// const getToken = async () => {
//     token = await localStorage.getItem("clientToken");
//     console.log(token);
// };
export const RequestWithToken = async (address, data, method = "Get", token) => {
    const navigate = useNavigate();

    let request = null;
    // await getToken();
    request = await new axios({
        method: method,
        url: apiAddress + address,
        data: data,
        timeout: 10000,

        maxContentLength: 50 * 1000 * 1000,
        headers: {
            /* Accept: "application/json", */
            "Content-Type": "application/json",
            //set token in header request
            // Authorization: `{Token ${token}}`,
            Authorization: token === null ? "" : `Token ${token}`,
        },
        validateStatus: function (status) {
            return status >= 200 && status < 600; // default
        },
    });
    if (request.status === 403) {
        navigate(reactRoute.auth.signIn);
    }
    return request;
};

export const Request = async (address, data, method = "Get") => {
    let request = null;
    request = await axios({
        method: method,
        url: apiAddress + address,
        data: data,
        timeout: 10000,
        // httpAgent: new http.Agent({ keepAlive: true }),
        // httpsAgent: new https.Agent({ keepAlive: true }),
        maxContentLength: 50 * 1000 * 1000,
        headers: {
            /* Accept: "application/json", */
            "Content-Type": "application/json",
        },
        validateStatus: function (status) {
            return status >= 200 && status < 600; // default
        },
    });

    return request;
};
