import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { LegalNav } from '../../components/MiddleNav';

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Marion Zoological</title>
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
                <LegalNav active="Privacy Policy"></LegalNav>
              </div>

              <div className="lg:col-span-9">
                <h1>Privacy Policy</h1>
                <p>
                  Thank you for visiting marionzoological.com. This privacy
                  policy tells you how we use personal information collected at
                  this site. Please read this privacy policy before using the
                  site or submitting any personal information. By using the
                  site, you are accepting the practices described in this
                  privacy policy. These practices may be changed, but any
                  changes will be posted and changes will only apply to
                  activities and information on a going forward, not retroactive
                  basis. You are encouraged to review the privacy policy
                  whenever you visit the site to make sure that you understand
                  how any personal information you provide will be used.
                </p>
                <p>
                  <span className="font-semibold block">Note:</span>
                  The privacy practices set forth in this privacy policy are for
                  marionzoological.com only. If you link to other web sites,
                  please review the privacy policies posted at those sites.
                </p>

                <h2>Collection of Information</h2>
                <p>
                  We collect personally identifiable information, like names,
                  postal addresses, email addresses, etc., when voluntarily
                  submitted by our visitors. The information you provide is used
                  to fulfill your specific request. This information is only
                  used to fulfill your specific request, unless you give us
                  permission to use it in another manner, for example to add you
                  to one of our mailing lists.
                </p>

                <h2>Cookie/Tracking Technology</h2>
                <p>
                  The Site may use cookie and tracking technology depending on
                  the features offered. Cookie and tracking technology are
                  useful for gathering information such as browser type and
                  operating system, tracking the number of visitors to the Site,
                  and understanding how visitors use the Site. Cookies can also
                  help customize the Site for visitors. Personal information
                  cannot be collected via cookies and other tracking technology,
                  however, if you previously provided personally identifiable
                  information, cookies may be tied to such information.
                  Aggregate cookie and tracking information may be shared with
                  third parties.
                </p>

                <h2>Distribution of Information</h2>
                <p>
                  We may share information with governmental agencies or other
                  companies assisting us in fraud prevention or investigation.
                  We may do so when: (1) permitted or required by law; or, (2)
                  trying to protect against or prevent actual or potential fraud
                  or unauthorized transactions; or, (3) investigating fraud
                  which has already taken place. The information is not provided
                  to these companies for marketing purposes.
                </p>

                <h2>Commitment to Data Security</h2>
                <p>
                  Your personally identifiable information is kept secure. Only
                  authorized employees, agents and contractors (who have agreed
                  to keep information secure and confidential) have access to
                  this information. All emails and newsletters from this site
                  allow you to opt out of further mailings.
                </p>
                <h2>Privacy Contact Information</h2>
                <p>
                  If you have any questions, concerns, or comments about our
                  privacy policy you may contact us using the information below:
                </p>
                <p>
                  <span className="font-semibold block">Email</span>
                  <a href="mailto:sales@marionzoological.com">
                    sales@marionzoological.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold block">Phone</span>T: (800)
                  327-7974
                </p>
                <p>
                  We reserve the right to make changes to this policy. Any
                  changes to this policy will be posted.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
