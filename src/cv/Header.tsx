import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import type { CVData } from '../schema';
import { PhoneIcon, MailIcon, LinkIcon, PinIcon } from './icons/Icon';

export const Header = ({ personal }: { personal: CVData['personal'] }) => (
  <View>
    <Text style={styles.name}>{personal.name}</Text>
    {personal.headline ? <Text style={styles.headline}>{personal.headline}</Text> : null}
    <View style={styles.contactRow}>
      {personal.phone ? (
        <View style={styles.contactItem}>
          <PhoneIcon />
          <Text style={styles.contactText}>{personal.phone}</Text>
        </View>
      ) : null}
      {personal.email ? (
        <View style={styles.contactItem}>
          <MailIcon />
          <Text style={styles.contactText}>{personal.email}</Text>
        </View>
      ) : null}
      {personal.linkedin ? (
        <View style={styles.contactItem}>
          <LinkIcon />
          <Text style={styles.contactText}>{personal.linkedin}</Text>
        </View>
      ) : null}
      {personal.location ? (
        <View style={styles.contactItem}>
          <PinIcon />
          <Text style={styles.contactText}>{personal.location}</Text>
        </View>
      ) : null}
    </View>
  </View>
);
