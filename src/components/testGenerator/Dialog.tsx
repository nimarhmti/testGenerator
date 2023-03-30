import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
interface Props {
  open: boolean;
  dialogOpenHandler: () => void;
  dialogCloseHandler: () => void;
}
export default function AlertDialog({
  open,
  dialogOpenHandler,
  dialogCloseHandler,
}: Props) {
  const navigate = useNavigate();
  const dialogHandler = () => {
    navigate("/register");
    dialogCloseHandler();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={dialogCloseHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">توجه!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            برای دریافت نمونه سوالات ابتدا باید ثبت نلم کنید
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: "flex", gap: "10px" }}>
          <Button
            autoFocus
            variant="contained"
            color="success"
            onClick={dialogHandler}
          >
            ثبت نام
          </Button>
          <Button onClick={() => dialogCloseHandler()}>انصراف</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
