import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { SectionTitle } from './SectionTitle';
import type { CVData } from '../schema';

export const ProjectsBlock = ({ items }: { items: CVData['projects'] }) => {
  if (!items.length) return null;
  return (
    <View>
      <SectionTitle>Projects</SectionTitle>
      {items.map((p, i) => (
        <View key={i} style={{ marginBottom: 4 }}>
          <Text style={[styles.paragraph, { fontFamily: 'Helvetica-Bold' }]}>{p.title}</Text>
          <Text style={styles.paragraph}>{p.body}</Text>
        </View>
      ))}
    </View>
  );
};
