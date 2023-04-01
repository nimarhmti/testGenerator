import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
export interface AlertInfo {
  result: boolean;
  message: string;
}
interface Props extends AlertInfo {
  isOpen: boolean;
  onClose: () => void;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const AlertMessage = ({ result, message, isOpen, onClose }: Props) => {
  const [state, setState] = React.useState<SnackbarOrigin>({
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    onClose();
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isOpen}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          icon={false}
          //   onClose={handleClose}
          severity={result ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
