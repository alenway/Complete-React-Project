import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

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
  return (
    <div className="main">
      <h2 style={{ marginTop: "50px" }}>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
