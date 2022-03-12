export default function Index() {
  return (
    <div>
      <div className="relative sm:flex flex-warp w-full text-theme-base items-center align-middle justify-center px-10 py-7">
        <img
          src="/images/img3.png"
          className="scale-75 sm:scale-100 m-auto object-cover"
        />
        <span className="text-lg sm:text-lg mb-1">
          Hello there I'm{" "}
          <span className="sm:text-md text-base sm:text-xl font-semibold">
            {" "}
            Anjar{" "}
          </span>
          I call this
          <span className="sm:text-md text-base sm:text-xl font-semibold">
            {" "}
            RISTAMA,{" "}
          </span>
          it just my personal website built by
          <ul>
            <li>- Remix JS with Typescript</li>
            <li>- Tailwind CSS</li>
            <li>- MongoDB</li>
            <li>- And More</li>
          </ul>
          Thanks a lot for visiting please take a look what's going on here
        </span>
      </div>
    </div>
  );
}
