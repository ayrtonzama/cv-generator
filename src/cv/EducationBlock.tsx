import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { SectionTitle } from './SectionTitle';
import { TimelineEntry } from './TimelineEntry';
import type { CVData } from '../schema';

export const EducationBlock = ({ items }: { items: CVData['education'] }) => {
  if (!items.length) return null;
  return (
    <View>
      <SectionTitle>Education</SectionTitle>
      {items.map((e, i) => (
        <TimelineEntry
          key={i}
          startDate={e.startDate}
          endDate={e.endDate}
          location={e.location}
        >
          <Text style={styles.entryRole}>{e.degree}</Text>
          {e.school ? <Text style={styles.entryCompany}>{e.school}</Text> : null}
        </TimelineEntry>
      ))}
    </View>
  );
};
