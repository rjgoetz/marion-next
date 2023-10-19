import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function Achievements() {
  return (
    <div>
      <Head>
        <title>Achievements | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-giraffe.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <CompanyNav active="Achievements"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Achievements</h1>

                <div className="sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3>Giant Panda Born at the San Diego Zoo</h3>
                    <p>
                      In 2000 and 2003, the San Diego Zoo welcomed the birth and
                      survival of two Giant Panda Cubs. Never before have Giant
                      Panda cubs been born in captivity and survived outside the
                      breeding compounds of China. Marion Zoological
                      congratulates the exceptionally skilled staff at the San
                      Diego Zoo and share in their success!​
                    </p>
                    <p className="mb-8 lg:mb-0">
                      Since 1985, Marion Zoological has provided foods for the
                      breeding, enrichment and supplementation needs of over 200
                      species of rare and endangered animals. Our success with
                      primates, reptiles, and birds are recognized by
                      authoritative publications, numerous rehabilitative
                      organizations and international veterinary schools.​
                    </p>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/panda.jpg"
                      alt="panda cub"
                      width={213}
                      height={214}
                    ></Image>
                    <figcaption>
                      Panda cub shown with our food.{' '}
                      <span className="block"></span> Source:{' '}
                      <a
                        href="https://sandiegozoowildlifealliance.org/"
                        target="_blank"
                      >
                        San Diego Zoo
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
