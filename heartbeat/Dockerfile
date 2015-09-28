FROM node:latest
RUN apt-get update -qq && apt-get -y install heartbeat net-tools

COPY authkeys /etc/ha.d/authkeys
COPY ha.cf /etc/ha.d/ha.cf
COPY haresources /etc/ha.d/haresources
RUN touch /var/log/messages

RUN chmod 600 /etc/ha.d/authkeys

COPY . /src
RUN cd /src; npm install


CMD /etc/init.d/heartbeat start; \
sleep 20;
node /src/app.js; \
