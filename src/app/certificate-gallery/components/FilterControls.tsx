'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterControlsProps {
  categories: string[];
  providers: string[];
  skillLevels: string[];
  selectedCategory: string;
  selectedProvider: string;
  selectedSkillLevel: string;
  sortBy: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onProviderChange: (provider: string) => void;
  onSkillLevelChange: (level: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

const FilterControls = ({
  categories,
  providers,
  skillLevels,
  selectedCategory,
  selectedProvider,
  selectedSkillLevel,
  sortBy,
  searchQuery,
  onCategoryChange,
  onProviderChange,
  onSkillLevelChange,
  onSortChange,
  onSearchChange,
  onReset,
}: FilterControlsProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center">
          <Icon name="FunnelIcon" size={24} className="mr-2 text-primary" />
          Filter & Sort
        </h2>
        <button
          onClick={onReset}
          className="flex items-center px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300"
        >
          <Icon name="ArrowPathIcon" size={18} className="mr-2" />
          Reset All
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search certifications..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Provider</label>
            <select
              value={selectedProvider}
              onChange={(e) => onProviderChange(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="">All Providers</option>
              {providers.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Skill Level</label>
            <select
              value={selectedSkillLevel}
              onChange={(e) => onSkillLevelChange(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="">All Levels</option>
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
              <option value="hours-desc">Most Hours</option>
              <option value="hours-asc">Least Hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;