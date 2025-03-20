import * as LucideIcons from 'lucide-react';

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof LucideIcons;
  color: string;
  size: number;
  className?: string;
}) => {
  const LucideIcon = LucideIcons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};
