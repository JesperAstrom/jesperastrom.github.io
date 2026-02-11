FROM node:22

WORKDIR /app

# Copy all files from the current directory
COPY . ./

# Install frontend dependencies and build
RUN npm install
RUN npm run build

# Change to the server directory
WORKDIR /app/server

# Install server dependencies
RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
