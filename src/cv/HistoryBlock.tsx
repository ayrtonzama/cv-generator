import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import { SectionTitle } from './SectionTitle';
import type { CVData } from '../schema';

export const HistoryBlock = ({ items }: { items: CVData['history'] }) => {
  if (!items.length) return null;
  const rows: typeof items[] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  return (
    <View>
      <SectionTitle>History</SectionTitle>
      {rows.map((row, i) => (
        <View key={i} style={styles.twoCol}>
          {row.map((h, j) => (
            <View key={j} style={styles.col}>
              <Text style={[styles.paragraph, { fontFamily: 'Helvetica-Bold' }]}>{h.title}</Text>
              <Text style={styles.paragraph}>{h.body}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
