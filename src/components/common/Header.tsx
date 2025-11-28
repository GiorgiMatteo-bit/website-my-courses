'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
  { label: 'Certificate Gallery', href: '/certificate-gallery', icon: 'AcademicCapIcon' }];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border shadow-subtle ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight">Matteo Giorgi online courses</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) =>
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-muted hover:text-primary transition-all duration-300 ease-brand">

                <Icon name={item.icon as any} size={20} className="text-current" />
                <span>{item.label}</span>
              </Link>
            )}
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu">

            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} className="text-foreground" />
          </button>
        </div>

        {isMobileMenuOpen &&
        <div className="md:hidden border-t border-border bg-surface animate-fade-in">
            <nav className="flex flex-col py-4 px-6 space-y-2">
              {navigationItems.map((item) =>
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-text-primary hover:bg-muted hover:text-primary transition-all duration-300 ease-brand">

                  <Icon name={item.icon as any} size={20} className="text-current" />
                  <span>{item.label}</span>
                </Link>
            )}
            </nav>
          </div>
        }
      </div>
    </header>);

};

export default Header;