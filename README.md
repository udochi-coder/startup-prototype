# **Provisioning a Linux Server for a Dynamic Web Application**

## **Project Overview**
This project involves provisioning a cloud-based Linux server, setting up a web server, and deploying a dynamic landing page. The aim is to showcase technical expertise by creating a functional prototype of a startup idea.

## **Server Setup**
### **1. Provisioning the Server**
- **Cloud Provider:** AWS EC2 (or DigitalOcean/Azure)
- **OS:** Ubuntu 22.04 LTS
- **Instance Details:**
  - **CPU, Memory, Storage:** Configured based on project needs
  - **Security Groups:** Allowed SSH (Port 22), HTTP (Port 80), HTTPS (Port 443)
- **Commands Used:**
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```

### **2. Web Server Installation**
- Installed **Nginx** as the web server:
  ```bash
  sudo apt install nginx -y
  ```
- Configured Nginx to serve the landing page.

### **3. Reverse Proxy Setup**
- Configured Nginx as a reverse proxy for a Node.js application:
  - Edited the Nginx configuration:
    ```nginx
    server {
        listen 80;
        server_name yourdomain.com;
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
  - Restarted Nginx:
    ```bash
    sudo systemctl restart nginx
    ```

## **Landing Page Development**
### **4. Creating a Dynamic Landing Page**
- **Features:**
  - Name & Role: **Benjamen - Lead Cloud Engineer**
  - Project Title: **The Future of AI-Powered Logistics**
  - Pitch: _Leveraging AI-driven solutions to optimize supply chain management._
  - **Professional Bio:** Listed skills, past projects, and education.
- **Enhancements:**
  - CSS animations and TailwindCSS for styling.
  - Interactive elements for user engagement.

## **Networking & Security**
### **5. Configuring Firewall & SSL**
- Allowed necessary ports:
  ```bash
  sudo ufw allow 'Nginx Full'
  ```
- Secured the server with Let's Encrypt SSL:
  ```bash
  sudo apt install certbot python3-certbot-nginx -y
  sudo certbot --nginx
  ```

## **Deployment & Submission**
### **6. Hosting & Verification**
- Deployed landing page and verified accessibility.
- Public IP Address: **[35.179.90.138]**
- Screenshot of the rendered page:![Alt text](https://github.com/udochi-coder/startup-prototype/blob/main/startup%20protoype.png)

### **7. GitHub Repository**
- Created a GitHub repository for tracking progress and documentation.
- Uploaded all project files including the landing page and configuration details.

---
