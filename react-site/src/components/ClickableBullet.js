import "../styles.css";

const ClickableBullet = ({
  clickable,
  clicked,
  handleClickOpen,
  detailsHeight,
  headerTitle,
  headerSubtitle,
  headerInfo,
  bodyContent,
}) => {
  return (
    <div className="bullet">
      {/* clickable arrow or not */}
      {clickable ? (
        <div onClick={handleClickOpen}>
          <i
            className={
              clicked
                ? "fa fa-angle-right clickableArrow"
                : "fa fa-angle-down clickableArrow"
            }
          />
        </div>
      ) : (
        <div>
          <i className="fa fa-angle-right staticArrow" />
        </div>
      )}
      <div>
        {/* clickable header or not */}
        {clickable ? (
          <div className="clickableHeader" onClick={handleClickOpen}>
            <div className="title">{headerTitle}</div>
            <div className="subtitle">{headerSubtitle}</div>
            <div className="info">{headerInfo}</div>
          </div>
        ) : (
          <div className="staticHeader">
            <div className="title">{headerTitle}</div>
            <div className="subtitle">{headerSubtitle}</div>
            <div className="info">{headerInfo}</div>
          </div>
        )}
        {/* body only when clickable */}
        {clickable && (
          <div
            className={clicked ? "detailsClose" : "detailsOpen"}
            style={{
              maxHeight: clicked ? "0px" : detailsHeight,
              textAlign: "justify",
            }}
          >
            {bodyContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClickableBullet;
