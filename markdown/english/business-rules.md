# Business rules

## Introduction

The Auth API is an app that receives the user credentials, validate then, save the login attempts in cache, show an error if the credentials are wrong or sends a validation token if they are right.

## Description

- In the Auth API it's possible to authenticate a user login.
  - To login is required a valid email and password.
  - To login is required credentials of an existing user.
- Every failed login attempt is stored in cache.
  - After 3 failed login attempts the app will lock for 2 minutes.
    - In the fourth login attempt the app will send ```Number of login attempts was exceeded, wait for 2 MINUTES```.
  - Every failed login attempts generates an error message.
- If the credentials are correct the app will send a validation token.

[Link to the main document.](../../README.md)
