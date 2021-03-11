import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foods for Rare and Endangered Species | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="mb-8 sm:mb-16">
          <Image
            src="/images/banner-lemurs.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:flex lg:gap-8">
              <div className="lg:w-12 lg:bg-beige lg:h-80"></div>
              <div className="lg:w-full lg:pt-12">
                <h1>
                  Welcome to{' '}
                  <span className="block sm:inline">Marion Zoological</span>
                </h1>
                <p>
                  Marion Zoological develops and manufactures specialty,
                  life-enriching foods for rare and endangered species of
                  animals. Since 1985, these formulated foods and innovative
                  manufacturing methodologies have resulted in improvements to
                  the captive conservation and propagation of over two hundred
                  animal species. Prior to this time, many of these species
                  would not survive on their own either in captivity or in the
                  wild. Now, with the success of Marion Zoological foods,
                  developed and formulated in close collaboration with
                  exceptional researchers, scientists, and animal caregivers,
                  many of these species are now considered to be
                  self-sustaining.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
