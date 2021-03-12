import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LeafEaterNav } from '../../components/MiddleNav';

export default function LeafEater() {
  return (
    <div>
      <Head>
        <title>Leaf Eater Foods | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-gorilla.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="gorilla"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <LeafEaterNav active="Overview"></LeafEaterNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Leaf Eater Foods</h1>
                <p>
                  Marion Leaf Eater Food is a formulated diet for leaf-eating
                  primates, such as lemurs, colobus, langurs, and howlers, as
                  well as tree kangaroos, pandas, and other animals with
                  high-fiber requirements.
                </p>

                <p>
                  Leaf Eater is a complete formulation that not only provides
                  essential fiber and protein for daily living but also
                  life-enriching nutrients for stressful life cycle periods like
                  breeding and rearing.
                </p>

                <p>
                  Leaf Eater is an invigorating diet for older primates, and is
                  suitable for gorillas and orangutans. It does not contain
                  gliadin (wheat gluten) and may be helpful in feeding primates
                  with sensitivity to this protein.
                </p>

                <p className="mb-8">
                  This product contains carefully controlled amounts of iron and
                  iodine.
                </p>

                <h3 className="mb-2">Ordering Information</h3>
                <p>
                  Leaf Eater is available in three sizes (same formula) to
                  accommodate varying feeding protocols.
                </p>

                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center md:gap-16 lg:gap-8 xl:gap-16">
                  <div className="w-3/4">
                    <h4 className="text-center mb-2">Crumble</h4>
                    <figure>
                      <Image
                        src="/images/leaf-eater-crumble.jpg"
                        alt="Leaf Eater Crumble"
                        width={415}
                        height={275}
                      ></Image>
                      <figcaption>
                        SKU# LEC B25{' '}
                        <span className="block">
                          Size: &#8539;" diameter sphere (3mm)
                        </span>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="w-3/4">
                    <h4 className="text-center mb-2">Lemur</h4>
                    <figure>
                      <Image
                        src="/images/leaf-eater-lemur.jpg"
                        alt="Leaf Eater Lemur"
                        width={415}
                        height={275}
                      ></Image>
                      <figcaption>
                        SKU# LEL B25{' '}
                        <span className="block">
                          Size: 1" x &frac12;" biscuit (2.54 x 1.27cm)
                        </span>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="w-3/4">
                    <h4 className="text-center mb-2">Gorilla</h4>
                    <figure>
                      <Image
                        src="/images/leaf-eater-gorilla.jpg"
                        alt="Leaf Eater Gorilla"
                        width={415}
                        height={275}
                      ></Image>
                      <figcaption>
                        SKU# LEG B25{' '}
                        <span className="block">
                          Size: 2.5" x 1" biscuit (6.35 x 2.54cm)
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
