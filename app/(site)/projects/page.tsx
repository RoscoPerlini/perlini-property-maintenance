import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import MailingListCta from "@/components/MailingListCta";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import ProjectsFilterPreview from "@/components/previewComponents/ProjectsFilterPreview";
import ProjectsFilter from "@/components/ProjectsFilter";
import TotPromo from "@/components/TotPromo";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import {
  getProjectsPageContent,
  getAllProjects,
  projectsPageContent,
  allProjects,
  getMailingListCta,
  getTotPromo,
  getContactContent,
} from "@/sanity/sanity.query";
import type {
  contactType,
  mailingListType,
  projectsPageType,
  projectType,
  TotPromoType,
} from "@/types";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { Suspense } from "react";

export async function metadata() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();
  return {
    title: `Perlini Property Management | ${projectsContent[0]?.ProjectsPage?.pageMetadata?.pageTitle || "Projects"}`,
    description:
      projectsContent[0]?.ProjectsPage?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(projectsContent[0].ProjectsPage.pageHeading),
    openGraph: {
      images: projectsContent[0].ProjectsPage.pageImage.image,
    },
  };
}

export default async function Projects() {
  const projectsContent: projectsPageType[] = await getProjectsPageContent();
  const projects: projectType[] = await getAllProjects();
  const mailingList: mailingListType[] = await getMailingListCta();
  const totPromo: TotPromoType[] = await getTotPromo();
  const contactContent: contactType[] = await getContactContent();

  const initialProjectsPageContent = await loadQuery<SanityDocument>(
    projectsPageContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialProjectItems = await loadQuery<SanityDocument>(
    allProjects,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <div>
        {draftMode().isEnabled ? (
          <InnerHeroPreview
            pageVariable="ProjectsPage"
            initial={initialProjectsPageContent.data[0]}
            sectionTitle="projects"
            pageNumber="04"
            originalContent={projectsPageContent}
          />
        ) : (
          <InnerHero
            title={projectsContent[0].ProjectsPage.pageHeading}
            image={projectsContent[0].ProjectsPage.pageImage}
            sectionTitle="projects"
            imageAltText={projectsContent[0].ProjectsPage.pageImage.alt}
            pageNumber="04"
          />
        )}

        <section className="my-section-gap">
          {draftMode().isEnabled ? (
            <ProjectsFilterPreview
              initial={initialProjectItems.data[0]}
              originalContent={allProjects}
              assets={projectsContent}
            />
          ) : (
            <ProjectsFilter projects={projects} assets={projectsContent} />
          )}
        </section>

        <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
          <TotPromo totPromo={totPromo} />
        </section>
        <section className="my-section-gap hidden xsmall:block xsmall:my-section-gap-xsmall small:my-section-gap-small">
          <MailingListCta content={mailingList} />
        </section>
        <section>
          <ContactSection contactContent={contactContent} />
        </section>
      </div>
    </Suspense>
  );
}
