import { Alert as FlowbiteAlert } from 'flowbite-react';
import { HiInformationCircle } from "react-icons/hi";
import React, { useEffect, useState } from 'react'

const AlertComponent = ({ message, isVisible, setIsVisible }) => {
    useEffect(() => {
        let timer;
        if (isVisible) {
            timer = setTimeout(() => {
                setIsVisible(!isVisible);
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isVisible, setIsVisible]);
    return (
        <>
      {isVisible && (
        <FlowbiteAlert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">{message}</span>
      </FlowbiteAlert>
      )}
    </>
    )
}

export default AlertComponent