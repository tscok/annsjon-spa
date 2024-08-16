import { useDictionary } from 'app/i18n/use-dictionary'
import { MediaCardType } from 'app/types'

const projects: MediaCardType<ProjectName>[] = [
  {
    body: 'project.great-snipe.body',
    id: 'great-snipe-project',
    media: { src: '/images/great-snipe_bjorn-isaksson.jpg' },
    name: 'great-snipe',
    title: 'project.great-snipe.title',
    to: '/projects/great-snipe',
  },
  {
    body: 'project.survey.body',
    id: 'survey-project',
    media: { src: '/images/survey_malte-busch.jpg' },
    name: 'surveys',
    title: 'project.survey.title',
    to: '/projects/surveys',
  },
  {
    body: 'project.ringing.body',
    id: 'ringing-project',
    media: { src: '/images/ringing_mikael-carlsson.jpg' },
    name: 'ringing',
    title: 'project.ringing.title',
    to: '/projects/ringing',
  },
]

export type ProjectName = 'great-snipe' | 'surveys' | 'ringing'

export function useProjects(
  excludeName?: ProjectName
): MediaCardType<ProjectName>[] {
  const t = useDictionary('startpage')

  return projects
    .filter(({ name }) => name !== excludeName)
    .map((project) => ({
      ...project,
      body: t(project.body as keyof typeof t),
      title: t(project.title as keyof typeof t),
    }))
}
