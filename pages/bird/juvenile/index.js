import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import { BirdNav } from '../../../components/MiddleNav';
import BirdCategory from '../../../components/BirdCategory';

export default function ScenicJuvenile() {
  return (
    <div>
      <Head>
        <title>Juvenile Birds - Scenic Bird Food | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-macaws.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="scarlet macaws"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <BirdNav active="Juvenile Birds"></BirdNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Scenic Bird Foods for Juvenile Birds</h1>

                <BirdCategory
                  link="/bird/juvenile/high-energy"
                  title="High Energy Hand Feeding"
                  subtitle="Baby Bird Food"
                  image={{
                    src: '/images/hehf.jpg',
                    alt: 'Macaw with Hand Feeding Food',
                  }}
                >
                  <p>
                    An essential beginning and first step toward nutritional
                    consistency from hatch to adulthood.
                  </p>
                </BirdCategory>

                <BirdCategory
                  link="/bird/juvenile/hand-weaning"
                  title="Hand Weaning"
                  subtitle="Training Food for Juvenile & Adult Birds"
                  image={{
                    src: '/images/hand-weaning.jpg',
                    alt: 'African Gray with Scenic Hand Weaning Food',
                  }}
                >
                  <p>
                    The proven, alternative feeding protocal for weaning
                    success.
                  </p>
                </BirdCategory>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
