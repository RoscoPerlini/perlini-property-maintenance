// export const applyAspectRatioFallback = () => {
//   if (!CSS.supports("aspect-ratio", "1 / 1")) {
//     const elements = document.querySelectorAll("[data-aspect-ratio]");

//     elements.forEach((element) => {
//       const el = element as HTMLElement;
//       const defaultAspectRatio = el.dataset.aspectRatio || "1/1"; // Provide a default aspect ratio
//       const breakpoints = el.dataset.breakpoints
//         ? JSON.parse(el.dataset.breakpoints)
//         : {};

//       const applyStyles = (aspectRatio: string) => {
//         if (aspectRatio) {
//           const [width, height] = aspectRatio.split("/").map(Number);
//           const paddingTop = (height / width) * 100;

//           el.style.position = "relative";
//           el.style.width = "100%";
//           el.style.paddingTop = `${paddingTop}%`;
//           el.style.overflow = "hidden";
//           el.style.height = "0";

//           const child = el.firstElementChild as HTMLElement;
//           if (child) {
//             child.style.position = "absolute";
//             child.style.top = "0";
//             child.style.left = "0";
//             child.style.width = "100%";
//             child.style.height = "100%";
//           }
//         }
//       };

//       applyStyles(defaultAspectRatio);

//       const mediaQueryLists = Object.keys(breakpoints).map((breakpoint) => {
//         const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
//         mql.addEventListener("change", (e) => {
//           if (e.matches) {
//             applyStyles(breakpoints[breakpoint]);
//           } else {
//             applyStyles(defaultAspectRatio);
//           }
//         });
//         return mql;
//       });

//       mediaQueryLists.forEach((mql) => {
//         const breakpoint = mql.media.match(/\d+/)?.[0];
//         if (breakpoint && mql.matches) {
//           applyStyles(breakpoints[breakpoint]);
//         }
//       });
//     });
//   }
// };
