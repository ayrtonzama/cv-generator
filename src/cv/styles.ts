import { StyleSheet } from '@react-pdf/renderer';

export const colors = {
  text: '#111827',
  textMuted: '#6b7280',
  textSubtle: '#9ca3af',
  accent: '#2563eb',
  line: '#d1d5db',
  dot: '#111827',
  iconBg: '#f3f4f6',
  iconStroke: '#6b7280',
};

export const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 36,
    fontSize: 9,
    color: colors.text,
    fontFamily: 'Helvetica',
    lineHeight: 1.35,
  },
  // Header
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  headline: {
    fontSize: 9.5,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    marginTop: 4,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 8,
    color: colors.text,
    marginBottom: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 4,
  },
  contactText: { marginLeft: 3 },

  // Sections
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: colors.textMuted,
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 9,
    color: colors.text,
    marginBottom: 4,
  },

  // Timeline entry
  entry: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  entryLeft: {
    width: 80,
    paddingRight: 6,
  },
  entryDate: { fontSize: 8, color: colors.text, fontFamily: 'Helvetica-Bold' },
  entryLocation: { fontSize: 8, color: colors.textMuted, marginTop: 1 },

  entryTimeline: {
    width: 12,
    alignItems: 'center',
  },
  entryDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.dot,
    marginTop: 4,
  },
  entryLine: {
    width: 1,
    flexGrow: 1,
    backgroundColor: colors.line,
    marginTop: 1,
  },

  entryContent: {
    flex: 1,
    paddingLeft: 5,
  },
  entryRole: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: colors.text },
  entryCompany: {
    fontSize: 9,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    marginTop: 4,
    marginBottom: 4,
  },
  bulletRow: { flexDirection: 'row', marginBottom: 0 },
  bulletDot: { width: 8, color: colors.text, fontSize: 8.5 },
  bulletText: { flex: 1, fontSize: 8.5, color: colors.text },

  entryRightIcon: {
    width: 16,
    alignItems: 'flex-end',
    paddingTop: 1,
  },

  // Two-column rows
  twoCol: { flexDirection: 'row', marginBottom: 4 },
  col: { width: '50%', paddingRight: 6 },
  colHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  colHeadingText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    marginLeft: 5,
  },
});
