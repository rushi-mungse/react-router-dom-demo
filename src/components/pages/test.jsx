import { useParams } from "react-router-dom";

const Test = () => {
  const { query } = useParams();
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl">Test : {query}</h1>
    </div>
  );
};

export default Test;
