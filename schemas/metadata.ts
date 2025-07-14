import { BiData } from "react-icons/bi";

const metadata = {
  name: "metadata",
  title: "Metadata and Policies",
  type: "document",
  icon: BiData,
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Aim for around 150 - 160 characters",
      type: "string",
    },
    {
      name: "contactDetails",
      title: "Contact Details",
      type: "document",
      fields: [
        {
          name: "telephone",
          title: "Telephone",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
    {
      name: "location",
      title: "Location",
      type: "document",
      fields: [
        {
          name: "streetAddress",
          title: "Street Address",
          type: "string",
        },
        {
          name: "addressLocality",
          title: "Address Locality",
          type: "string",
        },
        {
          name: "addressRegion",
          title: "Address Region",
          type: "string",
        },
        {
          name: "addressCountry",
          title: "Address Country",
          type: "string",
        },
        {
          name: "postalCode",
          title: "Postal Code",
          type: "string",
        },
        {
          name: "geo",
          title: "geolocation",
          type: "document",
          fields: [
            {
              name: "latitude",
              title: "Latitude",
              type: "string",
            },
            {
              name: "longitude",
              title: "Longitude",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "openingHours",
      title: "Opening Hours",
      type: "document",
      fields: [
        {
          name: "open",
          title: "Open",
          type: "string",
        },
        {
          name: "close",
          title: "Close",
          type: "string",
        },
      ],
    },

    {
      name: "areasServed",
      title: "Areas Served",
      type: "string",
    },

    {
      name: "policies",
      title: "Policies",
      type: "document",
      fields: [
        {
          name: "pageTitle",
          title: "Page Title",
          type: "string",
        },
        {
          name: "policies",
          title: "Policies",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "terms",
      title: "Terms and Conditions",
      type: "document",
      fields: [
        {
          name: "pageTitle",
          title: "Page Title",
          type: "string",
        },
        {
          name: "terms",
          title: "Terms and Conditions",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],

  preview: {
    prepare(value: Record<string, any>) {
      return {
        title: value.title || "Metadata and Policies", // adjust as needed based on your fields
      };
    },
  },
};

export default metadata;
