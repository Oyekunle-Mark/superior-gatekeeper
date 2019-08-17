# superior-gatekeeper

Using GitHub OAuth2.0 with a node server

This repo uses the GitHub OAuth2.0 to authenticate users. The index.html served by the app has a login hyperlink which redirects to the where-to-code github app auth.

On successful the github auth redirects to /home with logs both response object and makes another request with the access_token to get the github user object.

The user object details is used to present the welcome message on the home.html file.

## Author

Oyekunle Oloyede
