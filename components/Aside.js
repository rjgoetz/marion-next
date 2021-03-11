import Image from 'next/image';

export default function Aside() {
  return (
    <aside className="bg-beige py-8 lg:pb-16 lg:h-full">
      <div className="container lg:px-8">
        <h4>Affiliations</h4>
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
          <p className="text-brown font-semibold mb-0">
            AAZV 49th Annual Conference
          </p>
          <p className="italic">September 23-29, 2017 in Dallas, TX</p>
          <p>
            Marion Zoological will be attending the AAZV conference this year in
            Dallas, TX from September 23-29, 2017. We look forward to seeing you
            there!
          </p>
        </div>

        <div className="flex justify-center">
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
