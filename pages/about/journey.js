import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { CompanyNav } from '../../components/MiddleNav';

export default function About() {
  return (
    <div>
      <Head>
        <title>Our Journey | Marion Zoological</title>
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
                <CompanyNav active="Our Journey"></CompanyNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Our Journey</h1>
                <p className="mb-8">
                  In 1985 a collaboration of exceptional researchers,
                  scientists, and exotic animal caretakers recognized a need to
                  develop capabilities in the area of animal nutrition for rare
                  and endangered species. Prior to this effort, scientific
                  studies and documented field testing of the nutritional
                  requirements for these species had been hampered by the
                  following issues: a lack of resources; conflicting scientific
                  directions; inappropriate food manufacturing technologies;
                  economic motivation; and a lack of access to collections of
                  animals both in the wild and in captivity.​
                </p>

                <div className="h-1 border-b border-brown mb-8"></div>

                <h3 className="mb-2">Contact Information</h3>
                <div className="sm:flex">
                  <div className="mb-4 sm:w-1/2">
                    <p className="font-normal mb-0">Marion Zoological</p>
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
                    <a href="mailto:sales@marionzoological.com">
                      sales@marionzoological.com
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
