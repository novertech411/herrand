import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import AddMore from "./AddMore";

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
  { task: "manage my email inbox" },
  { task: "manage my Facebook page" },
  { task: "manage my Instagram page" },
  { task: "manage my LinkedIn page" },
  { task: "manage my Twitter page" },
  { task: "take meeting notes" },
  { task: "manage my Telegram group/channel" },
  { task: "manage my TikTok account" },
  { task: "schedule appointments" },
  { task: "place phone calls" },
  { task: "arrange my travels" },
  { task: "type a document" },
  { task: "do data entry" },
];

const YouCanModal = () => {
  const [isInpOpen, setIsInpOpen] = useState(false);

  const handleInpClick = () => {
    setIsInpOpen(!isInpOpen);
  };
  return (
    <>
      {" "}
      {isInpOpen && <AddMore />}
      <div className="loca-modal-container">
        <div className="list-items-box">
          {Data.map((data, index) => (
            <div className="each-bx-loc flex" key={index}>
              <div className="each-loc">{data.task}</div>
              <AiOutlineClose className="cls-cn" />
            </div>
          ))}
        </div>
        <div className="cat-box-sear flex red-wd" onClick={handleInpClick}>
          <div className="txt-err">Add more</div>
          <AiOutlinePlus />
        </div>
      </div>
    </>
  );
};

export default YouCanModal;
