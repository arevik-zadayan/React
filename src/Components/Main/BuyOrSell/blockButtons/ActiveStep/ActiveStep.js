import React, {useContext} from 'react';
import {StepContext} from "../../../../../context/stepContext";
import styles from "./ActiveStep.module.css"

const ActiveStep = () => {
    const {step}=useContext(StepContext)

    return (
        <div className={styles['status-buttons']} >
            <div><span className={step===1 ? styles.active : ""}></span></div>
            <div><span className={step===2 ? styles.active : ""}></span></div>
            <div><span className={step===3 ? styles.active : ""}></span></div>
            <div><span className={step===4 ? styles.active : ""}></span></div>
        </div>
    );
};

export default ActiveStep;