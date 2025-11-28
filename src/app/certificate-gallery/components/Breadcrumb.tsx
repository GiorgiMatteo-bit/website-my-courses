import Icon from '@/components/ui/AppIcon';

interface BreadcrumbProps {
  activeFilters: {
    category?: string;
    provider?: string;
    skillLevel?: string;
    search?: string;
  };
}

const Breadcrumb = ({ activeFilters }: BreadcrumbProps) => {
  const hasFilters = Object.values(activeFilters).some((value) => value);

  if (!hasFilters) return null;

  return (
    <div className="bg-muted/50 rounded-lg px-4 py-3 border border-border">
      <div className="flex items-center flex-wrap gap-2">
        <Icon name="FunnelIcon" size={18} className="text-primary" />
        <span className="text-sm font-medium text-text-primary">Active Filters:</span>
        {activeFilters.category && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            Category: {activeFilters.category}
          </span>
        )}
        {activeFilters.provider && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
            Provider: {activeFilters.provider}
          </span>
        )}
        {activeFilters.skillLevel && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-trust-builder/10 text-trust-builder border border-trust-builder/20">
            Level: {activeFilters.skillLevel}
          </span>
        )}
        {activeFilters.search && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
            Search: "{activeFilters.search}"
          </span>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;