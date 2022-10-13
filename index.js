const API_KEY = 'key-8b39403f4756fc2a39bc35280ebbded0';
const DOMAIN = 'ultimatesms.in';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});

const messageData = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'sachin.tomar@techcorona.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

client.messages.create(DOMAIN, messageData)
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.error(err);
 });
