import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const service = {
  name: "service",
  title: "Services",
  description: "Service Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "pageMetadata",
      title: "📈 Service Page Metadata",
      type: "document",
      fields: [
        {
          name: "pageTitle",
          title: "Service Page Title",
          description:
            "Add title for to add text to the tab on the browser and for SEO purposes",
          type: "string",
        },
        {
          name: "pageDescription",
          title: "Service Page Description",
          description: "Add a page description for SEO purposes",
          type: "string",
        },
      ],
    },
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
      description:
        "Enter the name of the service.  --NOTE add '\\n' to the text where you want text to return on a new line. Only applies to the title in purple feature section (with the autoscroll text) and in mobile screen sizes",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "serviceTitle" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "serviceSummary",
      title: "Service Summary Title",
      description:
        "In a few words, summarise what this service offers. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
      type: "string",
    },
    {
      name: "serviceSummaryBodyVersion",
      title: "Service Summary Title V2(Service List title)",
      description:
        "Same text as above field but is shown on another part of the page, with different line-breaks. --add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Swiper Cover Image",
      type: "image",
      description:
        "Upload a cover image for this service's swiper card (on the homepage)",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "servicePageImage",
      title: "Cover Image for service component",
      type: "image",
      description:
        "Upload a cover image for this service's component in the Services page",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "serviceBannerImage",
      title: "Background Image for Service Banner",
      type: "image",
      description:
        "Upload a background image for this service's banner component",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Full description about this service",
      of: [{ type: "block" }],
    },

    {
      name: "serviceAsideList",
      title: "Service Aside List",
      description: "Will revert to award if empty",
      type: "document",
      fields: [
        {
          name: "listIntro",
          title: "Intro Text for Summary List",
          type: "string",
        },
        {
          name: "summaryList",
          title: "Summary List",
          type: "array",
          of: [
            {
              name: "listItem",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "additionalInfo",
      title: "Additional Information",
      description: "Ability to add sub category details to this service",
      type: "document",
      fields: [
        {
          name: "additionalList",
          title: "Additional Information List",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "listItem",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "listItemDetails",
                  title: "Text",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "awardHighlight",
      title: "Award",
      type: "document",
      fields: [
        {
          name: "awardDate",
          title: "Award Date",
          type: "string",
        },
        {
          name: "awardTitle",
          title: "Award Title",
          type: "string",
          description:
            "add '\\n' to the text where you want text to return on a new line",
        },
        {
          name: "awardLogo",
          title: "Award Logo",
          type: "image",
          description: "Upload the award logo",
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
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },
      ],
    },
  ],
  extends: "page",
};

export default service;
