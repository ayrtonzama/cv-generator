import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { SectionTitle } from './SectionTitle';
import { SkillIcon } from './icons/Icon';
import type { CVData } from '../schema';

export const SkillsBlock = ({ items }: { items: CVData['skillGroups'] }) => {
  if (!items.length) return null;
  // Pair groups into rows of two columns
  const rows: typeof items[] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  return (
    <View>
      <SectionTitle>Skills and Languages</SectionTitle>
      {rows.map((row, i) => (
        <View key={i} style={styles.twoCol}>
          {row.map((g, j) => (
            <View key={j} style={styles.col}>
              <View style={styles.colHeading}>
                <SkillIcon name={g.icon} />
                <Text style={styles.colHeadingText}>{g.title}</Text>
              </View>
              <Text style={styles.paragraph}>{g.items.join(', ')}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
