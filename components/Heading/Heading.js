import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ content, level, textAlign }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getTextAlign(
      textAlign
    )} ${getFontSizeForHeading(level)}`,
  });
  return tag;
};
