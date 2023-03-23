# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.13.1 as build

# Set the working directory
WORKDIR /usr/local/portal-funpac

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable-alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/portal-funpac/dist/portal-funpac .

# Expose port 80
EXPOSE 80
