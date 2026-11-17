import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleKeyTakeaways } from "./ArticleKeyTakeaways";
import { TableOfContents } from "./TableOfContents";
import { DirectAnswerCard } from "./DirectAnswerCard";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { ComparisonTable } from "./ComparisonTable";
import { InlineCtaCard } from "./InlineCtaCard";
import { ArticleFaq } from "./ArticleFaq";
import { AuthorBox } from "./AuthorBox";
import { RelatedArticles } from "./RelatedArticles";
import { BlogEndCta } from "./BlogEndCta";
import { FormattedText } from "./FormattedText";
import { DisconnectedVsConnectedCard } from "./DisconnectedVsConnectedCard";
import { QaChecklistCard } from "./QaChecklistCard";
import { EvaluationMatrixCard } from "./EvaluationMatrixCard";
import { RedFlagsCard } from "./RedFlagsCard";
import { CapabilityMapCard } from "./CapabilityMapCard";
import styles from "./ArticleBody.module.css";

interface ArticleBodyProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function ArticleBody({ post, relatedPosts }: ArticleBodyProps) {
  return (
    <article className={styles.articleRoot}>
      <div className={`container ${styles.container}`}>
        <ArticleHeader post={post} />

        <div className={styles.layoutGrid}>
          {/* Main Editorial Column */}
          <main className={styles.mainContent}>
            {/* Intro Problem / Scope / Audience */}
            <div className={styles.introBox}>
              <p className={styles.introProblem}>{post.intro.problemStatement}</p>
              <p className={styles.introScope}>{post.intro.whatItCovers}</p>
              <div className={styles.introAudience}>
                <span className={styles.audienceBadge}>WHO THIS IS FOR</span>
                <span className={styles.audienceText}>{post.intro.whoItIsFor}</span>
              </div>
            </div>

            {/* Key Takeaways */}
            <ArticleKeyTakeaways takeaways={post.keyTakeaways} />

            {/* Structured Sections */}
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{section.title}</h2>

                {/* Direct Answer Block (GEO/AEO) */}
                {section.directAnswer && <DirectAnswerCard block={section.directAnswer} />}

                {/* Paragraphs with rich link formatting */}
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex} className={styles.paragraph}>
                    <FormattedText text={p} />
                  </p>
                ))}

                {/* Callout */}
                {section.callout && (
                  <div
                    className={`${styles.calloutCard} ${
                      section.callout.type === "warning"
                        ? styles.calloutWarning
                        : section.callout.type === "tip"
                        ? styles.calloutTip
                        : styles.calloutInsight
                    }`}
                  >
                    <div className={styles.calloutTitleRow}>
                      <span className={styles.calloutIcon} aria-hidden="true">
                        {section.callout.type === "warning" ? "⚠️" : "💡"}
                      </span>
                      <h4 className={styles.calloutTitle}>{section.callout.title}</h4>
                    </div>
                    <p className={styles.calloutText}>
                      <FormattedText text={section.callout.text} />
                    </p>
                  </div>
                )}

                {/* Bullets with rich link formatting */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className={styles.bulletItem}>
                        <span className={styles.bulletDot} aria-hidden="true">•</span>
                        <span>
                          <FormattedText text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subsections (H3) */}
                {section.subsections &&
                  section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className={styles.subsectionBlock}>
                      <h3 className={styles.subsectionHeading}>{sub.title}</h3>
                      {sub.paragraphs.map((p, spIndex) => (
                        <p key={spIndex} className={styles.paragraph}>
                          <FormattedText text={p} />
                        </p>
                      ))}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className={styles.bulletList}>
                          {sub.bullets.map((b, sbIndex) => (
                            <li key={sbIndex} className={styles.bulletItem}>
                              <span className={styles.bulletDot} aria-hidden="true">•</span>
                              <span>
                                <FormattedText text={b} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                {/* Workflow Process Diagram */}
                {section.workflow && (
                  <WorkflowDiagram
                    title={section.workflow.title}
                    description={section.workflow.description}
                    steps={section.workflow.steps}
                  />
                )}

                {/* Disconnected vs Connected System Visual */}
                {section.disconnectedVsConnected && (
                  <DisconnectedVsConnectedCard config={section.disconnectedVsConnected} />
                )}

                {/* Capability Map Visual */}
                {section.capabilityMap && (
                  <CapabilityMapCard config={section.capabilityMap} />
                )}

                {/* QA Checklist Visual */}
                {section.qaChecklist && (
                  <QaChecklistCard config={section.qaChecklist} />
                )}

                {/* Evaluation Matrix Visual */}
                {section.evaluationMatrix && (
                  <EvaluationMatrixCard config={section.evaluationMatrix} />
                )}

                {/* Red Flags Visual */}
                {section.redFlags && (
                  <RedFlagsCard config={section.redFlags} />
                )}

                {/* Comparison Table */}
                {section.table && (
                  <ComparisonTable
                    caption={section.table.caption}
                    headers={section.table.headers}
                    rows={section.table.rows}
                  />
                )}

                {/* Inline CTA */}
                {section.inlineCta && <InlineCtaCard config={section.inlineCta} />}
              </section>
            ))}

            {/* Internal Contextual Linking Section */}
            {(post.relevantService || post.relevantIndustry) && (
              <div className={styles.internalLinksBox} role="complementary" aria-label="Related GHLVertex Capabilities">
                <span className={styles.internalLinksEyebrow}>CONNECTED CAPABILITIES</span>
                <h3 className={styles.internalLinksTitle}>Implement These Systems With GHLVertex</h3>
                <div className={styles.internalLinksGrid}>
                  {post.relevantService && (
                    <Link href={post.relevantService.href} className={styles.internalLinkCard}>
                      <div className={styles.internalLinkBadge}>SERVICE IMPLEMENTATION</div>
                      <h4 className={styles.internalLinkName}>{post.relevantService.name} →</h4>
                      <p className={styles.internalLinkDesc}>{post.relevantService.description}</p>
                    </Link>
                  )}
                  {post.relevantIndustry && (
                    <Link href={post.relevantIndustry.href} className={styles.internalLinkCard}>
                      <div className={styles.internalLinkBadge}>INDUSTRY BLUEPRINT</div>
                      <h4 className={styles.internalLinkName}>{post.relevantIndustry.name} →</h4>
                      <p className={styles.internalLinkDesc}>{post.relevantIndustry.description}</p>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Optional Article FAQ */}
            {post.faq && post.faq.length > 0 && <ArticleFaq faqs={post.faq} />}

            {/* Author Box */}
            <AuthorBox author={post.author} />

            {/* Article End CTA */}
            <BlogEndCta />
          </main>

          {/* Sticky Sidebar with TOC & Quick Actions */}
          <aside className={styles.sidebar}>
            <TableOfContents items={post.tableOfContents} />

            {/* Sticky Strategy Call Pill */}
            <div className={styles.sidebarCtaCard}>
              <h4 className={styles.sidebarCtaTitle}>Need GHL Architecture?</h4>
              <p className={styles.sidebarCtaDesc}>
                Talk directly with our systems engineers about your GoHighLevel, CRM, or AI project.
              </p>
              <Link
                href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sidebarCtaBtn}
              >
                <span>Book a Strategy Call</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedPosts && relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}
      </div>
    </article>
  );
}
