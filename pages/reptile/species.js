import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { ReptileNav } from '../../components/MiddleNav';

export default function ReptileSpecies() {
  return (
    <div>
      <Head>
        <title>Species Groups - Mozaic Reptile Foods | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-iguana.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="iguana"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <ReptileNav active="Species Groups"></ReptileNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Mozaic Reptile Foods</h1>

                <h3>Species Groups</h3>
                <p>
                  Mozaic Reptile Food is recommended by wildlife and zoo
                  veterinarians as a primary diet for reptile species groups
                  listed below. It has also been successfully used for
                  supplemental diets in various feeding protocols for amphibious
                  species like turtles.
                </p>

                <ul className="mb-8">
                  <li>Iguanas</li>
                  <li>Tortoises</li>
                  <li>Turtles (as a feeding supplement)</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
