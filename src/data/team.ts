import amarwin from '../assets/team/amarwin.jpg'
import gurudhakshna from '../assets/team/gurudhakshna.jpg'
import haziq from '../assets/team/haziq.jpg'
import adeshvar from '../assets/team/adeshvar.jpg'

export interface Member {
  name: string
  role: 'Founder' | 'Co-Founder' | 'CEO' | 'Secretary'
  photo: string
  github: string
  linkedin: string
  position: string
}

export const TEAM: Member[] = [
  { name: 'Amarwin Jasan', role: 'Founder', photo: amarwin, github: 'https://github.com/amarwin28', linkedin: 'https://www.linkedin.com/in/amarwin-jasan/', position: 'center 18%' },
  { name: 'Haziq Hussain', role: 'Co-Founder', photo: haziq, github: 'https://github.com/haziqhhussain', linkedin: 'https://www.linkedin.com/in/hussainhaziqh/', position: 'center 20%' },
  { name: 'Gurudhakshna', role: 'CEO', photo: gurudhakshna, github: 'https://github.com/Gurudhakshna', linkedin: 'https://www.linkedin.com/in/guru-dhakshna-1871203b1/', position: 'center 22%' },
  { name: 'Adeshvar Linkam', role: 'Secretary', photo: adeshvar, github: 'https://github.com/Adeshvar09', linkedin: 'https://www.linkedin.com/in/adeshvarlinkam09/', position: 'center 18%' },
]
