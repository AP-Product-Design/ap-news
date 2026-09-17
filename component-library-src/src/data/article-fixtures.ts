export type ArticleVariant = 'standard' | 'immersive' | 'compact';

export interface ArticleAuthor {
  name: string;
  beat: string;
  bio: string;
  photoSrc: string;
  photoAlt: string;
}

export interface RelatedStory {
  eyebrow: string;
  headline: string;
}

export interface ArticleFixture {
  eyebrow: string;
  headline: string;
  dek: string;
  timestamp: string;
  authors: ArticleAuthor[];
  leadMedia: {
    src: string;
    alt: string;
    caption: string;
    credit: string;
  };
  body: string[];
  relatedStories: RelatedStory[];
}

export const articleVariants: Array<{ id: ArticleVariant; label: string; description: string }> = [
  {
    id: 'standard',
    label: 'Standard',
    description: 'Editorial article layout with a supporting related-content rail.',
  },
  {
    id: 'immersive',
    label: 'Immersive',
    description: 'Media-forward treatment with a wide lead image and centered presentation.',
  },
  {
    id: 'compact',
    label: 'Compact',
    description: 'Focused reading layout with reduced chrome and a narrower measure.',
  },
];

export function createArticleFixture(base: string): ArticleFixture {
  return {
    eyebrow: 'Design prototype',
    headline: 'A flexible article system built for clarity, context and visual storytelling',
    dek: 'This shared fixture keeps the reporting constant while teams compare hierarchy, spacing and presentation across templates.',
    timestamp: 'Updated 10:42 AM EDT, September 17, 2026',
    authors: [
      {
        name: 'By Michelle L. Price',
        beat: 'National political reporter',
        bio: 'Michelle L. Price covers national politics and the people shaping public policy for The Associated Press.',
        photoSrc: `${base}images/authors/michelle-price.png`,
        photoAlt: 'Michelle L. Price',
      },
    ],
    leadMedia: {
      src: `${base}images/carousel-lead-image.png`,
      alt: 'People gathered outdoors during a public event',
      caption: 'Prototype imagery and copy are used to evaluate the article-page system.',
      credit: 'AP Photo',
    },
    body: [
      'The strongest article experiences make the reporting easy to understand without flattening its urgency or character. Every decision, from headline width to media placement, influences how readers enter and move through a story.',
      'For this prototype, the underlying article content remains unchanged. That gives reviewers a consistent baseline for comparing templates and helps the team isolate the effect of layout, hierarchy and component behavior.',
      'Each version is assembled from the same components and fixture data. Teams can refine an individual component without recreating the entire page, while designers can test broader structural ideas through a small set of template options.',
      'These pages are proofs of concept rather than production specifications. Feedback should focus on reading flow, editorial emphasis, responsive behavior and whether each treatment supports the needs of the story.',
    ],
    relatedStories: [
      {
        eyebrow: 'More context',
        headline: 'How readers move through developing stories across devices',
      },
      {
        eyebrow: 'Design process',
        headline: 'What the team is testing in the new article framework',
      },
      {
        eyebrow: 'Accessibility',
        headline: 'Building a reading experience that works for more people',
      },
    ],
  };
}
