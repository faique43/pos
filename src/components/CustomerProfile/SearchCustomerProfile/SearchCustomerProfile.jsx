import React from 'react';
import styles from './SearchCustomerProfile.module.css';
import Modal from '../../Modal/Modal';
import Input from '../../UI/Input';
import cross from '../../../assets/crossBlack.png';

export default function SearchCustomerProfile(props) {
  return (
    <Modal>
        <div className={`${styles.flexCol} ${styles.container}`}>
            <div className={`${styles.flexRowTop} ${styles.r1Head}`}>
                <h5>Set Customer's Profile</h5>
                <img
                    className={styles.pointer}
                    src={cross}
                    alt="cross"
                    width="25"
                    height="25"
                    onClick={props.onClose}
                />
            </div>

            <hr />

            <div className={`${styles.flexRow} ${styles.r2Name}`}>
                <div className={`${styles.flexCol} ${styles.errors}`}>
                <h6>Current Customer:</h6>
                <Input
                  value='Guest'
                  placeholder='Guest'
                    onChange={(event) => {
                    //   setFName(event.target.value);
                    }}
                />
                </div>
            </div>

            <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol} ${styles.errors}`}>
                <h6>Search User:</h6>
                <Input
                    onChange={(event) => {
                    //   setFName(event.target.value);
                    }}
                />
                </div>

            </div>

            <button className ={styles.btn} onClick={props.showNewCustomerProfile}>Create new Customer profile</button>
        </div>
    </Modal>
  )
}
