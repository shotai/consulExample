# consulExample

Example -- docker consul, nginx, consul-template, registrator

## /Consul
Contains consul docker file. if want to change the configuration file's path, please overwrite the ENTRYPOINT.
Example:
` ENTRYPOINT ["/bin/consul", "agent", "-server", "-config-dir=$PATH"] `
Note: the environment variable cannot be translated in ENTRYPOINT unless use /bin/bash.

Specify the advertise address with the local address for other machines in cluster finding it. 
If run with --net=host and not specify the advertise address, then it will use eth0's ip.
If not bind to localhost, need to expose 8301-8302/udp, 8300-8302/tcp, 8400/tcp, 8500/tcp, 8600/tcp, 8600/udp.

Example cmd for DOCKER RUN
`docker run --net=host --name=consul --rm consul -bootstrap -node m1 -advertise 192.168.0.5 -join 192.168.0.5 `
Note: 
1. The config in docker file can be overrided. 
2. The node can join itself.
3. One cluster can only have one node in bootstrap mode
4. The advertise address should be in the cluster ip range
5. If the hostnames are same, please specify -node in consul configuration

