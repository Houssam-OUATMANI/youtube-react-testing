import "./clickCount.css";
const ClickCount = ({ count }) => {
  return (
    <p  className="count">
      {count} {count !== 1 ? "clicks" : "click"}
    </p>
  );
};

export default ClickCount;
