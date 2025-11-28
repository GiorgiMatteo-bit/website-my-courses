'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CertificateCardProps {
  certificate: {
    id: string;
    title: string;
    provider: string;
    date: string;
    category: string;
    image: string;
    alt: string;
    hours: number;
    skillLevel: string;
  };
  onCardClick: (id: string) => void;
}

const CertificateCard = ({ certificate, onCardClick }: CertificateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(certificate.id)}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <AppImage
          src={certificate.image}
          alt={certificate.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground line-clamp-2 flex-1">
            {certificate.title}
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="BuildingOfficeIcon" size={16} className="mr-2 text-primary" />
            <span>{certificate.provider}</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="CalendarIcon" size={16} className="mr-2 text-primary" />
            <span>{certificate.date}</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="ClockIcon" size={16} className="mr-2 text-primary" />
            <span>{certificate.hours} hours completed</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
            {certificate.category}
          </span>
          <Icon
            name="ArrowTopRightOnSquareIcon"
            size={20}
            className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;