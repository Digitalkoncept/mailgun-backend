const api_key = 'key-8b39403f4756fc2a39bc35280ebbded0';
const domain = 'ultimatesms.in';

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'sachin.tomar@techcorona.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});