FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Declare the NODE_ENV build argument
ARG ENV_FILE
ENV ENV_FILE=${ENV_FILE}

# Install necessary dependencies
RUN apk add --no-cache git \
    && yarn global add env-cmd

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install && yarn cache clean

# Copy the rest of the application files to the container
COPY . .

# Run the build command using env-cmd with the specific .env file
RUN yarn env-cmd -f ${ENV_FILE} yarn build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
