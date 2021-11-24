# HTTP(s)
## Hypertext Transfer Protocol (Secure)
```mermaid
sequenceDiagram
Client ->> Server: Request
Note over Server: Browser Instruction
Server ->> Client: Response
```


# HTML
## Hypertext Markup Language
content and structer

# CSS
## Cascading Style Sheet
html makes prettier


# JavaScript
to add interactivity to a website

# URL
## Uniform Resource Locator
https://hogehoge.example.com/index  
protocol://domain/path

# Domain Name System
```mermaid
sequenceDiagram
Client ->> Server: Request
alt IP adress
    Server ->> Server: 000.000.00.000
end
Server ->> Client: Response
```
## Internet Protocol
Every website(device) has IP address but it's not memorable.  
so we use Domain Name System alternatively.  
stores domain <--> IP 

```mermaid
sequenceDiagram
Client ->> DNS_Server: DNS lookup Request
DNS_Server ->> Client: Response IP Address
Client ->> Server: Request
Server ->> Client: Response
```

check it on `Google Domain`

# how to create a website
we need `web browser` and `html`  
any website is ok