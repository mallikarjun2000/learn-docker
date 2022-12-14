FROM node:18
COPY . .
RUN npm install
ENV PORT=5000
EXPOSE ${PORT}
CMD [ "node", "entry.js" ]

