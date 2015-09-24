FROM nginx:latest

RUN apt-get update && apt-get -y install curl

RUN curl -L https://github.com/hashicorp/consul-template/releases/download/v0.10.0/consul-template_0.10.0_linux_amd64.tar.gz | \
tar -C -zxf /usr/local/bin --strip-components 1 

RUN touch /etc/nginx/conf.d/templatefile
COPY templatefile /etc/nginx/conf.d/templatefile

ENV CONSULADDR localhost:8500

CMD /usr/sbin/nginx -c /etc/nginx/nginx.conf; \
consul-template -consul=$CONSULADDR \
-template "/etc/nginx/conf.d/templatefile:/etc/nginx/conf.d/app.conf:/usr/sbin/nginx -s reload";