import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}
export default function AlertDialog({
  isOpen,
  title,
  onClose,
  children,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
