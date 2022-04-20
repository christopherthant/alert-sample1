import React, { Fragment, useCallback, useEffect } from 'react'

//mui material UI
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { styled } from "@mui/material/styles";

const Link = styled("a")(({ theme }) => ({
    color: "currentColor",
    fontSize: "12px",
}))

const AlertMessage = ({
    alert: { title, text, alertType, id, timeLimit, link },
    removeAlert,
}) => {
    const onClose = useCallback(() => {
        removeAlert(id);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            removeAlert(id);
        }, timeLimit * 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Alert severity={alertType} onClose={onClose}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {link ? (
                <Link href={link} target="_blank">
                    {text}
                </Link>
            ) : (
                <Fragment>{text}</Fragment>
            )}
        </Alert>
  )
}

export default AlertMessage