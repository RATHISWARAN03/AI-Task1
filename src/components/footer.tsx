import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { programs } from '@/lib/data';

function Logo() {
    return (
      <Link href="/" className="flex items-center gap-2 text-foreground">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4L14 44H18L20.5 35L27.5 35L30 44H34L24 4ZM21.5 29L24 14.5L26.5 29H21.5Z"
            fill="currentColor"
          />
          <path
            d="M21 4H27V9H21V4Z"
            fill="currentColor"
          />
        </svg>
        <span className="font-bold text-lg tracking-wider">IRON LADY</span>
      </Link>
    );
  }

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
];

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-card/20 mt-auto border-t">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 pr-8">
                        <Logo />
                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Empowering women to become transformational leaders through innovative coaching and development programs.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Programs</h3>
                        <ul className="space-y-3">
                            {programs.slice(0, 4).map((program) => (
                                <li key={program.id}>
                                    <Link href={`/programs#${program.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {program.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.name} 
                                    href={social.href} 
                                    aria-label={social.name}
                                    className="text-muted-foreground bg-muted/50 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t bg-background/50">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
                    <p className='flex items-center justify-center gap-1.5'>
                        &copy; 2026. Built by <Heart className="w-4 h-4 text-red-500 fill-current" /> Rathiswaran
                    </p>
                </div>
            </div>
        </footer>
    );
}