import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const locations = [
  { loc: "Lagos" },
  { loc: "Abuja" },
  { loc: "Kano" },
  { loc: "Ibadan" },
  { loc: "Kaduna" },
  { loc: "Port Harcourt" },
  { loc: "Benin City" },
  { loc: "Maiduguri" },
  { loc: "Zaria" },
  { loc: "Aba" },
  { loc: "Jos" },
  { loc: "Ilorin" },
  { loc: "Oyo" },
  { loc: "Enugu" },
  { loc: "Abeokuta" },
  { loc: "Onitsha" },
  { loc: "Warri" },
  { loc: "Sokoto" },
  { loc: "Asaba" },
  { loc: "Bauchi" },
  { loc: "Ado Ekiti" },
  { loc: "Awka" },
  { loc: "Gombe" },
  { loc: "Jimeta" },
  { loc: "Gusau" },
  { loc: "Mubi" },
  { loc: "Ikot Ekpene" },
  { loc: "Okene" },
  { loc: "Calabar" },
  { loc: "Yola" },
  { loc: "Efon-Alaaye" },
  { loc: "Gashua" },
  { loc: "Hadejia" },
  { loc: "Ijebu-Igbo" },
  { loc: "Effium" },
];

const LocatedModal = () => {
  return (
    <div className="loca-modal-container">
      <div className="list-items-box">
        {locations.map((location, index) => (
          <div className="each-bx-loc flex" key={index}>
            <div className="each-loc">{location.loc}</div>
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

export default LocatedModal;
