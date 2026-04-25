import { useParams } from "react-router-dom";

const CarDetils = () => {
  const { id } = useParams();
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Car Details</h1>
        <p className="mt-4 text-xl">
          You are looking at the car with ID:{" "}
          <span className="text-blue-600">{id}</span>
        </p>
        {/* You can now use this ID to fetch specific car data from an API or array */}
      </div>
    </>
  );
};

export default CarDetils;
