import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foods for Rare and Endangered Species | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="mb-8 sm:mb-16">
          <Image
            src="/images/banner-red-panda.jpg"
            width={730}
            height={211}
            layout="responsive"
            priority={true}
          ></Image>
        </div>

        <article>
          <div className="container 2xl:px-0">
            <div className="xl:flex xl:gap-12 mb-16 items-center">
              <div className="xl:w-2/3">
                <h1>
                  Life-Enriching Foods{' '}
                  <span className="block">for Rare and Endangered</span>
                  <span className="block">Species Since 1985</span>
                </h1>
                <p>
                  Marion Zoological develops and distributes specialty
                  life-enriching foods for exotic pets, and rare and endangered
                  zoo animals. Since 1985, these foods and innovative
                  manufacturing techniques have resulted in healthier animals
                  thanks to the work of many exceptional researchers,
                  scientists, and animal caregivers.​ Our foods provide
                  exceptional health benefits while providing the utmost in
                  manufacturing safety possible.
                </p>
              </div>
              <div className="text-center xl:w-1/3 xl:px-4 xl:items-center">
                <Link href="/leaf-eater">
                  <a>
                    <Image
                      src="/images/leaf-eater-lemur.jpg"
                      width={264}
                      height={192}
                      layout="fixed"
                      priority={true}
                    ></Image>
                  </a>
                </Link>
                <h4 className="text-center mt-4">Leaf Eater Food</h4>
              </div>
            </div>

            <div>
              <h2 className="text-center mb-8">Why Marion Zoological?</h2>
              <div className="lg:flex lg:flex-row lg:gap-16">
                <div className="2xl:w-1/2 mb-8">
                  <div className="sm:flex sm:flex-row sm:justify-between">
                    <h3 className="lg:mb-8">
                      Foods Protected by{' '}
                      <span className="block">Human-Grade and Kosher</span>
                    </h3>
                    <Image
                      src="/images/Marion-Kosher-568.png"
                      width={59}
                      height={75}
                      layout="fixed"
                    ></Image>
                  </div>
                  <p>
                    We have a choice and a higher duty to protect, enforce, and
                    provide for the animals in our care. Only the highest
                    quality and safest food standards of Human- Grade and Kosher
                    gives us this opportunity. These standards are what control
                    food sources, food additives, and processing conditions that
                    are free from direct and cross contamination of allergens,
                    pathogens, and toxins.
                  </p>
                </div>
                <div className="2xl:w-1/2">
                  <h3 className="lg:mb-8">
                    Foods Distinguished by
                    <span className="block">Quality and Innovation</span>
                  </h3>
                  <p>
                    Our food not only exemplifies quality by its smell and high
                    animal acceptance, but also by its ability to retain water
                    without falling apart and resist failure in moist,
                    high-humidity outdoor applications. These food attributes
                    lead to increased animal acceptance and food digestibility,
                    feeding protocol flexibility, and lower food waste and cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
