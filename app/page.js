import Image from "next/image";
import Egg from ".././public/Image/Eggnog-removebg-preview.png";
import Cup from ".././public/Image/photo_2025-02-20_12-20-44.jpg";

export default function Page() {
  return (
    <>
      <div className="w-full  flex-1   justify-between">
        <div className="justify-center items-center flex ">
          <Image src={Cup} alt="Cup" />
        </div>
        <div className="bg-red-600 w-full h-10">3</div>
        <div>4</div>

        {/* footer */}
        <div className="relative flex justify-center ">
          <footer className="absolute  bg-[#d6d4d1] bg-opacity-50 backdrop-blur-lg border-[#dbb66b] border mx-6 text-neutral-content bottom-[-300] w-3/4 rounded-md">
            <aside
              className="grid-flow-col items-center text-white p-5"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
            >
              <p>Terms of Service</p>
              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end m-5 flex w-fit rounded-full p-1">
              <a href="https://x.com/i/flow/login?lang=en" target="_blank">
                <img
                  src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
                  alt="twitter"
                  width={24}
                  height={24}
                  className="hover:opacity-55 hover:scale-105 duration-700 bg-white rounded-full p-0.5  shadow-lg shadow-current"
                />
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-red-500 bg-white rounded hover:scale-110 duration-500  shadow-lg shadow-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current  shadow-xl shadow-current bg-zinc-50 rounded-full p-0.5 text-blue-400 hover:scale-105 duration-700"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
