import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import { BirdNav, AdultBirdNav } from '../../../components/MiddleNav';
import BirdCategory from '../../../components/BirdCategory';

export default function ScenicAdult() {
  return (
    <div>
      <Head>
        <title>Adult Birds - Scenic Bird Food | Marion Zoological</title>
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
                <BirdNav active="Adult Birds">
                  <AdultBirdNav></AdultBirdNav>
                </BirdNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Scenic Bird Foods for Adult Birds</h1>

                <BirdCategory
                  link="/bird/adult/jungle"
                  title="Jungle"
                  subtitle="Parrots, Macaws, Cockatoos"
                  image={{
                    src: '/images/jungle.jpg',
                    alt: 'Macaw with Scenic Jungle Food',
                  }}
                >
                  <p>
                    Best for large and medium-sized birds that like to eat with
                    their feet. Individual and mixed flavors.
                  </p>
                </BirdCategory>

                <BirdCategory
                  link="/bird/adult/paradise"
                  title="Paradise"
                  subtitle="Parrots, Macaws, Cockatoos"
                  image={{
                    src: '/images/paradise.jpg',
                    alt: 'Amazon with Scenic Paradise Food',
                  }}
                >
                  <p>
                    Great for large and medium-sized birds that like to eat with
                    their beaks. Individual and mixed flavors.
                  </p>
                </BirdCategory>

                <BirdCategory
                  link="/bird/adult/hot-healthy"
                  title="Hot & Healthy"
                  subtitle="Cockatiel Food"
                  image={{
                    src: '/images/hot-healthy.jpg',
                    alt: 'Cockatiel with Hot and Healthy Food',
                  }}
                >
                  <p>
                    Spicy! Hot chilies and spices make this the ideal food for
                    Cockatiels and Love Birds.
                  </p>
                </BirdCategory>

                <BirdCategory
                  link="/bird/adult/allprem"
                  title="Allprem"
                  subtitle="Parakeet Food"
                  image={{
                    src: '/images/allprem.jpg',
                    alt: 'Parakeet with Allprem Food',
                  }}
                >
                  <p>
                    A flavorful mix of apple and corn morsels for improved
                    health of Parakeets and other small hookbills.
                  </p>
                </BirdCategory>

                <BirdCategory
                  link="/bird/adult/lory"
                  title="Scenic Lory"
                  subtitle="Dry Lory and Lorikeet Food"
                  image={{
                    src: '/images/scenic-lory.jpg',
                    alt: 'Lories with Scenic Lory Food',
                  }}
                >
                  <p>
                    Natural-flavored powder or pellet for improved nutrition,
                    health, and cage-cleanliness of Lories and Lorikeets.
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
