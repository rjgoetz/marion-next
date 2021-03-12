import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function Testimonials() {
  return (
    <div>
      <Head>
        <title>Testimonials | Marion Zoological</title>
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
                <CompanyNav active="Testimonials"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Testimonials</h1>

                <div className="mb-8 sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3>American Zoo &amp; Aquarium Association (AZA)</h3>
                    <figure>
                      <blockquote>
                        <q>
                          Products such as Tropical Bits and Red Apple Jungle
                          have been used successfully over a long period of time
                          for species such as sturnids and ramphstids, that are
                          susceptible to iron storage disease.
                        </q>
                      </blockquote>
                      <figcaption className="text-sm">
                        &mdash; Species Survival Plan, Husbandry Guidelines for
                        the Bali Mynah
                      </figcaption>
                    </figure>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/logo-aza.jpg"
                      alt="AZA logo"
                      width={160}
                      height={60}
                    ></Image>
                  </figure>
                </div>

                <div className="mb-8 sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3>Wildlife Discovery Center at Elawa Farm</h3>
                    <figure>
                      <blockquote>
                        <q>
                          Our Rhinoceros Iguana is perhaps one of the healthiest
                          iguanas you've ever seen in captivity (and same goes
                          with our Utila Island Spiny Tail Iguana) and have been
                          raised on your leaf eater and reptile diet almost
                          exclusively. I wouldn't trust our animals to anything
                          else.
                        </q>
                      </blockquote>
                      <figcaption className="text-sm">
                        &mdash; Rob Carmichael, Curator
                      </figcaption>
                    </figure>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/logo-wdc.jpg"
                      alt="Wildlife Discovery Center logo"
                      width={161}
                      height={130}
                    ></Image>
                  </figure>
                </div>

                <div className="mb-8 sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3>F. Harvey Pough, Cornell University</h3>
                    <p>
                      In his article on the care of amphibians and reptiles in
                      academic institutions (published by the National
                      Academies), Pough highlights the unique nature of Marion’s
                      specially sized reptile diets with the following
                      recommendation:
                    </p>
                    <figure>
                      <blockquote>
                        <q>
                          Marion Zoological makes an extruded diet of very small
                          diameter for herbivorous reptiles.
                        </q>
                      </blockquote>
                      <figcaption className="text-sm">
                        &mdash; F. Harvey Pough, Professor of Ecology &
                        Systematics, Cornell University
                      </figcaption>
                    </figure>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/logo-pough.jpg"
                      alt="F. Harvey Pough, Professor of Ecology"
                      width={161}
                      height={118}
                    ></Image>
                  </figure>
                </div>

                <div className="sm:flex sm:gap-8 sm:items-center lg:flex-wrap xl:flex-nowrap">
                  <div className="sm:w-2/3 lg:w-full xl:w-2/3">
                    <h3>Julie D'hondt</h3>
                    <figure>
                      <blockquote>
                        <q>
                          My lemur is 7&frac12; years old and has always been
                          fed Marion Leaf Eater food. He has never been sick and
                          his fur is thick and shines.
                        </q>
                      </blockquote>
                      <figcaption className="text-sm">
                        &mdash; Julie D'hondt
                      </figcaption>
                    </figure>
                  </div>
                  <figure className="sm:w-1/3 lg:w-full xl:w-1/3">
                    <Image
                      src="/images/julie-dhondt.jpg"
                      alt="Lemur"
                      width={161}
                      height={158}
                    ></Image>
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
