import useInstagram from "../../hooks/stores/useInstagram";

const Result = () => {
  const data = useInstagram((state) => state.data);

  if (!data) return null;

  return (
    <div className="max-w-[1100px] mx-auto">
      <p
        style={{
          backgroundImage: "linear-gradient(20deg, #FA8F21, #AE3497)",
        }}
        className="w-full max-w-[380px] text-center mx-auto mt-12 py-4 rounded-lg text-white text-lg font-semibold select-none"
      >
        User Instagram Analytics Result
      </p>
      <div className="flex items-start justify-start gap-2 mt-12">
        <img
          src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
          alt=""
          className="aspect-square w-14 object-cover object-center rounded-full border"
        />
        <div className="mt-1">
          <p className="font-semibold text-lg">Andrew John</p>
          <p className="text-sm text-gray-500">@andrew</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            iusto sed dolor blanditiis repellendus! Consequatur perferendis
            corporis commodi unde repellendus quaerat reiciendis dolores
            officiis eos odit. Ducimus nam at similique enim, rerum iure, minus
            eligendi saepe fugit sapiente natus, tempora veritatis. Corporis
            totam omnis voluptatum soluta perspiciatis culpa minus repudiandae?
            Consequatur et, vitae veniam at excepturi cumque optio eos dolor
            fuga blanditiis omnis placeat laudantium numquam vel qui ullam
            ratione quis, maxime dolorum ipsum perspiciatis dolorem voluptate?
            Eligendi tempora quis maiores, voluptatibus quibusdam laborum
            voluptas facere corrupti minima, ipsa eaque sequi illo illum nostrum
            amet facilis nesciunt, numquam laboriosam cum?
          </p>
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
            <p className="text-xl font-bold">5.6 M</p>
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
          {new Array(12).fill("").map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img
                src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
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
