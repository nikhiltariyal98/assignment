Bug Report 1: Console Error - Invalid Login Credentials
Bug Title: Console Error when Invalid Login Credentials Are Used
Steps to Reproduce:

1. Go to the login page of the application: https://demo.haroldwaste.com/

2. Enter invalid login credentials (e.g., incorrect email/password).

3. Press the "Login" button.

Expected Behavior:

No errors should be shown in the console.

Actual Behavior:

In the browser console, the following error appears:

Uncaught (in promise) DataCloneError: Failed to execute 'postMessage' on 'BroadcastChannel': ()=>n.error((0,y.FC)("auth/user-not-found")) could not be cloned.

Severity: Medium
