import { useState } from "react";
import Buttons from "../../components/Buttons";
import ClickCount from "../../components/ClickCount";
import "./home.css";
const Home = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="home">
      <h1>Home page</h1>
      <ClickCount count={count} />
      <Buttons count={count} decrement={decrement} increment={increment} />
    </div>
  );
};

export default Home;
