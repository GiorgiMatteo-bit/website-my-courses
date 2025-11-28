import AppImage from '@/components/ui/AppImage';

interface Provider {
  name: string;
  logo: string;
  alt: string;
}

interface ProviderLogosProps {
  providers: Provider[];
}

const ProviderLogos = ({ providers }: ProviderLogosProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
        Trusted Learning Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {providers.map((provider, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
          >
            <AppImage
              src={provider.logo}
              alt={provider.alt}
              className="w-full h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderLogos;