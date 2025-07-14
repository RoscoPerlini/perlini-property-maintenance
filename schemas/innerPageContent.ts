import { BiInfoSquare } from "react-icons/bi";

const innerPageContent = {
  name: "innerPage",
  title: "Innerpage Content",
  type: "document",
  icon: BiInfoSquare,
  fields: [
    {
      name: "aboutPage",
      title: "About Page Content",
      type: "document",
      fields: [
        {
          name: "pageMetadata",
          title: "📈 About Page Metadata",
          type: "document",
          fields: [
            {
              name: "pageTitle",
              title: "About Page Title",
              description:
                "Add title for to add text to the tab on the browser and for SEO purposes",
              type: "string",
            },
            {
              name: "pageDescription",
              title: "About Page Description",
              description: "Add a page description for SEO purposes",
              type: "string",
            },
          ],
        },
        {
          name: "pageHeading",
          title: "About Page Hero Heading",
          description:
            "Heading for the About Page. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
        {
          name: "pageImage",
          title: "About Page Hero Image",
          type: "image",
          description: "Upload an About Us Hero image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "introHeading",
          title: "Heading",
          description: "Heading for introduction on About Page ('Who we are')",
          type: "string",
        },
        {
          name: "introText",
          title: "Introduction Text",
          description:
            "Introduction text on About Page ('Who we are') --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "array",
          of: [
            {
              name: "paragraph",
              title: "Paragraph",
              type: "text",
            },
          ],
        },
        {
          name: "introBgImage",
          title: "Background Image",
          type: "image",
          description: "Background image for intro text",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "featureText",
          title: "Feature text",
          description:
            "Text in highlight box. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "text",
        },
        {
          name: "contentArea",
          title: "Content Area Text",
          description:
            "--add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "array",
          of: [
            {
              name: "paragraph",
              title: "Paragraph",
              type: "text",
            },
          ],
        },
      ],
      extends: "page",
    },

    {
      name: "ServicesPage",
      title: "Services Page Content",
      type: "document",
      fields: [
        {
          name: "pageMetadata",
          title: "📈 Services Page Metadata",
          type: "document",
          fields: [
            {
              name: "pageTitle",
              title: "Services Page Title",
              description:
                "Add title for to add text to the tab on the browser and for SEO purposes",
              type: "string",
            },
            {
              name: "pageDescription",
              title: "Services Page Description",
              description: "Add a page description for SEO purposes",
              type: "string",
            },
          ],
        },
        {
          name: "pageHeading",
          title: "Services Page Hero Heading",
          description: "Heading for the Service Page",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Services Page Hero Image",
          type: "image",
          description: "Upload a Service Hero image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "introBgImage",
          title: "Services Page Background Image",
          type: "image",
          description: "Background image for intro text",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "introHeading",
          title: "Heading",
          description:
            "Heading for introduction on Services Page ('Who we are')",
          type: "string",
        },
        {
          name: "introText",
          title: "Introduction Text",
          description:
            "Introduction text on Services Page (in purple banner) --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "text",
        },
      ],

      extends: "page",
    },

    {
      name: "ProjectsPage",
      title: "Projects Page Content",
      type: "document",
      fields: [
        {
          name: "pageMetadata",
          title: "📈 Projects Page Metadata",
          type: "document",
          fields: [
            {
              name: "pageTitle",
              title: "Projects Page Title",
              description:
                "Add title for to add text to the tab on the browser and for SEO purposes",
              type: "string",
            },
            {
              name: "pageDescription",
              title: "Projects Page Description",
              description: "Add a page description for SEO purposes",
              type: "string",
            },
          ],
        },
        {
          name: "pageHeading",
          title: "Projects Page Hero Heading",
          description:
            "Heading for the Projects Page. --add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies to desktop screen sizes",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Projects Page Hero Image",
          type: "image",
          description: "Upload a Projects Hero image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "BgImage",
          title: "Background Image / Texture",
          type: "image",
          description: "Background image for each project",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
      ],
      extends: "page",
    },
    {
      name: "FaqPage",
      title: "FAQ Page Content",
      type: "document",
      fields: [
        {
          name: "pageMetadata",
          title: "📈 FAQ Page Metadata",
          type: "document",
          fields: [
            {
              name: "pageTitle",
              title: "FAQ Page Title",
              description:
                "Add title for to add text to the tab on the browser and for SEO purposes",
              type: "string",
            },
            {
              name: "pageDescription",
              title: "FAQ Page Description",
              description: "Add a page description for SEO purposes",
              type: "string",
            },
          ],
        },
        {
          name: "pageHeading",
          title: "FAQ Page Hero Heading",
          description: "Heading for the FAQ Page",
          type: "string",
        },
        {
          name: "pageImage",
          title: "FAQ Page Hero Image",
          type: "image",
          description: "Upload a FAQ Hero image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "introTitle",
          title: "FAQ Page Introduction Title",
          description: "Heading for the FAQ Introduction",
          type: "string",
        },
        {
          name: "introMessage",
          title: "FAQ Page Introduction Message",
          description:
            "Message for the FAQ Introduction --add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies on mobile screens",
          type: "text",
        },
        {
          name: "formPlaceholder",
          title: "FAQ Search Placeholder text",
          description: "text inside search form to prompt user",
          type: "string",
        },
      ],
      extends: "page",
    },

    {
      name: "ContactPage",
      title: "Contact Page Content",
      type: "document",
      fields: [
        {
          name: "pageMetadata",
          title: "📈 Contact Page Metadata",
          type: "document",
          fields: [
            {
              name: "pageTitle",
              title: "Contact Page Title",
              description:
                "Add title for to add text to the tab on the browser and for SEO purposes",
              type: "string",
            },
            {
              name: "pageDescription",
              title: "Contact Page Description",
              description: "Add a page description for SEO purposes",
              type: "string",
            },
          ],
        },
        {
          name: "pageHeading",
          title: "Contact Page Hero Heading",
          description:
            "Heading for the Contact Page. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
        {
          name: "pageImage",
          title: "Contact Page Hero Image",
          type: "image",
          description: "Upload a Contact Hero image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "describe what is in the image let search engines know what is being shown",
            },
          ],
        },
        {
          name: "serviceAreas",
          title: "Service Areas",
          description: "Text under map",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],

  // Include the common "Page" schema
  extends: "page",

  preview: {
    prepare(value: Record<string, any>) {
      return {
        title: value.title || "Inner-page Content", // adjust as needed based on your fields
      };
    },
  },
};

export default innerPageContent;
