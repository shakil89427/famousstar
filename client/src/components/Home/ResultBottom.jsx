import blackbg from "../../assets/blackbg.png";
import getdetailedbg from "../../assets/getdetailedbg.png";
import map from "../../assets/map.png";
import girlbg from "../../assets/girlbg.png";
import arrowgreen from "../../assets/arrowgreen.png";
import arrowred from "../../assets/arrowred.png";

const ResultBottom = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div
        style={{ backgroundImage: `url(${blackbg})` }}
        className="mt-12 text-white p-5 lg:p-10 xl:p-12 rounded-xl flex flex-col items-start justify-start gap-7 lg:text-lg font-medium bg-cover bg-center bg-no-repeat"
      >
        <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
          How does it work
        </p>
        <p>
          With this website, you can easily fetch Instagram users analytics
          easily Just follow these steps:
        </p>
        <li className="list-disc">Copy the unique Url of the desired user.</li>
        <li className="list-disc">
          Paste this Url into the field at the top of the page.
        </li>
        <li className="list-disc">
          After Click on Get Result Button, it will list all the details on the
          bottom page.
        </li>
        <li className="list-disc">
          Analyze Users Data like Followers, likes, Posts data, engagement and
          much more.
        </li>
      </div>
      <div className="mt-12">
        <p className="text-center text-xl lg:text-2xl xl:text-3xl font-semibold">
          Get Detailed View Analytics
        </p>
        <img
          src={getdetailedbg}
          alt=""
          className="mt-7 w-full max-w-[400px] block mx-auto"
        />
      </div>
      <img src={map} alt="" className="mt-16 w-full" />
      <div className="mt-16">
        <p className="text-center text-xl lg:text-2xl xl:text-3xl font-semibold">
          Instagram Post Analytics
        </p>
        <img src={girlbg} alt="" className="mt-7 w-full" />
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 w-fit mx-auto">
        <div>
          <div className="shadow flex items-center justify-center rounded-xl text-lg sm:text-xl lg:text-2xl border w-44 lg:w-48 xl:w-52 h-20 mb-3">
            <span className="font-semibold">231</span>
            <img src={arrowgreen} alt="" className="mx-2 w-6" />
            <span className="text-gray-500">2.1%</span>
          </div>
          <p className="text-center font-medium">Likes</p>
        </div>
        <div>
          <div className="shadow flex items-center justify-center rounded-xl text-lg sm:text-xl lg:text-2xl border w-44 lg:w-48 xl:w-52 h-20 mb-3">
            <span className="font-semibold">12</span>
            <img src={arrowred} alt="" className="mx-2 w-6" />
            <span className="text-gray-500">2.1%</span>
          </div>
          <p className="text-center font-medium">Comments</p>
        </div>
        <div>
          <div className="shadow flex items-center justify-center rounded-xl text-lg sm:text-xl lg:text-2xl border w-44 lg:-w-48 xl:w-52 h-20 mb-3">
            <span className="font-semibold">231</span>
            <img src={arrowred} alt="" className="mx-2 w-6" />
            <span className="text-gray-500">2.1%</span>
          </div>
          <p className="text-center font-medium">Engagement rate</p>
        </div>
      </div>
    </div>
  );
};

export default ResultBottom;
