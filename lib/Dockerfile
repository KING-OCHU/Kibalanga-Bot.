FROM quay.io/sam-ochu/kibalanga
RUN git clone https://github.com/SAM-OCHU/Kibalanga-Bot /root/SAM-OCHU
WORKDIR /root/SAM-OCHU/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]