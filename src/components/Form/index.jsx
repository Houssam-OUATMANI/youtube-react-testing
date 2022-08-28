import "./form.css";
const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <textarea
        onChange={onChange}
        value={value}
        placeholder="enter your message"
        required={true}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
