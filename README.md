# Landing
Personal landing site, currently under construction. Built on React, NodeJS, and Emotionjs.

## Environment Variables
 - **PORT** = the port on which to serve the compiled, static React app (default 3000)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app. Will use dev/prod mode based on NODE_ENV="development"/"production".
Open [http://localhost:3000](http://localhost:3000) (or `*:PORT` if customized)
to view it in the browser.

In dev mode, the page will reload if you make edits.
You will also see any lint errors in the console.
In prod mode, the build directory is statically served w/ `npx serve -s build`.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Docker Usage

- Using `docker build`
    - `docker build . -t landing`
    - `docker run landing`

- Or using `docker compose`:
    - `docker compose build`
    - `docker compose up`