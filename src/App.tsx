/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About, Services, Gallery, Reviews } from './components/Sections';
import { Products } from './components/Products';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Products />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </Layout>
  );
}
