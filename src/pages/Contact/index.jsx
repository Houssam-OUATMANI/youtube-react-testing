import { useState } from "react";
import Form from "../../components/Form";
import Messages from "../../components/Messages";
const Contact = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  /**
   *
   * @param {React.FormEvent<HTMLFormElement} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const msgs = [
      ...messages,
      {
        id: messages.length + 1,
        date: new Date().toUTCString(),
        message: newMessage,
      },
    ];
    setMessages(msgs)
    setNewMessage("")
  };
  /**
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement>} e
   */
  const onChange = (e) => setNewMessage(e.target.value);
  return (
    <div>
      <h1>Contact page</h1>
      <Form onSubmit={onSubmit} onChange={onChange} value = {newMessage} />
      <Messages messages={messages} />
    </div>
  );
};
export default Contact;
