import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Data = [
  { task: "clean up my house" },
  { task: "get someone to assist me (in person)" },
  { task: "pick up/drop off an item" },
  { task: "send a package" },
  { task: "carry a household item" },
  { task: "shop for groceries" },
  { task: "get pet supplies/pet care" },
  { task: "manage my YouTube Channel" },
  { task: "conduct web research" },
  { task: "manage my calendar" },
];

const SmallBoxMd = () => {
  return (
    <div className="loca-modal-container">
      <div className="list-items-box">
        {Data.map((data, index) => (
          <div className="each-bx-loc flex" key={index}>
            <div className="each-loc">{data.loc}</div>
            <AiOutlineClose />
          </div>
        ))}
      </div>
      <div className="cat-box-sear flex red-wd">
        <div className="txt-err">Add more</div>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default SmallBoxMd;
