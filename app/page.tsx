import { BenefitsSection } from '@/components/layout/sections/benefits';
import { CommunitySection } from '@/components/layout/sections/community';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { TeamSection } from '@/components/layout/sections/team';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export const metadata = {
  title: 'Dot Dasher - Web Dev Services',
  description: 'Web development, marketing, and SEO services',
  openGraph: {
    type: 'website',
    url: 'https://github.com/nobruf/shadcn-landing-page.git',
    title: 'Dot Dasher- Web Dev Services',
    description: 'Web development, marketing, and SEO services',
    images: [
      {
        url: 'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg',
        width: 1200,
        height: 630,
        alt: 'Dot Dasher - Web Dev Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://www.dotdasher.com',
    title: 'Dot Dasher - Web Dev Services',
    description: 'Web development, marketing, and SEO services',
    images: [
      'https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg',
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <TeamSection /> */}
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
