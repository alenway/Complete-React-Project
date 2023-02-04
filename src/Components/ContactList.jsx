import ContactCard from "./ContactCard";

export default function ContactList(props) {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "nitin",
      email: "nitin@gmail.com",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list ">{renderContactList}</div>;
}
