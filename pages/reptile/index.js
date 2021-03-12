import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { ReptileNav } from '../../components/MiddleNav';

export default function Reptile() {
  return (
    <div>
      <Head>
        <title>Mozaic Reptile Foods | Marion Zoological</title>
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
                <ReptileNav active="Overview"></ReptileNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Mozaic Reptile Foods</h1>
                <p>
                  Mozaic Reptile Food is a complete formulated diet for
                  omnivorous and herbivorous reptiles, such as iguanas, bearded
                  dragons, tortoises, and other common reptile species. It is
                  also safe to feed to amphibious turtles as a supplement to
                  fish or other meat diets.
                </p>

                <p>
                  Mozaic Reptile Food is formulated with a proper balance of
                  calcium and phosphorous for healthy skin and bones.
                  Ingredients are carefully specified to control nutrients and
                  natural incidents of copper, iron, and iodine. This food
                  contains highly digestible and palatable sources of energy,
                  plant proteins, and fibers.
                </p>

                <ul className="mb-8">
                  <li>
                    Made from plant proteins without gliadin (no wheat gluten)
                  </li>
                  <li>Contains proper calcium to phosphorus levels</li>
                  <li>Long shelf life and easy to store</li>
                  <li>Moistens with water, fruit juice, or vegetable juice</li>
                </ul>

                <h3>Ordering Information</h3>
                <p>
                  Reptile Food is available in two sizes (same formula) to
                  accommodate varying feeding protocols.
                </p>

                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center md:gap-16 lg:gap-8 xl:gap-16">
                  <div className="w-3/4 md:w-1/3">
                    <h4 className="text-center mb-2">Tortoise</h4>
                    <figure>
                      <Image
                        src="/images/reptile-tortoise.jpg"
                        alt="Mozaic Reptile Tortoise"
                        width={415}
                        height={275}
                      ></Image>
                      <figcaption>
                        SKU# MRFT B25{' '}
                        <span className="block">
                          Size: 1" x &frac12;" biscuit (2.54 x 1.27cm)
                        </span>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="w-3/4 md:w-1/3">
                    <h4 className="text-center mb-2">Lizard</h4>
                    <figure>
                      <Image
                        src="/images/reptile-lizard.jpg"
                        alt="Mozaic Lizard"
                        width={415}
                        height={275}
                      ></Image>
                      <figcaption>
                        SKU# MRFL B25{' '}
                        <span className="block">
                          Size: &#8539;" diameter sphere (3mm)
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
