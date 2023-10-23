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
            priority={true}
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
                  Marion Zoological develops and distributes specialty
                  life-enriching foods for exotic pets, and rare and endangered
                  zoo animals. Since 1985, these foods and innovative
                  manufacturing techniques have resulted in healthier animals
                  thanks to the work of many exceptional researchers,
                  scientists, and animal caregivers.​
                </p>
                <p>
                  Marion Zoological foods provide exceptional health benefits
                  plus they provide the safest food possible. Our products meet
                  or exceed human grade standards and are certified Kosher.​
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
