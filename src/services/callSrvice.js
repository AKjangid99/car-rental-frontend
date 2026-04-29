import axios from 'axios';

export async function handleSignup(role, finalData) {
    try {
        const url =
            role === "rent"
                ? "http://localhost:3000/auth/user/signup"
                : "http://localhost:3000/auth/owner/signup";

        console.log(role === "rent" ? "rent" : "owner");

        const res = await axios.post(url, finalData);

        console.log("Response:", res.data);

        return res.data;
    } catch (e) {
        throw e
    }
}


export async function handleLogIn(role, finalData) {
    try {
        const url =
            role === "rent"
                ? "http://localhost:3000/auth/user/login"
                : "http://localhost:3000/auth/owner/login";

        console.log(role === "rent" ? "rent" : "owner");

        const res = await axios.post(url, finalData);

        console.log("Response:", res.data);

        return res.data;
    } catch (e) {

        throw e

    }
}

