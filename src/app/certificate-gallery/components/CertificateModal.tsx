'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CertificateModalProps {
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
    description: string;
    keyTakeaways: string[];
    skills: string[];
    verificationUrl: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal = ({ certificate, isOpen, onClose }: CertificateModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCertificate, setEditedCertificate] = useState(certificate);

  useEffect(() => {
    setEditedCertificate(certificate);
    setIsEditing(false);
  }, [certificate]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (isEditing) {
          setIsEditing(false);
          setEditedCertificate(certificate);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, isEditing, certificate]);

  if (!isOpen || !certificate || !editedCertificate) return null;

  const handleEditToggle = () => {
    if (isEditing) {
      setEditedCertificate(certificate);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field: string, value: any) => {
    setEditedCertificate(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleKeyTakeawayChange = (index: number, value: string) => {
    if (!editedCertificate) return;
    const newTakeaways = [...editedCertificate.keyTakeaways];
    newTakeaways[index] = value;
    setEditedCertificate({ ...editedCertificate, keyTakeaways: newTakeaways });
  };

  const handleAddKeyTakeaway = () => {
    if (!editedCertificate) return;
    setEditedCertificate({
      ...editedCertificate,
      keyTakeaways: [...editedCertificate.keyTakeaways, '']
    });
  };

  const handleRemoveKeyTakeaway = (index: number) => {
    if (!editedCertificate) return;
    const newTakeaways = editedCertificate.keyTakeaways.filter((_, i) => i !== index);
    setEditedCertificate({ ...editedCertificate, keyTakeaways: newTakeaways });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <button
            onClick={handleEditToggle}
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label={isEditing ? "Cancel editing" : "Edit certificate"}
          >
            {isEditing ? <Icon name="XMarkIcon" size={24} /> : <Icon name="PencilIcon" size={24} />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <div className="relative h-80 overflow-hidden rounded-t-2xl bg-muted">
          {isEditing ? (
            <div className="w-full h-full flex items-center justify-center bg-muted p-4">
              <div className="text-center">
                <label className="block text-sm font-medium mb-2 text-foreground">Image Path:</label>
                <input
                  type="text"
                  value={editedCertificate.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground mb-2"
                  placeholder="/assets/images/certificate.jpg"
                />
                <label className="block text-sm font-medium mb-2 text-foreground">Alt Text:</label>
                <input
                  type="text"
                  value={editedCertificate.alt}
                  onChange={(e) => handleInputChange('alt', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground"
                  placeholder="Image description"
                />
              </div>
            </div>
          ) : (
            <>
              <AppImage
                src={editedCertificate.image}
                alt={editedCertificate.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </>
          )}
          <div className="absolute bottom-6 left-6 right-6">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editedCertificate.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-2xl font-bold"
                  placeholder="Certificate Title"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={editedCertificate.provider}
                    onChange={(e) => handleInputChange('provider', e.target.value)}
                    className="flex-1 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    placeholder="Provider"
                  />
                  <input
                    type="text"
                    value={editedCertificate.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="flex-1 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                    placeholder="Date"
                  />
                </div>
              </div>
            ) : (
              <>
                <h2 id="modal-title" className="text-3xl font-bold text-white mb-2">
                  {editedCertificate.title}
                </h2>
                <div className="flex items-center space-x-4 text-white/90">
                  <span className="flex items-center">
                    <Icon name="BuildingOfficeIcon" size={18} className="mr-2" />
                    {editedCertificate.provider}
                  </span>
                  <span className="flex items-center">
                    <Icon name="CalendarIcon" size={18} className="mr-2" />
                    {editedCertificate.date}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            {editedCertificate.skillLevel && (
              isEditing ? (
                <input
                  type="text"
                  value={editedCertificate.skillLevel}
                  onChange={(e) => handleInputChange('skillLevel', e.target.value)}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
                  placeholder="Skill Level"
                />
              ) : (
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground">
                  {editedCertificate.skillLevel}
                </span>
              )
            )}
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedCertificate.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                  placeholder="Category"
                />
                <div className="flex items-center gap-2">
                  <Icon name="ClockIcon" size={18} className="text-text-secondary" />
                  <input
                    type="number"
                    value={editedCertificate.hours}
                    onChange={(e) => handleInputChange('hours', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 rounded-lg bg-muted border border-border text-foreground text-sm"
                    placeholder="Hours"
                  />
                  <span className="text-sm text-text-secondary">hours</span>
                </div>
              </>
            ) : (
              <>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  {editedCertificate.category}
                </span>
                <span className="flex items-center text-sm text-text-secondary">
                  <Icon name="ClockIcon" size={18} className="mr-2" />
                  {editedCertificate.hours} hours
                </span>
              </>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">About This Certification</h3>
            {isEditing ? (
              <textarea
                value={editedCertificate.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground min-h-[100px]"
                placeholder="Certificate description"
              />
            ) : (
              <p className="text-text-secondary leading-relaxed">{editedCertificate.description}</p>
            )}
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground flex items-center">
                <Icon name="CheckCircleIcon" size={24} className="mr-2 text-success" />
                Key Takeaways
              </h3>
              {isEditing && (
                <button
                  onClick={handleAddKeyTakeaway}
                  className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  + Add Takeaway
                </button>
              )}
            </div>
            <ul className="space-y-3">
              {editedCertificate.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  {isEditing ? (
                    <div className="flex-1 flex items-start gap-2">
                      <Icon name="CheckIcon" size={20} className="mt-2.5 text-success flex-shrink-0" />
                      <input
                        type="text"
                        value={takeaway}
                        onChange={(e) => handleKeyTakeawayChange(index, e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-muted border border-border text-foreground"
                        placeholder="Key takeaway"
                      />
                      <button
                        onClick={() => handleRemoveKeyTakeaway(index)}
                        className="mt-2 p-1 rounded hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      >
                        <Icon name="XMarkIcon" size={18} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Icon name="CheckIcon" size={20} className="mr-3 mt-0.5 text-success flex-shrink-0" />
                      <span className="text-text-secondary">{takeaway}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {isEditing ? (
              <button
                onClick={() => {
                  console.log('Saved certificate data:', editedCertificate);
                  setIsEditing(false);
                }}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-colors duration-300"
              >
                <Icon name="CheckIcon" size={20} className="mr-2" />
                Save Changes
              </button>
            ) : (
              <a
                href={editedCertificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                <Icon name="DocumentCheckIcon" size={20} className="mr-2" />
                View Official Certificate (PDF)
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;