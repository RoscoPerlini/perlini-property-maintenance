import { FaHome } from "react-icons/fa";

const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: FaHome,
  fields: [
    {
      name: "pageMetadata",
      title: "📈 Homepage Metadata",
      type: "document",
      fields: [
        {
          name: "pageTitle",
          title: "Homepage Title",
          description:
            "Add title for to add text to the tab on the browser and for SEO purposes",
          type: "string",
        },
        {
          name: "pageDescription",
          title: "Homepage Description",
          description: "Add a page description for SEO purposes",
          type: "string",
        },
      ],
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    },
    {
      name: "heroText",
      title: "Hero Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "heroServicesButtonText",
      title: "Hero 'Services' Button Text",
      description: "Text shown on Hero CTA button",
      type: "string",
    },
    {
      name: "heroContactButtonText",
      title: "Hero 'Contact Us' Button Text",
      description: "Text shown on Hero CTA button",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Upload a Hero image",
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

    // ==== ABOUT SECTION ==== //
    {
      name: "introSection",
      title: "Introduction Section",
      type: "document",
      fields: [
        {
          name: "introImage",
          title: "Intro Image",
          type: "image",
          description: "Upload an image for the introduction section",
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
          name: "introSubheading",
          title: "Intro Subheading",
          type: "string",
        },
        {
          name: "introHeading",
          title: "Intro Heading",
          type: "string",
        },
        {
          name: "introText",
          title: "Introduction Text",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "aboutUsButton",
          title: "About Us Button",
          description: "Text shown on About Us button",
          type: "string",
        },
      ],
    },
    // === SERVICES SECTION === //
    {
      name: "servicesSection",
      title: "Services Section",
      type: "document",
      fields: [
        {
          name: "servicesSubheading",
          title: "Services Subheading",
          type: "string",
        },
        {
          name: "servicesHeading",
          title: "Services Heading",
          type: "string",
        },
        {
          name: "servicesLinkTitle",
          title: "Link Title",
          type: "string",
        },
      ],
    },
    // === MAILING LIST CTS === //
    {
      name: "mailingListCta",
      title: "Mailing List CTA",
      type: "document",
      fields: [
        {
          name: "mailingListHeading",
          title: "Mailing List Heading",
          type: "string",
        },
        {
          name: "mailingListText",
          title: "Mailing List Text",
          type: "string",
        },
        {
          name: "mailingListPlaceholder",
          title: "Input Placeholder Text",
          type: "string",
        },
        {
          name: "mailingListButtonText",
          title: "Button Text",
          description: "Text shown on mailing list CTA button",
          type: "string",
        },
      ],
    },
    // === LATEST PROJECTS === //
    {
      name: "projectsSection",
      title: "Latest Projects Section",
      type: "document",
      fields: [
        {
          name: "projectsSubheading",
          title: "Projects Subheading",
          type: "string",
        },
        {
          name: "projectsHeading",
          title: "Projects Heading",
          type: "string",
        },
        {
          name: "projectsButtonText",
          title: "Button Text",
          description: "Text shown on projects button",
          type: "string",
        },
      ],
    },
    // === TOT Promo === //
    {
      name: "totPromo",
      title: "Trick of the Trade's Promotion",
      type: "document",
      fields: [
        {
          name: "promoMessage",
          title: "Promotion Message",
          description:
            "--add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
          type: "string",
        },
      ],
    },
    // === Testimonials === //
    {
      name: "testimonialsSection",
      title: "Testimonials",
      type: "document",
      fields: [
        {
          name: "testimonialsSectionTitle",
          title: "Testimonials Section Title",
          description: "Enter a title for the testimonial section",
          type: "string",
        },
        {
          name: "testimonialsList",
          title: "Testimonials",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "position",
                  title: "Company",
                  type: "string",
                },
                {
                  name: "message",
                  title: "Message",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    //=== AWARDS ===//
    {
      name: "awardsSection",
      title: "Awards",
      type: "document",
      fields: [
        {
          name: "awardsSectionSubTitle",
          title: "Awards Sub Title",
          type: "string",
          description:
            "--add '\\n'(desktop), '\\tabletn' or '\\mobilen' to the text where you want text to return on a new line.",
        },
        {
          name: "awardsSectionTitle",
          title: "Awards Section Title",
          description:
            "add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies on mobile screens",
          type: "string",
        },
        {
          name: "awardsSectionText",
          title: "Awards Section Text",
          description:
            "add content to the text region under the awards section titles",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "awardsList",
          title: "Awards",
          type: "array",
          of: [
            {
              type: "object",
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
          ],
        },
      ],
    },
    // CONTACT US SECTION
    {
      name: "contactUs",
      title: "Contact Us Section",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Contact Section Title",
          type: "string",
        },
        {
          name: "message",
          title: "Contact Section Message",
          description:
            "add '\\n' to the text where you want text to return on a new line.  *NOTE - this only applies on screens bigger than mobile",
          type: "text",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "contactNumber",
          title: "Contact Number",
          description:
            "to be shown on contact form while also updating the contact number linked to the button",
          type: "string",
        },
        {
          name: "emailAddress",
          title: "Email Address",
          description:
            "to be linked to the email address linked to email button",
          type: "string",
        },
        {
          name: "phoneButtonText",
          title: "Phone Button Text",
          description: "text to appear on 'Phone Us' button",
          type: "string",
        },
        {
          name: "emailButtonText",
          title: "Email Button Text",
          description: "text to appear on 'Email Us' button",
          type: "string",
        },
      ],
    },
  ],

  // Include the common "Page" schema
  extends: "page",

  preview: {
    prepare(value: Record<string, any>) {
      return {
        title: value.title || "Homepage Content", // adjust as needed based on your fields
      };
    },
  },
};

export default homepage;
