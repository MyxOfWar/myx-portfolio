import TerminalLine from "./TerminalLine";

const contactData = [
  {
    id: 1,
    command: "echo 'Contact Me'",
  },
  {
    id: 2,
    command: 'Email: dochasachmyx@gmail.com',
  },
  {
    id: 3,
    command: 'LinkedIn: linkedin.com/in/myx-peace',
  },
  {
    id: 4,
    command: 'GitHub: github.com/myxpeace',
  },
  {
    id: 5,
    command: 'Feel free to reach out for collaborations or inquiries!',
  },
]

function Contact () {

  return (
    <div className="content">
      {contactData.map(item => (
        <p key={item.id}>
          <span className="prompt">$</span> <TerminalLine text={item.command} />
        </p>
      ))}
    </div>
  )
}

export default Contact;