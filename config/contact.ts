export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  youtube = 'youtube',
  email = 'email',
  googlescholar = 'googlescholar',
}

export interface Contact {
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'vrpala.com',
  calendly: 'https://calendly.com/venkateshreddypala',
  links: {
    github: 'https://github.com/venkateshreddypala',
    linkedin: 'https://linkedin.com/in/vepala5',
    googlescholar: 'https://scholar.google.com/citations?user=nsmj_EAAAAAJ&hl=en',
    youtube: 'https://www.youtube.com/@VenkateshrPala',
    email: 'mailto:venkateshreddypala@gmail.com',
  },
};
