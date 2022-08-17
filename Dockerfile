# Menggunakan base image node:alpine

FROM node:alpine

# Membuat directory app, setting working directory

WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json (jika ada)

COPY package*.json ./

# Menginstal dependency

RUN npm install

# Bundle source

COPY . .

# Expose port (for documentation)

EXPOSE 3000

# Run the app

CMD [ "node", "src/app.js"]