const PriceControl = ({ handlePriceCloseClick }) => {
  return (
    <div className="terms-privacy-container">
      <div className="top-box-cont">PRICE CONTROL</div>
      <form action="">
        <div className="lab-inp-container">
          <label htmlFor="">I need a bike for this errand</label>
          <input type="text" className="pri-con" placeholder="#120" />
          <label htmlFor="">/km</label>
        </div>
        <div className="lab-inp-container">
          <label htmlFor="">I need a car for this errand</label>
          <input type="text" className="pri-con" placeholder="#200" />
          <label htmlFor="">/km</label>
        </div>
        <div className="lab-inp-container">
          <label htmlFor="">I need a van for this errand</label>
          <input type="text" className="pri-con" placeholder="#300" />
          <label htmlFor="">/km</label>
        </div>
        <div className="lab-inp-container">
          <label htmlFor="">I need someone for this errand</label>
          <input type="text" className="pri-con" placeholder="#3000" />
          <label htmlFor="">/hr</label>
        </div>
      </form>
      <div className="top-box-cont rght flex">
        <button className="close-bbtn nobg" onClick={handlePriceCloseClick}>
          Ok
        </button>
        <button className="close-bbtn" onClick={handlePriceCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PriceControl;
