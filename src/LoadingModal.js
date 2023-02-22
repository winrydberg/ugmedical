import "./modal.css";

const LoadingModal = ({ handleClose, show, children, text }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section
        className="modal-main"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <i className="fa fa-spinner fa-spin fa-2x"></i>
          <p>{text}</p>
        </div>

        {/* <button type="button btn bt-pr" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
  );
};

export default LoadingModal;
