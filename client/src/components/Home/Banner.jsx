import bannerbg from "../../assets/bannerbg.png";
import instagram from "../../assets/instagram.png";
import useInstagram from "../../hooks/stores/useInstagram";

const Banner = () => {
  const getData = useInstagram((state) => state.getData);
  const loading = useInstagram((state) => state.loading);

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="w-full grid grid-cols-12 rounded-xl overflow-hidden">
        <div className=" bg-black text-white px-5 py-7 sm:p-10 md:p-5 lg:p-10 col-span-12 md:col-span-7 flex items-center justify-start">
          <div className="w-full">
            <p
              style={{ lineHeight: "120%" }}
              className="font-bold text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl max-w-[15ch]"
            >
              Instagram Users Analytics Tool
            </p>
            <p className="font-medium sm:text-lg md:text-base lg:text-lg xl:text-xl max-w-[25ch] mt-5">
              Analyze Detailed view of Instagram Profiles
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                !loading && getData(e.target[0].value);
              }}
            >
              <label
                htmlFor="url"
                className="flex items-center mt-5 rounded-lg overflow-hidden h-11 sm:h-12 md:h-11 lg:h-12 bg-[#444444] border"
              >
                <div className="h-full aspect-square flex items-center justify-center bg-black border-r">
                  <img
                    src={instagram}
                    alt=""
                    className="rounded-lg w-1/2 aspect-square"
                  />
                </div>
                <input
                  id="url"
                  type="url"
                  placeholder="https://instagram.com/therock"
                  required
                  disabled={loading}
                  className="grow border-0 outline-none px-2 bg-transparent h-full"
                />
              </label>
              <button
                disabled={loading}
                type="submit"
                className="bg-white text-black w-40 h-11 sm:h-12 md:h-11 lg:h-12 rounded-lg font-semibold mt-5"
              >
                View Result
              </button>
            </form>
          </div>
        </div>
        <img
          src={bannerbg}
          alt=""
          className="hidden md:block md:col-span-5 h-full w-full object-cover object-center"
        />
      </div>
      <p
        style={{
          backgroundImage: "linear-gradient(20deg, #FA8F21, #AE3497)",
        }}
        className="w-full max-w-[380px] text-center mx-auto mt-12 py-4 rounded-lg text-white text-lg font-semibold select-none"
      >
        User Instagram Analytics Result
      </p>
    </div>
  );
};

export default Banner;
