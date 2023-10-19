import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function Mission() {
  return (
    <div>
      <Head>
        <title>Philosophy, Mission, and Goals | Marion Zoological</title>
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
                <CompanyNav active="Mission"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Philosophy, Mission, and Goals</h1>
                <h3>Our Philosophy</h3>
                <p>
                  That the world is a shared environment and all of God's
                  creatures should benefit from each other. Coexistence is not
                  an option; it is a choice to follow our Creator's plan for
                  long-term survival.
                </p>

                <h3>Our Mission and Promises</h3>
                <ul>
                  <li>
                    We are a RESPONSIBLE developer of foods for all animals
                    especially those in captivity.
                  </li>
                  <li>
                    We offer our foods in the highest of all quality and safety
                    standards “HUMAN KOSHER”. (link)​
                  </li>
                  <li>
                    We will always endeavor to IMPROVE our products when
                    possible.​
                  </li>
                  <li>
                    We will NEVER sell any product below our quality standards.​
                  </li>
                  <li>
                    We will use INNOVATION to improve the relationship between
                    humans and animals. (link Innovation) ​
                  </li>
                  <li>
                    Develop formulae in a rational manner with the goal of
                    producing a minimum number of products that feed the maximum
                    number of animals. (link + piece of history) ​
                  </li>
                  <li>
                    Promote conservation and propagation of rare and endangered
                    species of animals both in captivity and in the wild. (link
                    possibly treats + supplements + training)
                  </li>
                </ul>

                <h3>Our Goals</h3>
                <ul>
                  <li>
                    Set the best example of our Mission so that all precious
                    animals are here for us to enjoy the way our Creator
                    intended and with proper care will be here for future
                    generations​
                  </li>
                  <li>
                    The role of nutrition and food safety management in
                    preserving rare and endangered species for future
                    generations will not counteract the destruction of habitat,
                    abuse, poaching, environmental chaos, and poor health care
                    of institutionalized animals that has led to the WWF
                    endangered species list.​
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
