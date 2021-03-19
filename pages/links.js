import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { ResourcesNav } from '../components/MiddleNav';

export default function Links() {
  return (
    <div>
      <Head>
        <title>Helpful Links | Marion Zoological</title>
      </Head>

      <Layout>
        <div className="lg:mb-16">
          <Image
            src="/images/banner-red-panda.jpg"
            width={730}
            height={211}
            layout="responsive"
            alt="red panda"
          ></Image>
        </div>

        <article>
          <div className="container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
              <div className="lg:col-span-3">
                <ResourcesNav active="Links"></ResourcesNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Helpful Links</h1>

                <p className="mb-8">
                  Obtaining sound and unbiased information on nutrition and
                  feeding of animals from reputable sources is not always easy.
                  For your convenience, we provide links to several respected
                  sources of information from professional and governmental
                  organizations below.
                </p>

                <h2>
                  <a
                    href="https://www.nationalacademies.org/dels/division-on-earth-and-life-studies"
                    target="_blank"
                  >
                    The National Academies, National Research Council
                  </a>
                </h2>
                <p className="mb-8">
                  The National Academies National Research Council – a
                  non-profit, private organization established in 1863 –
                  produces a series of science-based, objective, consensus
                  reports on nutrient requirements of animals. Government,
                  private industry, researches, and producers use these reports
                  as the worldwide standard for animal nutrition.
                </p>

                <h2>
                  <a href="http://www.cnsweb.org/" target="_blank">
                    Comparative Nutrition Society
                  </a>
                </h2>
                <p className="mb-8">
                  The comparative Nutrition Society (CNS) is a society created
                  to foster communication among laboratory and field scientists
                  from various disciplines with interests in comparative
                  nutrition.
                </p>

                <h2>
                  <a href="https://nutrition.org/" target="_blank">
                    American Society for Nutritional Sciences
                  </a>
                </h2>
                <p className="mb-8">
                  The American Society for Nutritional Sciences (ASNS) is a
                  professional research society dedicated to improving the
                  quality of life through the science of nutrition.
                </p>

                <h2>
                  <a href="https://nagonline.net/" target="_blank">
                    American Zoo & Aquarium Association Nutrition Advisory Group
                  </a>
                </h2>
                <p className="mb-8">
                  The American Zoo and Aquarium Association (AZA) Nutrition
                  Advisory Group (NAG) facilitates communication and
                  coordination among nutritionists and those requiring nutrition
                  information (i.e., AZA management groups, AZA member
                  institutions).
                </p>

                <h2>
                  <a href="https://www.nutrition.gov/" target="_blank">
                    U.S. Department of Agriculture
                  </a>
                </h2>
                <p className="mb-8">
                  The U.S. Department of Agriculture conducts research on animal
                  and human nutrition. The National Agriculture Library of the
                  U.S. Department of Agriculture provides a web-based resource
                  of the agency’s nutrition information.
                </p>

                <h2>
                  <a
                    href="http://www.fda.gov/AnimalVeterinary/"
                    target="_blank"
                  >
                    Food & Drug Administration (FDA) Center for Veterinary
                    Medicine
                  </a>
                </h2>
                <p className="mb-8">
                  The Center for Veterinary Medicine (CVM) regulates the
                  manufacture and distribution of food additives and drugs that
                  will be given to animals. These include animals from which
                  human foods are derived, as well as food additives and drugs
                  for pet (or companion) animals.
                </p>

                <h2>
                  <a href="https://www.aafco.org/" target="_blank">
                    Association of American Feed Control Officials
                  </a>
                </h2>
                <p className="mb-8">
                  The Association of American Feed Control Officials (AAFCO), an
                  advisory body of state and federal feed regulators, develops
                  recommended standards for nutrient contents of dog and cat
                  foods. AAFCO also publishes ingredient definitions and
                  regulations. The U.S. Food and Drug Administration works in
                  partnership with AAFCO to determine safe pet food ingredients
                  and testing protocols. In addition to federal regulation of
                  pet food, most state governments regulate pet foods and
                  labeling through their agricultural departments. AAFCO has
                  created a model feed bill that states often adopt in their own
                  laws.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
