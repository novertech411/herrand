import { IoLogOutOutline } from "react-icons/io5";
const LogModal = ({ gotoLog }) => {
  return (
    <div className="log-modal-container">
      <div className="pro-txt-bx">
        <div className="name-down">
          <div className="pro-text ban">Adeniyi Tosin</div>
        </div>
        <div className="adm-tst">Admin</div>
      </div>
      <hr className="rh-lne" />
      <div className="lo-out-btn" onClick={gotoLog}>
        <IoLogOutOutline />
        <div className="out-tct-v">Log out</div>
      </div>
    </div>
  );
};

export default LogModal;
