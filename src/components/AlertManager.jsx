import { useCallback, useState } from "react";

// mui material UI
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

// images
import imgUrl from "../images/workhard.png";

// hooks
import { AlertReducer } from "../hooks/AlertReducer";

// components
import AlertList from "./AlertList";

/* Styles (CSS in JS) */
const Container = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  padding: spacing(4),
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: blue[100],
  maxHeight: "100vh",
  height: "100vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  [breakpoints.down("sm")]: {
    flexDirection: "column",
    maxHeight: "max-content",
    overflowY: "auto",
  },
}));

const Image = styled("img")(({ theme: { spacing, breakpoints } }) => ({
  width: "50%",
  height: "100%",
  objectFit: "contain",
  [breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

const Form = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  padding: spacing(4),
  backgroundColor: "white",
  borderRadius: spacing(1),
  width: "50%",
  maxWidth: "500px",
  boxSizing: "border-box",
  [breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: spacing(2),
    marginTop: spacing(2),
  },
}));

const TextFieldWithLabel = styled(TextField)(({ theme: { spacing } }) => ({
  marginTop: spacing(1),
  marginBottom: spacing(2),
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
}));

const Title = styled(Typography)(({ theme: { spacing } }) => ({
  paddingLeft: spacing(4),
  marginBottom: spacing(2),
  fontSize: "24px",
  fontWeight: "bold",
  color: "black",
  lineHeight: 1.5,
}));

const AlertsWrapper = styled(Box)(({ theme: { spacing } }) => ({
  position: "fixed",
  zIndex: 20,
  top: spacing(4),
  right: spacing(2),
  width: "400px",
  maxWidth: "400px",
}));
/* End Styles */

const AlertManager = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [timeLimit, setTimeLimit] = useState(10);
  const [link, setLink] = useState("");

  const [alerts, { addAlert, removeAlert }] = AlertReducer();

  // using useCallback prevents recreating the function objects on every render
  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleChangeTimeLimit = useCallback((e) => {
    setTimeLimit(e.target.value);
  }, []);

  const handleChangeLink = useCallback((e) => {
    setLink(e.target.value);
  }, []);

  const handleChangeAlertType = useCallback((e) => {
    setAlertType(e.target.value);
  }, []);

  const handleAddAlert = () => {
    const payload = {
      title,
      text,
      alertType,
      timeLimit: Number(timeLimit) ? Number(timeLimit) : 10,
      link,
    };
    addAlert(payload);
  };

  return (
    <Container>
        <Image src={imgUrl} alt="Work hard" />
        {/* Add New Alert Form */}
        <Form component="form" autoComplete="off" spacing={1}>
            <Title>Add New Alert</Title>
            <TextFieldWithLabel
            label="Title"
            InputLabelProps={{
                shrink: true,
            }}
            size="small"
            value={title}
            onChange={handleChangeTitle}
            />
            <TextFieldWithLabel
            required
            error={!text}
            label="Description"
            InputLabelProps={{
                shrink: true,
            }}
            size="small"
            value={text}
            onChange={handleChangeText}
            />
            <TextFieldWithLabel
            type="number"
            label="Time Limit (seconds)"
            InputLabelProps={{
                shrink: true,
            }}
            size="small"
            value={timeLimit}
            onChange={handleChangeTimeLimit}
            />
            <TextFieldWithLabel
            label="Link"
            InputLabelProps={{
                shrink: true,
            }}
            size="small"
            value={link}
            onChange={handleChangeLink}
            />
            <FormControl
            sx={{
                m: 1,
                minWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
            size="small"
            >
            <InputLabel id="alertType">Alert Type</InputLabel>
            <Select
                labelId="alertType"
                id="alertType"
                value={alertType}
                label="Alert Type"
                onChange={handleChangeAlertType}
            >
                <MenuItem value="success">Success</MenuItem>
                <MenuItem value="info">Info</MenuItem>
                <MenuItem value="warning">Warning</MenuItem>
                <MenuItem value="error">Error</MenuItem>
            </Select>
            </FormControl>
            <Button
            variant="contained"
            onClick={handleAddAlert}
            sx={{
                m: 1,
                mt: 4,
                minWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
            disabled={!text}
            >
            Add Alert
            </Button>
        </Form>
        {/* End Add New Alert Form */}

        {/* Alerts Appearing Area */}
        <AlertsWrapper>
            <AlertList alerts={alerts} removeAlert={removeAlert} />
        </AlertsWrapper>
        {/* Alerts */}
    </Container>
  )
}

export default AlertManager