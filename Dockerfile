# syntax=docker/dockerfile:1.0-experimental

# ARGs are used to pass in values at build time.
ARG NODE_VERSION=16
ARG NODE_ENV=production
ARG PORT=3000


################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app


################################################################################
# Create a stage for installing production dependecies.
FROM base as deps
ARG NODE_ENV

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev


################################################################################
# Create a stage for building the application.
FROM deps as build
ARG NODE_ENV

# Copy the rest of the source files into the image.
COPY . .

# Run the build script.
RUN npm run build


################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base as final
ARG PORT
ARG NODE_ENV

# Run the application as a non-root user.
USER node

# Copy package.json so that package manager commands can be used.
COPY package.json .

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build ./build

# Expose the port that the application listens on.
EXPOSE ${PORT}

# Set runtime environment variables
ENV PORT ${PORT}
ENV NODE_ENV ${NODE_ENV}

# Run the application.
CMD npm start
