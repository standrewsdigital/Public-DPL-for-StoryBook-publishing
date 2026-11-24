import '../../../scss-styles/blockquote.scss';

const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);

const inColumns = (columns, content) => `
  <div class="container">
    <div class="row">
      <div class="col col-${columns}-md col-12-sm">
        ${content}
      </div>
    </div>
  </div>
`;

const renderQuote = (args, { columns = 8, pull = false, large = false, citation = false } = {}) => {
  const authorName = escapeHtml(args.authorName);
  const authorDetail = escapeHtml(args.authorDetail);
  const portraitUrl = escapeHtml(args.portraitUrl);
  const portraitAlt = escapeHtml(args.portraitAlt || args.authorName);
  const figureClass = `blockquote${pull ? ' pull' : ''}`;
  const quoteClass = large ? ' class="font-scale-2"' : '';
  const citeAttribute =
    citation && args.citationUrl ? ` cite="${escapeHtml(args.citationUrl)}"` : '';
  const captionDetail =
    citation && args.citationTitle
      ? `<cite>${escapeHtml(args.citationTitle)}</cite>`
      : authorDetail;
  const detailMarkup = captionDetail ? `<br>${captionDetail}` : '';
  const imageMarkup = args.portraitUrl
    ? `<div class="author-thumbnail">
         <img class="image" src="${portraitUrl}" alt="${portraitAlt}">
       </div>`
    : '';

  return inColumns(
    columns,
    `<figure class="${figureClass}">
      <blockquote${citeAttribute}${quoteClass}>
        <p>&ldquo;${escapeHtml(args.quoteText)}&rdquo;</p>
      </blockquote>
      <figcaption class="author">
        ${imageMarkup}
        <div><strong>${authorName}</strong>${detailMarkup}</div>
      </figcaption>
    </figure>`,
  );
};

const renderTestimonial = (args) => {
  const iconClass = `testimonial-icon-${args.testimonialIcon}`;
  const layoutClass = args.testimonialLayout === 'wide' ? ' testimonial-wide' : '';
  const imageClass = args.largeImage ? ' testimonial-large-image' : '';
  const portraitUrl = escapeHtml(args.portraitUrl);
  const portraitAlt = escapeHtml(args.portraitAlt);

  return `
    <section class="testimonial-section bg-light-grey-1 py-xl">
      <div class="container">
        <div class="row">
          <article class="col col-12-xs col-12-md testimonial-card${layoutClass} ${iconClass} bg-white radius-md p-lg">
            <div class="testimonial-copy">
              <blockquote>
                <p>&ldquo;${escapeHtml(args.quoteText)}&rdquo;</p>
              </blockquote>
              <div class="testimonial-meta mt-lg">
                <div class="testimonial-meta-image">
                  <img src="${portraitUrl}" alt="">
                </div>
                <div>
                  <strong>${escapeHtml(args.authorName)}</strong><br>
                  <span class="text-mid-grey-1">${escapeHtml(args.authorDetail)}</span>
                </div>
              </div>
              <a href="${escapeHtml(args.storyUrl)}" class="testimonial-link link">Explore the research hub</a>
            </div>
            <div class="testimonial-image${imageClass}">
              <img src="${portraitUrl}" alt="${portraitAlt}">
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
};

export default {
  title: 'Components/Blockquote',
  tags: ['autodocs'],
  render: (args) => renderQuote(args),
  argTypes: {
    quoteText: {
      name: 'Quote text',
      control: 'text',
      description:
        'The words inside the quotation. This is rendered as text inside a paragraph in the blockquote; HTML is escaped.',
      table: { category: 'Content' },
    },
    authorName: {
      name: 'Author name',
      control: 'text',
      description:
        'The person or organisation attributed in the figure caption. Leave blank if the quote is unattributed.',
      table: { category: 'Attribution' },
    },
    authorDetail: {
      name: 'Author detail',
      control: 'text',
      description:
        'Optional role, school, location, or other short context displayed beneath the author name.',
      table: { category: 'Attribution' },
    },
    citationUrl: {
      name: 'Citation URL',
      control: 'text',
      description:
        'Optional source URL written to the blockquote `cite` attribute. Used by the With Citation story.',
      table: { category: 'Citation' },
    },
    citationTitle: {
      name: 'Citation title',
      control: 'text',
      description:
        'Optional title of the cited work. The With Citation story displays it in a semantic `cite` element.',
      table: { category: 'Citation' },
    },
    portraitUrl: {
      name: 'Portrait image URL',
      control: 'text',
      description:
        'Optional image URL for the author thumbnail or testimonial card. For repository assets, use `/assets/<filename>`.',
      table: { category: 'Attribution' },
    },
    portraitAlt: {
      name: 'Portrait alt text',
      control: 'text',
      description:
        'Accessible description for the visible author portrait. The small duplicate testimonial thumbnail is decorative.',
      table: { category: 'Attribution' },
    },
    storyUrl: {
      name: 'Story link URL',
      control: 'text',
      description:
        'Destination for the testimonial card link. Use a valid story or article URL in production.',
      table: { category: 'Testimonial' },
    },
    testimonialIcon: {
      name: 'Testimonial icon colour',
      control: { type: 'select' },
      options: ['burgundy', 'green', 'purple'],
      description:
        'Selects the quotation icon modifier on the testimonial article. The default icon is blue when no modifier is applied.',
      table: { category: 'Testimonial' },
    },
    testimonialLayout: {
      name: 'Testimonial layout',
      control: { type: 'select' },
      options: ['standard', 'wide'],
      description:
        'Use the wide layout for a larger landscape image beside the quote.',
      table: { category: 'Testimonial' },
    },
    largeImage: {
      name: 'Large testimonial image',
      control: 'boolean',
      description:
        'Applies `testimonial-large-image` to the image. This is intended for wide cards.',
      table: { category: 'Testimonial' },
    },
  },
  args: {
    quoteText:
      'The people I met here shaped the way I think about research, collaboration and my future career.',
    authorName: 'Amelia Robertson',
    authorDetail: 'History student',
    citationUrl: 'https://www.st-andrews.ac.uk',
    citationTitle: 'About St Andrews',
    portraitUrl: '',
    portraitAlt: '',
    storyUrl: '#',
    testimonialIcon: 'purple',
    testimonialLayout: 'wide',
    largeImage: true,
  },
  parameters: {
    docs: {
      description: {
        component: `
Use a semantic \`<figure class="blockquote">\` containing a \`<blockquote>\` and an optional
\`<figcaption class="author">\`. Place it inside the DPL \`.container\` and grid classes to
control its width.

- **Quote text** goes inside the blockquote, usually in a paragraph.
- **Attribution** belongs in the figure caption. Use the author detail for a role, school,
  location, or similar context. Add an author thumbnail with \`.author-thumbnail\` and an
  image when the example calls for one.
- **Citation**: set a source URL on the blockquote with \`cite\`; use a \`<cite>\` element
  in the caption for the title of a work.
- **Pull quote**: add \`pull\` to the figure for the indented treatment and
  \`font-scale-2\` to its blockquote for larger responsive text.
- **Full width**: use the twelve-column grid class. No extra blockquote modifier is needed.
- **Testimonials**: use \`.testimonial-section\` and \`.testimonial-card\`. Choose the icon
  with \`.testimonial-icon-burgundy\`, \`.testimonial-icon-green\`, or
  \`.testimonial-icon-purple\`. Add \`.testimonial-wide\` for the wider image layout and
  \`.testimonial-large-image\` for a larger image. Keep utility classes such as
  \`.bg-white\`, \`.radius-md\`, and \`.p-lg\` on the article to style its surface.
        `,
      },
    },
  },
};

export const Standard = {};

export const WithCitation = {
  args: {
    quoteText:
      'The University of St Andrews brings together a community of students and scholars.',
    authorName: 'University statement',
    authorDetail: '',
  },
  render: (args) => renderQuote(args, { citation: true }),
  parameters: {
    docs: {
      description: {
        story:
          'Sets the source URL on the blockquote and displays the cited work title in the caption. Update the Citation controls to customize both values.',
      },
    },
  },
};

export const PullQuote = {
  args: {
    quoteText: 'A memorable idea deserves room to stand out.',
    authorName: 'Dr Garrett Winters',
    authorDetail: 'School of Biology',
  },
  render: (args) => renderQuote(args, { pull: true, large: true }),
  parameters: {
    docs: {
      description: {
        story:
          'The `pull` modifier indents the figure; `font-scale-2` increases the quote text responsively.',
      },
    },
  },
};

export const FullWidth = {
  args: {
    quoteText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare maximus risus at rhoncus.',
    authorName: 'Olivia Liang',
    authorDetail: 'Colorado, USA',
    portraitUrl: '/assets/female-002-medium.jpg',
    portraitAlt: 'Portrait of Olivia Liang',
  },
  render: (args) => renderQuote(args, { columns: 12 }),
  parameters: {
    docs: {
      description: {
        story:
          'Uses all twelve grid columns and includes Olivia Liang’s portrait beside her name and location. The portrait URL and accessible text can be changed in the Attribution controls.',
      },
    },
  },
};

export const TestimonialCard = {
  args: {
    quoteText:
      'Building products that matter requires a deep understanding of people. The cross-disciplinary approach I learned here gave me that perspective.',
    authorName: 'Kenji Tanaka',
    authorDetail: 'User research lead',
    portraitUrl: '/assets/computer-science-blockquote.jpg',
    portraitAlt: 'Portrait of Kenji Tanaka',
    storyUrl: '/stories/grace-mitchell',
    testimonialIcon: 'purple',
    testimonialLayout: 'wide',
    largeImage: true,
  },
  render: (args) => renderTestimonial(args),
  parameters: {
    docs: {
      description: {
        story:
          'Adjust the testimonial icon colour, layout, image, attribution, quote, and story URL with the documented controls.',
      },
    },
  },
};
