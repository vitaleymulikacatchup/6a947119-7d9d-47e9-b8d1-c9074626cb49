"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="NovaFlow Logo"
        buttonText="Get Started"
        onButtonClick={() => {}}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to NovaFlow"
          subtitle="A Playful SaaS solution"
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => {}}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={["We provide innovative solutions that help businesses thrive.", "Join our growing community and be part of the future."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Visit our website", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Register an account", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start trading", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Key financial metrics of our token"
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "The maximum number of tokens that will ever exist", icon: "PieChart" },
            { value: "500K", description: "Circulating Supply", longDescription: "Tokens currently in circulation", icon: "Users" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaFlow"
          logoText="NovaFlow"
          className="footer"
          columns={[
            { title: "About", items: [{ label: "Contact", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} }] },
            { title: "Services", items: [{ label: "Web Development", onClick: () => {} }, { label: "Marketing", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Help Center", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 NovaFlow. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}