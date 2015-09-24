# consulExample

Example -- docker consul, nginx, consul-template, registrator

## /Consul
If need to change the configuration file's path, please override the ENTRYPOINT. <br />
Example: <br />
` ENTRYPOINT ["/bin/consul", "agent", "-server", "-config-dir=$PATH"] ` <br />
Note: the environment variable cannot be translated in ENTRYPOINT unless use /bin/bash. <br />
<br />
Specify the advertise address with the local address for other machines in cluster finding it. <br />
If run with --net=host and not specify the advertise address, then it will use eth0's ip. <br />
If not bind to localhost, need to expose 8301-8302/udp, 8300-8302/tcp, 8400/tcp, 8500/tcp, 8600/tcp, 8600/udp. <br />
<br />
Example cmd for DOCKER RUN <br />
`docker run --net=host --name=consul --rm consul -bootstrap -node m1 -advertise 192.168.0.5 -join 192.168.0.5 ` <br />
Note: <br />
1. The config in docker file can be overrided. <br />
2. The node can join itself. <br />
3. One cluster can only have one node in bootstrap mode. <br />
4. The advertise address should be in the cluster ip range. <br />
5. If the hostnames are same, please specify -node in consul configuration. <br />
<br />
## /Registrator
Need to provide consul address. Add -ip flag to bind ip address. <br />
<br />
According to registrator doc, the best way is to use --net=host for docker run. <br />
Need to configure the shared files when running. <br />
Example cmd for DOCKER RUN <br />
`docker run --net=host --name=resgistrator --rm --volume=/var/run/docker.sock:/tmp/docker.sock registrator ` <br />
Note: <br />
1. the CMD of docker file using default consul url (localhost:8500) <br />
2. the `-ip` flage specified the ip address for register service. <br />
3. the `-resync 10`  will resynchronize consul info every 10 seconds. <br />
## /nginxconsultemplate
Need to provide consul address. -e CONSULADDR <br />
Add consul template file. <br />
Example cmd for DOCKER RUN <br />
`docker run --net=host --name=nc --rm nc ` <br />
