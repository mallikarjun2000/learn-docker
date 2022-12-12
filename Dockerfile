FROM node:18
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "node", "entry.js" ]