import { useDictionary } from 'app/i18n/use-dictionary'

type Project = {
  body: string
  id: string
  media: {
    src: string
  }
  title: string
  to: string
}

const projects: Project[] = [
  {
    body: 'project.great-snipe.body',
    id: 'great-snipe-project',
    media: { src: '/images/great-snipe_bjorn-isaksson.jpg' },
    title: 'project.great-snipe.title',
    to: '/projects/great-snipe',
  },
  {
    body: 'project.survey.body',
    id: 'survey-project',
    media: { src: '/images/survey_malte-busch.jpg' },
    title: 'project.survey.title',
    to: '/projects/surveys',
  },
  {
    body: 'project.ringing.body',
    id: 'ringing-project',
    media: { src: '/images/ringing_mikael-carlsson.jpg' },
    title: 'project.ringing.title',
    to: '/projects/ringing',
  },
]

export function useProjects(): Project[] {
  const t = useDictionary('startpage')

  return projects.map((project) => ({
    ...project,
    body: t(project.body as keyof typeof t),
    title: t(project.title as keyof typeof t),
  }))
}
