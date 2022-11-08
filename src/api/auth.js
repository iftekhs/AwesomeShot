const setAuthToken = (user, from) => {
  //get jwt token
  fetch('http://localhost:5000/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // localstorage is the easiest but not the best place to store jot token
      localStorage.setItem('genius-token', data.token);
    });
};

export default setAuthToken;
