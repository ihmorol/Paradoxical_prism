import React from 'react';
import content from '../data/landingContent.json';
import LayoutShell from '../components/landing/LayoutShell';
import HeaderNav from '../components/landing/HeaderNav';
import HeroSection from '../components/landing/HeroSection';
import ConceptExplainer from '../components/landing/ConceptExplainer';
import EthicsSafetyBlock from '../components/landing/EthicsSafetyBlock';
import SecondaryLinksRow from '../components/landing/SecondaryLinksRow';
import Footer from '../components/landing/Footer';

const Home = () => {
  return (
    <LayoutShell>
      <HeaderNav />

      <div className="flex-grow flex flex-col justify-center">
        <HeroSection
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          primaryActions={content.hero.primaryActions}
        />

        <ConceptExplainer text={content.concept.text} />

        <SecondaryLinksRow links={content.secondaryLinks} />

        <EthicsSafetyBlock
          heading={content.ethics.heading}
          body={content.ethics.body}
        />
      </div>

      <Footer
        text={content.footer.text}
        links={content.footer.links}
      />
    </LayoutShell>
  );
};

export default Home;
