import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";

function SuccessModal({ open, handleClose, name }) {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose} color="secondary">
              <MdClose />
            </IconButton>
          </Box>
          <Stack spacing={1}>
            <Typography variant="h4" align="center" color="secondary">
              Thank you {name}
            </Typography>
            <Typography variant="body1" align="center" color="textPrimary">
              Your message was sent successfully
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default SuccessModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
