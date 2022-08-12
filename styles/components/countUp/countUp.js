import { useCountUp } from "react-countup";
import { FrameworkDescription } from "../../pages/home/home";
import { Title } from "../StickySection/StickySection";

const CountupHook = ({ end, id, description }) => {
  useCountUp({ ref: id, end: end, duration: 1 });
  return (
    <>
      <Title id={id} style={{ margin: "0px" }} />
      <FrameworkDescription>{description}</FrameworkDescription>
    </>
  );
};
export default CountupHook;
