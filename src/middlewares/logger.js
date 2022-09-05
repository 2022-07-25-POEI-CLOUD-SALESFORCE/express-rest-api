function logger(request, _, next) {
  console.log(
    `# ${request.method}  ${request.url} Data ${JSON.stringify(request?.body)}`
  );
  next();
}

module.exports.logger = logger;
