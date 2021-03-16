import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { InsectNav } from '../../components/MiddleNav';

export default function InsectFeeding() {
  return (
    <div>
      <Head>
        <title>
          Feeding Directions - Orthocal Insect Supplement | Marion Zoological
        </title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-cricket.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="cricket"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <InsectNav active="Feeding Directions"></InsectNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Orthocal Insect Supplement</h1>

                <h2>Feeding Directions</h2>

                <ul className="mb-8">
                  <li>
                    Orthocal Insect Supplement should be fed to host insects 48
                    hours prior to insectivore feeding.
                  </li>
                  <li>
                    Offer Insect Supplement in a separate cup away from any
                    source of water.
                  </li>
                  <li>
                    Feed gut-loaded insects to insectivores on the third day or
                    after 48 hours have passed to ensure maximum calcium levels
                    have been attained in the insect gut.
                  </li>
                </ul>

                <h2>General Feeding Instructions</h2>
                <ul className="list-square">
                  <li>
                    Do not use food that is old, or has signs of insect or
                    rodent contamination.
                  </li>
                  <li>Never use food that is moldy.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
