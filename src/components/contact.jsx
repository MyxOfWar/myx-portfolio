import PageContent from './PageContent';

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
    command: "LinkedIn: 'linkedin.com/in/myxpeace'",
  },
  {
    id: 4,
    command: "GitHub: 'github.com/MyxOfWar'",
  },
  {
    id: 5,
    command: 'Feel free to reach out for collaborations or inquiries!',
  },
]

function Contact () {
  return <PageContent data={contactData} />;
}

export default Contact;
