import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { InsectNav } from '../../components/MiddleNav';

export default function InsectSpecies() {
  return (
    <div>
      <Head>
        <title>
          Species Groups - Orthocal Insect Supplement | Marion Zoological
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
                <InsectNav active="Species Groups"></InsectNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Orthocal Insect Supplement</h1>

                <h2>Species Groups</h2>
                <p>
                  Orthocal Insect Supplement is recommended by wildlife and zoo
                  veterinarians to improve the calcium and phosphorous ratios of
                  insects used in insectivore feeding protocols.
                </p>

                <ul className="mb-8">
                  <li>Crickets</li>
                  <li>Meal Worms</li>
                  <li>Wax Worms</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
