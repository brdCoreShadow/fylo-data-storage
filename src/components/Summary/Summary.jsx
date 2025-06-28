import * as SC from "./SummaryStyled";

const Summary = () => {
  return (
    <SC.SummaryCon>
      <h3>
        You’ve used <span>815 GB</span> of your storage
      </h3>
      <div className="scale-container">
        <div className="scale-bar">
          <div className="indicator"></div>
        </div>
      </div>
      <SC.StorageCon>
        <p>0 GB</p>
        <p>1000 GB</p>
      </SC.StorageCon>
      <SC.LeftCon>
        <h4>185</h4>
        <p>gb left</p>
      </SC.LeftCon>
    </SC.SummaryCon>
  );
};

export default Summary;
