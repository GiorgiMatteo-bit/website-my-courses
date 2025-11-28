'use client';

import { useState, useEffect, useMemo } from 'react';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';
import AchievementStats from './AchievementStats';


interface Certificate {
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
}

const CertificateGalleryInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockCertificates: Certificate[] = [
    {
      id: 'git-essential',
      title: 'Git Essential Training',
      provider: 'LinkedIn Learning',
      date: '11/23/2025',
      category: 'Git',
      image: "/assets/images/43fa2eb3c4c7-1763914153204.jpeg",
      alt: 'Git logo certificate image with purple/violet Git branding, showing GIT text prominently with terminal/command line styling background elements',
      hours: 2,
      skillLevel: '',
      description: 'Essential certification covering Git fundamentals including version control, branching strategies, collaboration workflows, and best practices for team development.',
      keyTakeaways: [
        'Understand the basics of Git and its importance for version control',
        'Install and configure Git on various operating systems',
        'Push code to a remote repository and manage changes',
        'Work with branches and merge code effectively',
        'Troubleshoot common issues in Git'
      ],
      skills: ['Git', 'Version Control', 'GitHub', 'GitLab', 'Collaboration', 'Code Review'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/git-version-control'
    },
    {
      id: 'python-data-cleaning',
      title: 'Data Cleaning in Python',
      provider: 'LinkedIn Learning',
      date: '11/23/2025',
      category: 'Python',
      image: "/assets/images/4e9580168882-1763915185366.jpeg",
      alt: 'Python data science certificate image with green snake/python logo design, showing data text prominently with cloud computing and data science themed background',
      hours: 1,
      skillLevel: '',
      description: 'Essential certification focusing on data cleaning techniques, error handling, validation, and best practices for maintaining data integrity.',
      keyTakeaways: [
        'Identify and describe common types of data errors such as missing values, bad values, and duplicated data',
        'Apply methods to detect and handle missing values using techniques like isnull, fillna, and forward filling',
        'Analyze and address bad values using statistical methods, groupby, and custom functions',
        'Implement data validation and cleaning techniques using libraries such as Pandera',
        'Develop strategies to detect and handle corrupted files using digital signatures and hashes'
      ],
      skills: ['Python', 'Data Cleaning', 'Pandas', 'Data Validation', 'Pandera', 'Data Quality'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/python-data-cleaning'
    }
  ];


  const totalHours = useMemo(
    () => mockCertificates.reduce((sum, cert) => sum + cert.hours, 0),
    []
  );

  const totalSkills = useMemo(() => {
    const allSkills = mockCertificates.flatMap((cert) => cert.skills);
    return new Set(allSkills).size;
  }, []);

  const handleCardClick = (id: string) => {
    const certificate = mockCertificates.find((cert) => cert.id === id);
    if (certificate) {
      setSelectedCertificate(certificate);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-48 bg-muted rounded-xl" />
              <div className="h-32 bg-muted rounded-xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="h-96 bg-muted rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-20 px-6 overflow-hidden pt-20 bg-[#0077B5] pb-px">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              LinkedIn Learning Courses
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore my professional development through validated certifications and hands-on learning experiences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <AchievementStats
          totalCertifications={mockCertificates.length}
          totalHours={totalHours}
          skillsAcquired={totalSkills}
          activeFilters={0}
        />

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Showing {mockCertificates.length} Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CertificateGalleryInteractive;