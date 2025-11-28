import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CertificateGalleryInteractive from './components/CertificateGalleryInteractive';

export const metadata: Metadata = {
  title: 'Certificate Gallery - CertiFolio Pro',
  description: 'Explore my professional development journey through validated certifications and hands-on learning experiences. Interactive showcase featuring filtering, search capabilities, and detailed credential verification.',
};

export default function CertificateGalleryPage() {
  return (
    <>
      <Header />
      <CertificateGalleryInteractive />
    </>
  );
}