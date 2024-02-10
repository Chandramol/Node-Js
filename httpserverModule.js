const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  if (request.url == "/") {
    response.statusCode = 200;
    response.end(
      "<h2>Fitness with Chanmol</h2><p>And this is the node js learnings notes</p>"
    );
  } else if (request.url == "/about") {
    response.statusCode = 200;
    response.end(
      "<h2>About Fitness</h2><p>And this is the to about node js learnings notes</p>"
    );
  } else if (request.url == "/main") {
    response.statusCode = 200;
    const data = fs.readFileSync("index.html");
    response.end(data.toString());
  } else {
    response.statusCode = 404;
    response.end("<h4>Page is Not found</h4>");
  }
});

server.listen(port, () => {
  console.log(`Server is listing on port ${port}`);
});
