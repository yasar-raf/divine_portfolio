import { Hero } from '@/components/hero';
import { Now } from '@/components/now';
import { SelectedWork } from '@/components/selected-work';
import { Trajectory } from '@/components/trajectory';
import { Writing } from '@/components/writing';
import { Contact } from '@/components/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Now />
      <SelectedWork />
      <Trajectory />
      <Writing />
      <Contact />
    </>
  );
}
