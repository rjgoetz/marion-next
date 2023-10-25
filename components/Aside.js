import Image from 'next/image';

export default function Aside() {
  return (
    <aside className="bg-beige py-8 lg:pt-20 lg:pb-16 lg:h-full">
      <div className="container lg:px-8">
        <h4 className="lg:mt-2">Affiliations</h4>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/affiliations.png"
            width={233}
            height={183}
            alt="MZ Affiliations: AAZV, AZA, AAZK"
          ></Image>
        </div>

        <h4>News</h4>
        <div className="mb-8 text-sm">
          <p className="font-semibold mb-0">AAZV 55th Annual Conference</p>
          <p className="italic">September 15-22, 2023 in Nashville, TN</p>
          <p>
            Marion Zoological will be attending the AAZV conference this year in
            Nashville, TN from September 15-22, 2023. We look forward to seeing
            you there!
          </p>
        </div>

        <p>
          <a href="/newsletter" className="text-base">
            Join Our <span className="block">Email Newsletter{' >>'}</span>
          </a>
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/approved.png"
            width={169}
            height={169}
            alt="Zoo Approved Since 1985"
          ></Image>
        </div>
      </div>
    </aside>
  );
}
