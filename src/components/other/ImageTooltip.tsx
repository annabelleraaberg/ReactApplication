import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface ImageTooltipProps {
  name: string;
}

const ImageTooltip: React.FC<ImageTooltipProps> = ({ name }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip>
          <p>Driver: {name}</p>
        </Tooltip>
      }
    >
      <span style={{ textDecoration: "underline", cursor: "pointer" }}>
        Hover
      </span>
    </OverlayTrigger>
  );
};

export default ImageTooltip;
