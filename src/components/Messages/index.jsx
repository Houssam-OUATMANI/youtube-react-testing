import './message.css'

/**
 * @typedef MessageType
 * @type {Object}
 * @property {number} id
 * @property {string} date
 * @property {string} message
 */

/**
 * @param {Object} props
 * @param {Array<MessageType>} props.messages
 * @returns {JSX}
 * 
 */

const Messages = ({ messages }) => {
  return (
    <ul className="message-list">
      {messages.length > 0 &&
        messages.map((m) => (
          <li key={m.id}>
            <p>{m.message}</p>
            <small>{m.date}</small>
          </li>
        ))}
    </ul>
  );
};

export default Messages