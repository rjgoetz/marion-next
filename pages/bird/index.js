import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { BirdNav } from '../../components/MiddleNav';

export default function Scenic() {
  return (
    <div>
      <Head>
        <title>Scenic Bird Food | Marion Zoological</title>
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
                <BirdNav active="Overview"></BirdNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Scenic Bird Foods</h1>
                <p>
                  Scenic&trade; Bird Food is a complete formulated diet for
                  exotic hookbill and softbill birds such as macaws, cockatoos,
                  parrots, lories, budgies, mynahs, toucans, and finches. Scenic
                  Bird Food has improved the feeding protocols, nutrition,
                  health, and reproduction of rare and endangered birds
                  maintained in captivity throughout the world, including the
                  Black Palm Cockatoo (San Diego Zoo) and Buffon’s Macaw (Amigos
                  de las Aves).
                </p>

                <p>
                  Available in a variety of shapes, flavors, and sizes, Scenic
                  Bird Food can be fed to a myriad of different bird species at
                  all stages of life. Choose{' '}
                  <Link href="/bird/juvenile/hand-weaning">
                    <a>Hand Weaning</a>
                  </Link>{' '}
                  and{' '}
                  <Link href="/bird/juvenile/high-energy">
                    <a>Hand Weaning</a>
                  </Link>{' '}
                  products for baby and juvenile birds or popular products like{' '}
                  <Link href="/bird/adult/jungle">
                    <a>Hand Weaning</a>
                  </Link>{' '}
                  for larger hookbills like Macaws.
                </p>

                <ul className="mb-8">
                  <li>
                    Formulas are based upon published scientific research and
                    the judgment of qualified professionals​​.
                  </li>
                  <li>
                    Human Grade and Kosher Ingredients selected. The ingredients
                    also meet AAFCO specifications. ​
                  </li>
                  <li>
                    Manufacturing is performed by Human Grade and Kosher
                    Certified Facilities that maintain certifications in global
                    food quality, safety and responsibility in GMP's.
                  </li>
                  <li>
                    Including Special Certification requirements:​ Organic,
                    Kosher, Halal, Non-FMO, Gluten Free, Allergen-Free, Vegan.​
                  </li>
                  <li>
                    Quality control is achieved through rigorous and relentless
                    review and testing of ingredients and final products.
                  </li>
                  <li>Long shelf life and easy to store.</li>
                </ul>

                <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center md:gap-16 lg:gap-8 xl:gap-16">
                  <div>
                    <h2 className="text-center">Adult Bird Food</h2>
                    <figure>
                      <Link href="/bird/adult">
                        <a>
                          <Image
                            src="/images/adult-birds.jpg"
                            alt="macaw"
                            width={400}
                            height={400}
                          ></Image>
                        </a>
                      </Link>
                    </figure>
                  </div>

                  <div>
                    <h2 className="text-center">Baby / Juvenile Bird Food</h2>
                    <figure>
                      <Link href="/bird/juvenile">
                        <a>
                          <Image
                            src="/images/juvenile-birds.jpg"
                            alt="baby macaw"
                            width={400}
                            height={400}
                          ></Image>
                        </a>
                      </Link>
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
