import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { CompanyNav } from '../../components/MiddleNav';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | Marion Zoological</title>
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
                <CompanyNav active="About Us"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>About Us</h1>
                <p>
                  Marion Zoological is a world-class provider of foods for rare
                  and endangered animals and specialty pets. Our foods have
                  improved the lives of the smallest birds, tortoises, primates,
                  and even the Giant Panda, enhancing their life spans, disease
                  resistance, and birthrates. Since 2003, our foods have
                  increased the birthrate of the Giant Panda from 0 live births
                  a year to over 700 in 2022.
                </p>
                <p>
                  Always known for its innovations, Marion Zoological has
                  changed the way many animals are fed. Birds on seed diets not
                  only thrive but have entertaining foods they can soak in water
                  before eating. Primates have delicious smelling and tasting
                  food, just like humans. Tortoises have tasty, high-fiber, and
                  high-energy foods to prepare for hibernation. Other animals
                  eat better, live longer, propagate, and look healthier. Exotic
                  pets also have brighter coats, stronger bones, stronger muscle
                  mass, and brighter feather colors.
                </p>

                <p>
                  Animal nutritionists can use Marion Zoological foods for
                  training, life maintenance, weaning juveniles, and
                  propagating. They can also provide desirable nutrition for
                  stressful times in any life cycle, such as birth, illness, or
                  injury.
                </p>

                <p className="mb-8">
                  Marion Zoological delivers life-enriching foods worldwide to
                  leading zoological institutions, private collections, animal
                  game farms, and the exotic pet industry. We are grateful for
                  the exceptional cooperation of our employees, partners,
                  customers, and suppliers who make Marion Zoological products a
                  success.
                </p>

                <div className="h-1 border-b border-brown mb-8"></div>
                <h3 className="mb-2">Brand Websites</h3>
                <div className="sm:flex">
                  <div className="mb-4 sm:w-1/2">
                    <p className="font-normal mb-0">Scenic Bird Food</p>
                    <p>
                      Visit{' '}
                      <Link href="https://www.scenicbirdfood.com">
                        <a target="_blank">Scenic Bird Food</a>
                      </Link>{' '}
                      for our complete line of small and bulk size food products
                      for Macaws, African Greys, Cockatoos, Cockatiels, Toucans,
                      Conures, and many other pet birds.
                    </p>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="font-normal mb-0">Mozaic Reptile Food</p>
                    <p>
                      Visit{' '}
                      <Link href="https://www.mozaicreptilefood.com">
                        <a target="_blank">Mozaic Reptile Food</a>
                      </Link>{' '}
                      for our complete line of small and bulk size food products
                      for tortoises, turtles, iguanas, bearded dragons, and
                      other herbivorous reptiles.
                    </p>
                  </div>
                </div>

                <div className="h-1 border-b border-brown mb-8"></div>

                <h3 className="mb-2">Contact Information</h3>
                <div className="sm:flex">
                  <div className="mb-4 sm:w-1/2">
                    <p className="font-normal mb-0">Marion Natural Foods</p>
                    <address className="not-italic">
                      14149 21st Ave N{' '}
                      <span className="block">Plymouth, MN 55447</span>U.S.A.
                    </address>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="font-normal mb-0">Phone</p>
                    <p>
                      T:(763) 559-3305
                      <span className="block">F:(763) 559-0789</span>
                      <span className="block">U.S.A., Canada, Caribbean</span>
                      T:(800) 327-7974
                    </p>

                    <p className="font-normal mb-0">Email</p>
                    <a href="mailto:sales@marionnaturalfoods.com">
                      sales@marionnaturalfoods.com
                    </a>
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
