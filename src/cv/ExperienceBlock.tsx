import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { SectionTitle } from './SectionTitle';
import { TimelineEntry } from './TimelineEntry';
import type { CVData } from '../schema';

export const ExperienceBlock = ({ items }: { items: CVData['experience'] }) => {
  if (!items.length) return null;
  return (
    <View>
      <SectionTitle>Experience</SectionTitle>
      {items.map((e, i) => (
        <TimelineEntry
          key={i}
          startDate={e.startDate}
          endDate={e.endDate}
          location={e.location}
        >
          <Text style={styles.entryRole}>{e.role}</Text>
          {e.company ? <Text style={styles.entryCompany}>{e.company}</Text> : null}
          {e.bullets.map((b, j) => (
            <View key={j} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{b}</Text>
            </View>
          ))}
        </TimelineEntry>
      ))}
    </View>
  );
};
