import { Svg, Path, Circle, Rect, Line } from '@react-pdf/renderer';
import type { SkillIconName } from '../../schema';

type Props = { size?: number; color?: string };

export const PhoneIcon = ({ size = 9, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const MailIcon = ({ size = 9, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x={2} y={4} width={20} height={16} rx={2} stroke={color} strokeWidth={2} fill="none" />
    <Path d="M22 6 12 13 2 6" stroke={color} strokeWidth={2} fill="none" />
  </Svg>
);

export const LinkIcon = ({ size = 9, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
    <Path
      d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const PinIcon = ({ size = 9, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
    <Circle cx={12} cy={10} r={3} stroke={color} strokeWidth={2} fill="none" />
  </Svg>
);

export const BuildingIcon = ({ size = 12, color = '#9ca3af' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x={4} y={3} width={16} height={18} rx={1} stroke={color} strokeWidth={2} fill="none" />
    <Line x1={9} y1={8} x2={9} y2={8} stroke={color} strokeWidth={2} />
    <Line x1={15} y1={8} x2={15} y2={8} stroke={color} strokeWidth={2} />
    <Line x1={9} y1={12} x2={9} y2={12} stroke={color} strokeWidth={2} />
    <Line x1={15} y1={12} x2={15} y2={12} stroke={color} strokeWidth={2} />
    <Path d="M10 21v-4h4v4" stroke={color} strokeWidth={2} fill="none" />
  </Svg>
);

export const BoltIcon = ({ size = 12, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"
      fill={color}
      stroke={color}
      strokeWidth={1}
    />
  </Svg>
);

export const BulbIcon = ({ size = 12, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.4 1 2.3h6c0-.9.4-1.7 1-2.3A7 7 0 0 0 12 2z"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const CodeIcon = ({ size = 12, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="m16 18 6-6-6-6M8 6l-6 6 6 6" stroke={color} strokeWidth={2} fill="none" />
  </Svg>
);

export const WrenchIcon = ({ size = 12, color = '#2563eb' }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a3 3 0 0 1-4-4l8-8 1.7-2.7z"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const SkillIcon = ({ name, size = 12, color }: { name: SkillIconName; size?: number; color?: string }) => {
  switch (name) {
    case 'bolt': return <BoltIcon size={size} color={color} />;
    case 'bulb': return <BulbIcon size={size} color={color} />;
    case 'code': return <CodeIcon size={size} color={color} />;
    case 'wrench': return <WrenchIcon size={size} color={color} />;
  }
};
