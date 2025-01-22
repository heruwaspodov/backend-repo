# backend-repo

## About

This is a backend repository for mini apps for login, fetch user, and update the users using firebase

## Dependency

- NodeJs v22.10.7
- Firebase
- ExpressJs
- Typescript

## Preparation

- copy `.env.example` to `.env` (configuration for firebase credential)
- please register the project setting in the => https://console.firebase.google.com/u/2/project/{your_project}
- generate new private key and rename as `firebase-adminsdk.json`
- Make sure already activate a **firestore database** => https://console.firebase.google.com/u/2/project/{your_project}/firestore/databases 
feature and create new doc, the name is **USERS**
- Make sure already activate a **Authentication** => https://console.firebase.google.com/u/2/project/{your_project}/authentication/users, please select login **email and password** and create a sample for users, because in the frontend has no feature for registration.

## Run
#### `yarn dev`