const setAuthToken = (user, from) => {
  //get jwt token
  return fetch(`${process.env.REACT_APP_API_ROOT}/jwt`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // localstorage is the easiest but not the best place to store jot token
      localStorage.setItem('awesomeshot-token', data.token);
    });
};

export default setAuthToken;
