import AppLayout from "@lib/components/Layouts/AppLayout";
import Image from 'next/image';

let imgs = [
  "https://miro.medium.com/max/1400/0*zS2ib9g0KJKxfUXC.jpg",
];

const Page = () => {
  return (
    <>
      <AppLayout>
        {/* <blockquote> */}
        <h1>DOJO DAO</h1>
        <blockquote>
        <p>
          The future of blockchain Gaming :D
        </p>
        </blockquote>
        <div>
          <p>
            <img src={imgs[0]} alt="Girl in a jacket"/>
          </p>
        </div>
      
      </AppLayout>
    </>
  );
};

export default Page;
