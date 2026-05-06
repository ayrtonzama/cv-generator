import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

type Props = {
  startDate: string;
  endDate?: string;
  location?: string;
  children: React.ReactNode;
};

export const TimelineEntry = ({ startDate, endDate, location, children }: Props) => {
  const dates = endDate ? `${startDate} - ${endDate}` : startDate ? `${startDate} - Present` : '';
  return (
    <View style={styles.entry} wrap={false}>
      <View style={styles.entryLeft}>
        {dates ? <Text style={styles.entryDate}>{dates}</Text> : null}
        {location ? <Text style={styles.entryLocation}>{location}</Text> : null}
      </View>
      <View style={styles.entryTimeline}>
        <View style={styles.entryDot} />
        <View style={styles.entryLine} />
      </View>
      <View style={styles.entryContent}>{children}</View>
   
    </View>
  );
};
