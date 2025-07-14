export const removelineBreakCodeFromHTML = (text: string) => {
  let textWithoutLineBreaks;

  textWithoutLineBreaks = text;
  if (
    (typeof textWithoutLineBreaks === "string" &&
      textWithoutLineBreaks?.includes("\\n")) ||
    textWithoutLineBreaks?.includes("\\mobilen") ||
    textWithoutLineBreaks?.includes("\\tabletn")
  ) {
    textWithoutLineBreaks = textWithoutLineBreaks
      .replace(/\\n/g, "")
      .replace(/\\mobilen/g, "")
      .replace(/\\tabletn/g, "");
  }
  return textWithoutLineBreaks;
};
