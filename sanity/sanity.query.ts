import { groq } from "next-sanity";
import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageQueryResult } from "@/types";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: String) {
  return builder.image(source); // Directly return the URL string
}

interface Hotspot {
  width: number;
  x: number;
  y: number;
  _type: "sanity.imageHotspot";
  height: number;
}

export const getCroppedImageSrc = (image: SanityImageQueryResult): string => {
  const imageRef = image?.assetRef || image?.asset?._ref;
  const crop = image?.crop;

  if (!imageRef) {
    console.error("No image reference found");
    return ""; // or return a default image placeholder if you have one
  }

  // Assuming these functions are updated to safely handle the case where imageRef is not a valid SanityImageSource
  const { width, height } = getImageDimensions(imageRef);
  let url = urlFor(imageRef);
  let urlBuilder = urlFor(imageRef); // This now returns an ImageUrlBuilder object

  if (crop) {
    const { width, height } = getImageDimensions(imageRef);
    const left = Math.round(width * crop.left);
    const top = Math.round(height * crop.top);
    const croppedWidth = Math.round(width * (1 - crop.left - crop.right));
    const croppedHeight = Math.round(height * (1 - crop.top - crop.bottom));

    urlBuilder = urlBuilder.rect(left, top, croppedWidth, croppedHeight);
  }

  return urlBuilder.url();
};

export default function getPositionFromHotspot(hotspot?: Hotspot) {
  // Marking `hotspot` as optional
  if (!hotspot) return "center";

  return `${hotspot.x * 100}% ${hotspot.y * 100}%`;
}

export async function getHero() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      _id,
      pageMetadata {
          pageTitle,
          pageDescription
        },
      heroHeading,
      heroText,
      heroButtonText,
      heroImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
    }`
  );
}
export const heroContent = groq`*[_type == "homepage"]{
      _id,
      heroHeading,
      heroText,
      heroButtonText,
      heroImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
    }`;

export async function getIntro() {
  return client.fetch(
    groq`*[_type == 'homepage'] {
        _id,
      introSection {
        introSubheading,
        introHeading,
        introText,
        aboutUsButton,
        introImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      }
    }`
  );
}
export const introContent = groq`*[_type == 'homepage'] {
        _id,
      introSection {
        introSubheading,
        introHeading,
        introText,
        aboutUsButton,
        introImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      }
    }`;

export async function getServicesSectionTitles() {
  return client.fetch(
    groq`*[_type == 'homepage'] {
      servicesSection {
        servicesSubheading,
        servicesHeading,
        servicesLinkTitle,
      }
    }`
  );
}

export const getServiceLinks = groq`*[_type == "service"]{
      _id,
      serviceTitle,
      "slug": slug.current,
      coverImage {alt, "image": asset->url},
      servicePageImage {alt, "image": asset->url},
      serviceAsideList,
      additionalInfo,
      description,
      serviceSummary,
      serviceSummaryBodyVersion,
    }`;

export async function getSingleService(slug: string) {
  return client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      serviceTitle,
      "slug": slug.current,
      serviceSummary,
      serviceSummaryBodyVersion,
      pageMetadata {
          pageTitle,
          pageDescription
        },
      coverImage {alt, "image": asset->url},
      servicePageImage {
        alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      serviceBannerImage {
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      description,
      serviceAsideList,
      additionalInfo,
      awardHighlight {
        awardDate,
        awardLogo {alt, "image": asset->url},
        awardTitle,
      },
      gallery {
            images[] {
              _id,
              alt,
              "image": asset->url,
              asset->{_ref},
              crop {
                _type,
                bottom,
                left,
                top,
                right
              },
              hotspot {
                _type,
                height,
                width,
                x,
                y
              }
            }
          },
    }`,
    { slug }
  );
}
export const SINGLE_SERVICE = groq`*[_type == "service" && slug.current == $slug][0]
{
      _id,
      serviceTitle,
      "slug": slug.current,
      serviceSummary,
      serviceSummaryBodyVersion,
      coverImage {alt, "image": asset->url},
      servicePageImage {
        alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      serviceBannerImage {
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      description,
      serviceAsideList,
      additionalInfo,
      awardHighlight {
        awardDate,
        awardLogo {alt, "image": asset->url},
        awardTitle,
      },
      gallery {
            images[] {
              _id,
              alt,
              "image": asset->url,
              asset->{_ref},
              crop {
                _type,
                bottom,
                left,
                top,
                right
              },
              hotspot {
                _type,
                height,
                width,
                x,
                y
              }
            }
          },
    }`;

export async function getMailingListCta() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      mailingListCta {
        mailingListHeading,
        mailingListText,
        mailingListPlaceholder,
        mailingListButtonText
      }
    }`
  );
}
export const mailingListCta = groq`*[_type == "homepage"]{
      mailingListCta {
        mailingListHeading,
        mailingListText,
        mailingListPlaceholder,
        mailingListButtonText
      }
    }`;

export async function getProjectsSection() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      projectsSection {
        projectsSubheading,
        projectsHeading,
        projectsButtonText,
      }
    }`
  );
}

export async function getAllProjects() {
  return client.fetch(
    groq`*[_type == "projects"] | order(orderPosition asc)    {
      _id,
      projectTitle,
      orderPosition,
      "slug": slug.current,
      projectSummary,
      completionTimeframe,
      projectLocation,
      "categories": categories[]->{
        serviceTitle,
        _id,
        serviceBannerImage{
          alt,
          "image": asset->url, // For fetching the URL
          "assetRef": asset._ref,
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
        }
      },
      image {
        alt,
        "image": asset->url,
        asset{
          _ref,
            },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      beforeAfter {
        beforeImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },
        afterImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },

      },
      beforeAfterMobile {
        beforeImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },
        afterImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },

      },
      gallery {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          }
        },
      galleryMobile {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          }
        }
    }
        `
  );
}
export const allProjects = groq`*[_type == "projects"] | order(orderPosition asc){
      _id,
      projectTitle,
      orderPosition,
      "slug": slug.current,
      projectSummary,
      completionTimeframe,
      projectLocation,
      "categories": categories[]->{
        serviceTitle,
        _id,
        serviceBannerImage{
          alt,
          "image": asset->url, // For fetching the URL
          "assetRef": asset._ref,
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
        }
      },
      image {
        alt,
        "image": asset->url,
        asset{
          _ref,
            },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      beforeAfter {
        beforeImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },
        afterImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },

      },
      gallery {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          }
        },
        beforeAfterMobile {
        beforeImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },
        afterImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },

      },
        galleryMobile {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          }
        }
    }
        `;

export async function getTotPromo() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      totPromo {
        promoMessage
      }
    }`
  );
}
export const totPromoContent = groq`*[_type == "homepage"]{
      totPromo {
        promoMessage
      }
    }`;

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "homepage"] {
      testimonialsSection{
        testimonialsSectionTitle,
        testimonialsList[]{
          name,
          position,
          message
        }
      }
    }`
  );
}
export const testimonialContent = groq`*[_type == "homepage"] {
      testimonialsSection{
        testimonialsSectionTitle,
        testimonialsList[]{
          name,
          position,
          message
        }
      }
    }`;
export async function getAwards() {
  return client.fetch(
    groq`*[_type == "homepage"] {
      awardsSection{
        awardsSectionSubTitle,
        awardsSectionTitle,
        awardsList[]{
          awardDate,
          awardTitle,
          awardLogo {alt, "image": asset->url},
        }
      }
    }`
  );
}
export const awardsContent = groq`*[_type == "homepage"] {
      awardsSection{
        awardsSectionSubTitle,
        awardsSectionTitle,
        awardsList[]{
          awardDate,
          awardTitle,
          awardLogo {alt, "image": asset->url},
        }
      }
    }`;

export const awardList = groq`*[_type == "homepage"] {
      awardsSection{
        awardsSectionSubTitle,
        awardsSectionTitle,
        awardsList[]{
          awardDate,
          awardTitle,
          awardLogo {alt, "image": asset->url},
        }
      }
    }`;

export async function getContactContent() {
  return client.fetch(
    groq`*[_type == "homepage"] {
        contactUs {
          title,
          message,
          address,
          contactNumber,
          emailAddress,
          phoneButtonText,
          emailButtonText
        }
    }`
  );
}
export const contactUsContent = groq`*[_type == "homepage"] {
        contactUs {
          title,
          message,
          address,
          contactNumber,
          emailAddress,
          phoneButtonText,
          emailButtonText
        }
    }`;

export async function getAboutPageContent() {
  return client.fetch(
    groq`*[_type == "innerPage"] {
      _id,
      title,
      aboutPage {
        _id,
        pageHeading,

        pageMetadata {
          pageTitle,
          pageDescription
        },

        pageImage {
          alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
        introHeading,
        introText,
        introBgImage{
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
        featureText,
        contentArea
      }
    }
    `
  );
}
export const aboutPageContent = groq`*[_type == "innerPage"] {
      _id,
      title,
      aboutPage {
        _id,
        pageHeading,
        pageImage {
          alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
        introHeading,
        introText,
        featureText,
        contentArea
      }
    }
    `;

export const getServicesPageContent = groq`*[_type == "innerPage" && defined(ServicesPage)] {
        _id,
      ServicesPage {
        // _id,
        pageHeading,
        pageMetadata {
          pageTitle,
          pageDescription
        },
        pageImage {
              alt,
            "image": asset->url,
            asset {
              _ref
            },
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          },
          introBgImage{
            alt,
            "image": asset->url,
            asset {
              _ref
            },
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          },
        introHeading,
        introText
      }
    }
    `;

export async function getProjectsPageContent() {
  return client.fetch(
    groq`*[_type == "innerPage"] {
       _id,
      title,
      pageMetadata {
          pageTitle,
          pageDescription
        },
      ProjectsPage {
        _id,
        pageHeading,
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        BgImage{
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
      }
    }
    `
  );
}
export const projectsPageContent = groq`*[_type == "innerPage"] {
       _id,
      title,
      ProjectsPage {
        _id,
        pageHeading,
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
      }
    }
    `;

export async function getFaqPageContent() {
  return client.fetch(
    groq`*[_type == "innerPage"] {
       _id,
      FaqPage {
        pageHeading,
        pageMetadata {
          pageTitle,
          pageDescription
        },
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        BgImage{
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        introTitle,
        introMessage,
        formPlaceholder,
      }
    }
    `
  );
}
export const faqPageInitialContent = groq`*[_type == "innerPage"] {
       _id,
      FaqPage {
        pageHeading,
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        BgImage{
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        introTitle,
        introMessage,
        formPlaceholder,
      }
    }
    `;

export async function getFaqs() {
  return client.fetch(
    groq`*[_type == "faq"] {
        _id,
        question,
        answer
}`
  );
}
export const faqItems = groq`*[_type == "faq"] {
        _id,
        question,
        answer
}`;

export async function getContactUsPageContent() {
  return client.fetch(
    groq`*[_type == "innerPage"] {
       _id,
      ContactPage {
        pageHeading,
        pageMetadata {
          pageTitle,
          pageDescription
        },
        pageImage {
          alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      serviceAreas,
      }
    }
    `
  );
}
export const contactPageInitialContent = groq`*[_type == "innerPage"] {
       _id,
      ContactPage {
        pageHeading,
        serviceAreas,
      }
    }
    `;

export async function getMetadata() {
  return client.fetch(
    groq`*[_type == "metadata"]{
      companyName,
      description,
      contactDetails {
        telephone,
        email
      },
      location {
        streetAddress,
        addressLocality,
        addressRegion,
        addressCountry,
        postalCode,
        geo {
          latitude,
          longitude
        }
      },
      openingHours {
        open,
        close
      },
      areasServed
    }
    `
  );
}
export async function getPoliciesPageData() {
  return client.fetch(
    groq`*[_type == "metadata"]{
      policies {
        pageTitle,
        policies,
      }
    }
    `
  );
}
export async function getTermsPageData() {
  return client.fetch(
    groq`*[_type == "metadata"]{
      terms {
        pageTitle,
        terms,
      }
    }
    `
  );
}
export async function getServicePageMetadata() {
  return client.fetch(
    groq`*[_type == "metadata"]{
      terms {
        pageTitle,
        terms,
      }
    }
    `
  );
}
