export const getTextWithLineBreaks = (text: string) => {
  let mobileTextBreaks = text
    .replace(/\\mobilen/g, "\n") // Replace \mobilen with \n for mobile
    .replace(/\\tabletn/g, "") // Remove \tabletn sequences for mobile
    .replace(/\\n/g, ""); // Remove \n sequences for mobile

  let tabletTextBreaks = text
    .replace(/\\tabletn/g, "\n") // Replace \tabletn with \n for tablet
    .replace(/\\mobilen/g, "") // Remove \mobilen sequences for tablet
    .replace(/\\n/g, ""); // Remove \n sequences for tablet

  let desktopTextBreaks = text
    .replace(/\\n/g, "\n") // Replace \n with actual newline for desktop
    .replace(/\\mobilen/g, "") // Remove \mobilen sequences for desktop
    .replace(/\\tabletn/g, ""); // Remove \tabletn sequences for desktop

  return (
    <>
      <span className="block xsmall:hidden">
        {mobileTextBreaks.split("\n").map((line, index) => (
          <span key={index}>
            {line} <br />
          </span>
        ))}
      </span>
      <span className="hidden xsmall:block small:hidden">
        {tabletTextBreaks.split("\n").map((line, index) => (
          <span key={index}>
            {line} <br />
          </span>
        ))}
      </span>
      <span className="hidden small:block">
        {desktopTextBreaks.split("\n").map((line, index) => (
          <span key={index}>
            {line} <br />
          </span>
        ))}
      </span>
    </>
  );
};
