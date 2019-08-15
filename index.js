const express = require('express');
const axios = require('axios');

const server = express();

const clientID = '788c40e178d18cdc6874';
const clientSecret = '1b55fa79c10cd71fba117a120efd4ac946690fa4';

// the redirect route
server.get('/home', (req, res) => {
  const requestToken = req.query.code;

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  }).then(response => {
    const accessToken = response.data.access_token;
    console.log(response.data);

    res.redirect(`/home.html?access_token=${accessToken}`);
  });
});

server.use(express.static(__dirname + '/public'));

server.listen(5000, () => {
  console.log('Server listening on port : 5000');
});
