
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello VKU from Vercel!</h1>');
};
