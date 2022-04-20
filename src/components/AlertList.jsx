// mui material UI
import Stack from "@mui/material/Stack";

// components
import AlertMessage from "./AlertMessage";

const AlertList = ({
    alerts, removeAlert
}) => {
  return (
    <Stack>
        {alerts.map((alert) => (
            <AlertMessage
                key={alert.id}
                alert={alert}
                removeAlert={removeAlert}
            />
        ))}
    </Stack>
  )
}

export default AlertList