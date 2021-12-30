import Backendless from 'backendless';

Backendless.initApp('3F6FD799-4DA3-DCEA-FFA6-A9D2380E0C00', 'F5CD099F-5472-4A4A-872E-D4432A045F68')

const bodyParts = new Backendless.Bodyparts()

// bodyParts.htmlmessage = `
//   This is an <b>HTML email</b> sent from a <a href="\"http://backendless.com\"">Backendless</a>
//   backend`

// const subject = 'Hello from Backendless!'
// const recipient = 'info@backendless.com'

const onSuccess = status => {
  console.log('HTML email has been sent')
}

const onError = error => {
  console.error('Server reported an error: ', error.message)
  console.error('error code: ', error.code)
  console.error('http status: ', error.status)
}

Backendless.Messaging.sendEmail(subject, bodyParts, [recipient])
  .then(onSuccess)
  .catch(onError)

export default Backendless;