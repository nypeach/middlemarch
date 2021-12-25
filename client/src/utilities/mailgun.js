const mailgun = require("mailgun-js");
const DOMAIN = "sandbox0863dc47f5b74d81a9e982bdf84d5451.mailgun.org";
const mg = mailgun({ apiKey: "847d5f787736d65a31b5c10e7b787a7a-1831c31e-e3abb263", domain: DOMAIN });
// const data = {
//   from: "Mailgun Sandbox <postmaster@sandbox0863dc47f5b74d81a9e982bdf84d5451.mailgun.org>",
//   to: "jodimsilverman@gmail.com",
//   subject: "Hello",
//   text: "The road is long with many a winding turn",
//   html: '<div><strong>THIS IS AN HTML TEST</strong></div>'
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
// });

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.

export default mg;