import { AUTH, FETCH_GIT_DETAILS} from "./types";

export const authenticate = (user) => dispatch => {
  fetch('http://127.0.0.1:8000/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
      dispatch({
          type: AUTH,
          payload: (!data.user || Object.keys(data.user).length === 0) ? {} : data.user
      });
    //   console.log(data);
  })
  .catch(err => {console.error(err);})
};

export const fetchGitDetails = (user) => dispatch => {
    fetch('https://api.github.com/users/' + user)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: FETCH_GIT_DETAILS,
                payload: data
            });
            console.log(data)
        })
        .catch(function (err) {
            console.error(err);
        })
};