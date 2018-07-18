import { AUTH, FETCH_USER} from "./types";

export const authenticate = (post) => dispatch => {
    
};

export const fetchUser = (user) => dispatch => {
    fetch('https://api.github.com/users/octocat/' + user)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_USER,
                payload: data
            });
            console.log(data)
        })
        .catch(function (err) {
            console.error(err);
        })
};