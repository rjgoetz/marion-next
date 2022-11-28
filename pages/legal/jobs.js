import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LegalNav } from '../../components/MiddleNav';

export default function Legal() {
  return (
    <div>
      <Head>
        <title>Job Opportunities | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="mb-8 sm:mb-16">
          <Image
            src="/images/banner-lemurs.jpg"
            width={730}
            height={211}
            layout="responsive"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <LegalNav active="Job Opportunities"></LegalNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Job Opportunities</h1>

                <h2 className="mb-4">Animal Scientist/Nutritionist</h2>

                <h3>Description</h3>
                <ul className="mb-8">
                  <li>
                    Marion Zoological, Inc. seeks an Animal
                    Scientist/Nutritionist in Plymouth, Minnesota.
                  </li>
                  <li>
                    Create need-based nutrition projections for targeted exotic
                    animals, which includes determining the nutritional
                    requirements of exotic, farm, and pet animals.
                  </li>

                  <li>
                    Confirm key nutrients of select ingredients by laboratory
                    analysis which includes studying the nutritive values of
                    feed ingredients and study the effects of management
                    practices, processing methods, feed, and environmental
                    conditions on quality and quantity of animal products.
                  </li>

                  <li>
                    Protect current formulations from negative effects of
                    shortages and rising costs including preparing formulations
                    and cost estimates of various feeding rations.
                  </li>

                  <li>
                    Maintain computer nutritional database verifying models of
                    nutritional profiles and individual ingredients.
                  </li>

                  <li>
                    Comply with state and federal government food safety, label,
                    and facility safety regulations.
                  </li>

                  <li>
                    Participate in research projections leading to publication
                    of peer-reviewed scientific journals including topics such
                    as nutritional impact on control selection and breeding
                    practices to increase efficiency of production and improve
                    quality of animals and increase live births.
                  </li>

                  <li>
                    Measure food energy consumption and perform output analysis,
                    and coordinate formulation and ingredient selection with
                    production facilities.
                  </li>

                  <li>
                    Formulate and evaluate diets as Chief Animal Nutritionist
                    working closely with the Associate Nutritionist, and the ANC
                    research, Science, and Animal Care teams to identify and
                    address any issues.
                  </li>

                  <li>
                    This involves partnering with Animal Care and Science
                    teams at zoos as well as with outside research institutions,
                    including universities, zoos, and aquariums.
                  </li>

                  <li>
                    The ability to prioritize and manage multiple tasks. Other
                    duties as assigned.
                  </li>

                  <li>
                    Must have proof of legal authority to work in the U.S.
                    Requirements – Education – Bachelor’s degree (U.S. or
                    foreign equivalent) in Animal Science, Animal Husbandry, or
                    a closely related field.
                  </li>
                </ul>

                <h3>Experience</h3>
                <ul>
                  <li>
                    Six years of experience as Zoo Nutritionist, Head Zoo
                    Nutritionist and Operations Coordinator or similar position
                    where the person is responsible for formulating nutritional
                    diets to meet the nutritional needs of more than 120
                    different species at a top tier institution or institutions
                    such as La Aurora Zoo Guatemala, Zoologico de
                    Chapultepec, General Directorate for Mexico City Zoos,
                    Disney's Animal Kingdom, San Diego Zoological Society, or
                    Smithsonian National Zoo.
                  </li>

                  <li>
                    Six years of experience supervising staff as well as all
                    aspects of preparation of zoo animal diet nutrition
                    including the sourcing of the raw ingredients, inspection,
                    and preparation of food, as well as supervision of staff to
                    ensure sanitary conditions.
                  </li>

                  <li>
                    All experience can be gained concurrently in same 6 year
                    period.
                  </li>

                  <li>
                    Travel, including international travel, up to 30% of time
                    required.
                  </li>

                  <li>
                    Interested candidates should apply by sending their resume
                    and cover letter to James Goetz at{' '}
                    <a href="mailto:jimg@marionzoological.com">
                      jimg@marionzoological.com
                    </a>
                    . This position is for full-time employment by Marion
                    Zoological, Inc. for employment in Plymouth, Minnesota in
                    the Twin Cities metro area. EOE.
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
