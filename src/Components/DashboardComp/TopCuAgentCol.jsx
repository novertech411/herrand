const data = [
  {
    name: "David Brown",
    errands: "200 Errands completed",
  },
  {
    name: "Emily Davis",
    errands: "180 Errands completed",
  },
  {
    name: "Robert Miller",
    errands: "50 Errands completed",
  },
  {
    name: "Olivia Wilson",
    errands: "300 Errands completed",
  },
  {
    name: "William Moore",
    errands: "270 Errands completed",
  },
  {
    name: "Ava Taylor",
    errands: "190 Errands completed",
  },
];
const TopCuAgentCol = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="top-cus-container">
          <div className="image-conter">
            <img
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              alt=""
            />
            <div className="tag-dd flex">#{index + 1}</div>
          </div>
          <div className="top-details">
            <div className="name-cus">{item.name}</div>
            <div className="erand">{item.errands}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCuAgentCol;
