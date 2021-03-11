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
                  an option, it is a choice to follow God's plan for long-term
                  survival.
                </p>

                <h3>Our Mission</h3>
                <p>
                  To be a responsible developer of foods for rare and endangered
                  species of animals, to manufacture these products to the
                  highest quality levels possible, and to continue to make
                  improvements to ensure the long-term survival of these animals
                  for future generations.
                </p>

                <h3>Our Goals</h3>
                <ul>
                  <li>
                    Promote conservation and propagation of rare and endangered
                    species of animals both in captivity and in the wild
                  </li>
                  <li>
                    Use scientific methodology to reduce the opportunity for
                    error
                  </li>
                  <li>
                    Publish the results of our work in scientific journals and
                    offer our work for peer review
                  </li>
                  <li>
                    Improve overall nutrition management through long term field
                    testing and follow-up
                  </li>
                  <li>
                    Develop formulae in a rational manner with the goal of
                    producing a minimum number of products that feed the maximum
                    number of animals
                  </li>
                  <li>
                    Develop not only efficacious foods, but food products that
                    reduce opportunity for feeding error, reduce delivery costs,
                    and eliminate redundant handling wherever possible
                  </li>
                  <li>
                    Achieve the highest quality levels supported by documented
                    quality control programs that not only prevent errors in
                    product integrity but allow near instantaneous corrective
                    actions
                  </li>
                  <li>
                    Simplify foods and feeding protocols to eliminate error and
                    increase reliability of long term feeding programs
                  </li>
                  <li>
                    Reduce the cost of manufacturing, storage, and delivery
                    while achieving unparalleled quality levels
                  </li>
                  <li>
                    Minimize the number of formulae, ingredients and physical
                    properties of our foods except where justifiable differences
                    make measurable and demonstrable improvements in health,
                    acceptance or palatability
                  </li>
                  <li>
                    Recognize that these precious creatures we feed are here for
                    us to enjoy the way God intended and with proper care will
                    be here for all future generations
                  </li>
                </ul>

                <p>
                  Without these goals, the role of nutrition management in
                  preserving rare and endangered species for future generations
                  will not counteract the destruction of habitat, abuse, illegal
                  poaching, environmental chaos, and poor health care of
                  institutionalized animals that has led to the WWF endangered
                  species list.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
