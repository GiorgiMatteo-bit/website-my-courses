import Icon from '@/components/ui/AppIcon';

interface AchievementStatsProps {
  totalCertifications: number;
  totalHours: number;
  skillsAcquired: number;
  activeFilters: number;
}

const AchievementStats = ({
  totalCertifications,
  totalHours,
  skillsAcquired,
  activeFilters,
}: AchievementStatsProps) => {
  const stats = [
    {
      icon: 'AcademicCapIcon',
      label: 'Total Certifications',
      value: totalCertifications,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'ClockIcon',
      label: 'Hours Completed',
      value: totalHours,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: 'SparklesIcon',
      label: 'Skills Acquired',
      value: skillsAcquired,
      color: 'text-trust-builder',
      bgColor: 'bg-trust-builder/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg border border-border p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-xs font-medium text-text-secondary mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
            <div className={`${stat.bgColor} p-2 rounded-lg`}>
              <Icon name={stat.icon as any} size={24} className={stat.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementStats;