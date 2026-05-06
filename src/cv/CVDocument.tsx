import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { Header } from './Header';
import { SectionTitle } from './SectionTitle';
import { ExperienceBlock } from './ExperienceBlock';
import { EducationBlock } from './EducationBlock';
import { SkillsBlock } from './SkillsBlock';
import { HistoryBlock } from './HistoryBlock';
import { ProjectsBlock } from './ProjectsBlock';
import type { CVData } from '../schema';

export const CVDocument = ({ data }: { data: CVData }) => (
  <Document title={`${data.personal.name} — CV`}>
    <Page size="A4" style={styles.page}>
      <Header personal={data.personal} />

      {data.summary ? (
        <View>
          <SectionTitle>Summary</SectionTitle>
          <Text style={styles.paragraph}>{data.summary}</Text>
        </View>
      ) : null}

      <ExperienceBlock items={data.experience} />
      <EducationBlock items={data.education} />
      <SkillsBlock items={data.skillGroups} />
      <HistoryBlock items={data.history} />
      <ProjectsBlock items={data.projects} />

      {data.notes ? (
        <View>
          <SectionTitle>Notes</SectionTitle>
          <Text style={styles.paragraph}>{data.notes}</Text>
        </View>
      ) : null}
    </Page>
  </Document>
);
