export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  url: string;
  description: string[];
  date: string;
  skils: string[];
  links?: string[];
}
export interface Project extends Omit<Job, 'date' | 'links'> {
  img: {
    id: number;
    alt: string;
    src: string;
  };
}
export interface Education {
  id: number;
  title: string;
  university: string;
  location: string;
  date: string;
}
