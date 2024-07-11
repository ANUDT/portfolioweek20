import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function messageAlert() {
  return (
    <>
      {[
       'info',
        ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default messageAlert;


function Contact() {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
       <Form.Label>Please let me know if you wish to know more about me ...</Form.Label>
      <Form.Control type="text" placeholder="my name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
)
 } 
export default Contact;