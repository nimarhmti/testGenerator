import React from "react";
import type { PropsWithChildren } from "react";
import { Box } from "@mui/system";
import HelpIcon from "@mui/icons-material/Help";
import { Typography } from "@mui/material";
interface props {
  title?: string;
  helpNote?: string[] | string;
}
export const FromWrapper: React.FC<props & PropsWithChildren> = ({
  title,
  children,
  helpNote,
}) => {
  const displayNoteMessage = () => {
    return;
  };

  return (
    <Box
      sx={{
        boxShadow: "0 0 8px #ddd",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "6px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          fontWeight: "bolder",
        }}
      >
        <span>{title}</span>
        {helpNote ? <HelpIcon /> : null}
      </Typography>
      {children}
    </Box>
  );
};
