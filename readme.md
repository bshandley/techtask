# Summary

>“I need a small web app (a single HTML page) to be available online. The webpage content isconfidential so I need it to be secured with Basic authentication over TLS. I also would like tosupport a secret token within the URL as a second authentication factor. I would like all thesecurity verification to take place in a separate container before reaching the container thathosts the confidential content. I need to be able to build the entire solution from Dockerfiles anddeploy it via Docker Compose."

Solution consists of two Docker containers. The first container is an Nginx reverse proxy that forces TLS and provides authentication for the user by either username/password or static token. The second container consists of a NodeJS server that provides a single webpage.

# Files
**root**
* docker-compose.yml - Docker Compose orchestration file for the solution
 
 **web**
 * Dockerfile - Main dockerfile for the web image.
 * app.js - NodeJS webserver code
 * index.htm - View for the webpage
 * package.json - Manifest for the NodeJS app
 * package-lock.json - Additional manifest file
 
 **proxy**
 * Dockerfile - Main dockerfile for the proxy image
 * proxy_ssl.conf - Configuration file for Nginx
 * cert.pem - Self-signed SSL Cert
 * key.pem - Key for SSL Cert
 * .htpasswd - Password file containing the encrypted password the main user

# Requirements

[Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).



# Usage
> Note: the user executing the Docker code below should be part of the `docker` user group.

### Installation
Execute `git clone https://github.com/bshandley/techtask.git` in the desired subfolder. Alternatively, unzip containing archive to desired subfolder.

### Startup
Execute `docker-compose up -d` from within the project folder. Executing `docker ps` should result in two new containers, namely **nginx-proxy** and **node-server**.

### Shutdown
Execute `docker-compose down` from within the project folder. This stops the **nginx-proxy** and **node-server** containers and removes them from the system.

### Logging in
Navigate to [https://localhost](https://localhost) to be prompted for a username and password. Test credentials have been provided below.

`username: palo`
`password: alto`

As a backup, navigate to [https://localhost/55jsyeks/index.htm](https://localhost/55jsyeks/index.htm) to bypass authentication.

### Additional Information
Any http requests will be interpretted as https (SSL).
