import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { getMessage, getSeverity, isOpen } from "./selectors";
import { closeNotification } from "./notificationsSlice";

const Notifications: FunctionComponent = () => {
  const dispatch = useDispatch();
  const open = useSelector(isOpen);
  const message = useSelector(getMessage);
  const severity = useSelector(getSeverity);

  const onClose = () => dispatch(closeNotification());

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert variant="filled" severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
