import { useRef, useEffect } from "react";
import millify from "millify";
import useInstagram from "../../hooks/stores/useInstagram";

const Result = () => {
  const loadingRef = useRef();
  const loading = useInstagram((state) => state.loading);
  const data = useInstagram((state) => state.data);
  const error = useInstagram((state) => state.error);

  useEffect(() => {
    if (!loading || !loadingRef.current) return;
    loadingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [loading]);

  if (loading) {
    return (
      <div ref={loadingRef} className="mt-12">
        <div className="animate-spin w-8 h-8 border-4 border-r-black rounded-full mx-auto" />
        <p className="text-center text-sm mt-2 font-medium">Please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-12">Something went wrong</p>;
  }

  if (!data) return null;

  return (
    <div className="max-w-[1100px] mx-auto mt-12">
      <div className="flex items-start justify-start gap-2">
        <img
          src={`data:image/png;base64, ${data?.images?.profileImage}`}
          alt=""
          className="aspect-square w-14 object-cover object-center rounded-full border"
        />
        <div className="mt-1">
          <p className="font-semibold text-lg">{data?.full_name}</p>
          <p className="text-sm text-gray-500">{data?.username}</p>
          <p className="mt-2">{data?.biography}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-[#F8F8F8] rounded-xl p-8 gap-8 lg:p-5 lg:gap-5 mt-12">
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">433</p>
          </div>
          <p className="text-sm font-medium text-center mt-2">Social Score</p>
        </div>
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">
              {millify(data?.edge_followed_by?.count || 0)}
            </p>
          </div>
          <p className="text-sm font-medium text-center mt-2">Followers</p>
        </div>
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">0.5%</p>
          </div>
          <p className="text-sm font-medium text-center mt-2">
            Engagement rate
          </p>
        </div>
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">3</p>
          </div>
          <p className="text-sm font-medium text-center mt-2">Post per week</p>
        </div>
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">673</p>
          </div>
          <p className="text-sm font-medium text-center mt-2">
            Comments per post
          </p>
        </div>
        <div>
          <div className="bg-white aspect-video flex items-center justify-center rounded-xl shadow-md">
            <p className="text-xl font-bold">43k</p>
          </div>
          <p className="text-sm font-medium text-center mt-2">Likes per post</p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-lg md:text-xl font-bold">Latest Posts</p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.edge_owner_to_timeline_media?.edges.map(({ node }) => (
            <div
              key={node?.id}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={`data:image/png;base64, ${data?.images[node?.id]}`}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
