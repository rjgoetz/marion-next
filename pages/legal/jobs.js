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

                <p>Please check back for job opportunities in the future.</p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
