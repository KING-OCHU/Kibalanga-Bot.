FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/SAM-OCHU/Kibalanga-Bot /root/SAM-OCHU
WORKDIR /root/SAM-OCHU/
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
