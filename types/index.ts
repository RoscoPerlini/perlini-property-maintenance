import { PortableTextBlock } from "sanity";

// image utility
export type SanityImageQueryResult = {
  alt: string;
  asset?: {
    _ref: string;
  };
  assetRef?: string; // Add this line
  crop?: {
    // Made optional as it might not always be provided
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    // Made optional as it might not always be provided
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

// hero
export type heroType = {
  _id: string;
  pageMetadata: PageMetadata;
  heroHeading: string;
  heroText: PortableTextBlock[];
  heroButtonText: string;
  heroImage: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };
};

// about us
export type introType = {
  _id: string;
  introSection: {
    introSubheading: string;
    introHeading: string;
    introText: PortableTextBlock[];
    aboutUsButton: string;
    introImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
};

// services
export type serviceSectionType = {
  servicesSection: {
    servicesSubheading: string;
    servicesHeading: string;
    servicesLinkTitle: string;
  };
};
interface AdditionalInfoItem {
  listItem: string;
  listItemDetails: string;
}

export type serviceType = {
  _id: string;
  serviceTitle: string;
  slug: string;
  serviceSummary: string;
  serviceSummaryBodyVersion: string;
  pageMetadata: PageMetadata;
  description: PortableTextBlock;
  coverImage: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };
  servicePageImage: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };
  serviceBannerImage: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };
  serviceAsideList?: {
    listIntro?: string;
    summaryList?: string[];
  };
  additionalInfo?: {
    additionalList?: AdditionalInfoItem[];
  };
  awardHighlight?: {
    awardDate: string;
    awardLogo: {
      alt: string;
      image: string;
    };
    awardTitle: string;
  };
  gallery: {
    images: {
      _id: string;
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    }[];
  };
};

// mailing list
export type mailingListType = {
  mailingListCta: {
    _id: string;
    mailingListHeading: string;
    mailingListText: string;
    mailingListPlaceholder: string;
    mailingListButtonText: string;
  };
};

// projects
export type projectsSectionType = {
  _id: string;
  projectsSection: {
    projectsSubheading: string;
    projectsHeading: string;
    projectsButtonText: string;
  };
};

interface Image {
  alt: string;
  image: string;
  asset: {
    _ref: string;
  };
}

interface BeforeAfter {
  beforeImage: Image;
  afterImage: Image;
}
interface ServiceBannerImage {
  alt: string;
  image: string;
  asset: {
    _ref: string;
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
}
interface ServiceCategory {
  serviceTitle: string;
  _id: string;
  serviceBannerImage: ServiceBannerImage;
}

export type projectType = {
  _id: string;
  projectTitle: string;
  orderPosition: number;
  slug: string;
  projectSummary: string;
  completionTimeframe: string;
  projectLocation: string;
  image: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };

  categories: ServiceCategory[];

  beforeAfter: BeforeAfter;
  beforeAfterMobile: BeforeAfter;
  gallery: {
    images: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    }[];
  };
  galleryMobile: {
    images: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    }[];
  };
};
export type TotPromoType = {
  _id: string;
  totPromo: {
    promoMessage: string;
  };
};
export type testimonialsType = {
  _id: string;
  testimonialsSection: {
    testimonialsSectionTitle: string;
    testimonialsList: Array<{
      name: string;
      position: string;
      message: string;
    }>;
  };
};
export type awardsType = {
  _id: string;
  awardsSection: {
    awardsSectionSubTitle: string;
    awardsSectionTitle: string;
    awardsList: Array<{
      awardDate: string;
      awardTitle: string;
      awardLogo: {
        alt: string;
        image: string;
      };
    }>;
  };
};
export type contactType = {
  _id: string;
  contactUs: {
    title: string;
    message: string;
    address: string;
    contactNumber: string;
    emailAddress: string;
    phoneButtonText: string;
    emailButtonText: string;
  };
};
interface Asset {
  url: string;
}

interface PageMetadata {
  pageTitle: string;
  pageDescription: string;
}

export type aboutPageType = {
  aboutPage: {
    _id: string;
    pageHeading: string;
    pageMetadata: PageMetadata;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    introHeading: string;
    introText: string[]; // Adjust the type based on your actual data structure
    introBgImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    featureText: string;
    contentArea: string[]; // Adjust the type based on your actual data structure
  };
};

// export type servicesSlideshow = {
//   ServicesPage: {
//     gallery: {
//       images: {
//         _id: string;
//         alt: string;
//         image: string;
//         asset: {
//           _ref: string;
//         };
//         crop: {
//           _type: "sanity.imageCrop";
//           bottom: number;
//           left: number;
//           right: number;
//           top: number;
//         };
//         hotspot: {
//           _type: "sanity.imageHotspot";
//           height: number;
//           width: number;
//           x: number;
//           y: number;
//         };
//       }[];
//     };
//   };
// };

export type servicesPageType = {
  _id: string;
  ServicesPage: {
    // _id: string;
    pageHeading: string;
    pageMetadata: PageMetadata;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    introHeading: string;
    introText: any[]; // Adjust the type based on your actual data structure
    introBgImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
};

export type projectsPageType = {
  _id: string;
  ProjectsPage: {
    _id: string;
    pageHeading: string;
    pageMetadata: PageMetadata;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    BgImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
};

export type faqPageType = {
  FaqPage: {
    _id: string;
    pageHeading: string;
    pageMetadata: PageMetadata;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    introTitle: string;
    introMessage: string;
    formPlaceholder: string;
  };
};

export type contactPageType = {
  ContactPage: {
    _id: string;
    pageHeading: string;
    pageMetadata: PageMetadata;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    serviceAreas: string;
  };
};

interface GeoLocation {
  latitude: string;
  longitude: string;
}

interface Location {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode: string;
  geo: GeoLocation;
}

interface ContactDetails {
  telephone: string;
  email: string;
}

interface OpeningHours {
  open: string;
  close: string;
}

export type metadataType = {
  companyName: string;
  description: string;
  contactDetails: ContactDetails;
  location: Location;
  openingHours: OpeningHours;
  areasServed: string;
};

export type policiesPageType = {
  policies: {
    pageTitle: string;
    policies: PortableTextBlock[];
  };
};
export type termsPageType = {
  terms: {
    pageTitle: string;
    terms: PortableTextBlock[];
  };
};
