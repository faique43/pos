import React from "react";
import Modal from "../Modal/Modal";
import cross from "../../assets/cross.png";

function CashManage(props) {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <div>
          <span>Open Register</span>
        </div>
        <div>
          <form>
            <div>
              <div>
                <label htmlFor="status">Add or Remove Cash</label>
                <select
                  name="status"
                  id="status"
                >
                  <option value="ADD">+ ADD</option>
                  <option value="Remove">- Remove</option>
                </select>
              </div>
              <div>
                  <label htmlFor="input">Cash in Hand</label>
                  <input name="input" id="input" type="number" placeholder="RS"></input>
              </div>
              <div>
                  <label htmlFor="reason">Reason</label>
                  <input type="text" name="reason" id="reason" />
              </div>
              <div>
                  
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </Modal>
  );
}

export default CashManage;
