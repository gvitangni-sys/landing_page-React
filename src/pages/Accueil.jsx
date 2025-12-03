import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Accueil() {
  return (
    <section className="md:py-1 py-4 px-[8%] bg-black">
      <div className="text-center pt-16 sm:pt-32">
        <a
          href="#"
          className="inline-block px-4 py-3 bg-[#C3D1A926] text-[#C3D1A9] shadow-lg shadow-[#C3D1A9]/50 rounded-2xl hover:bg-[#C3D1A940] active:bg-[#C3D1A960] transition-all duration-300 text-sm sm:text-base sm:p-1"
        >
          La meilleure structure de landing page d'agence
        </a>
        <h1 className="text-[#f6f6f6] mt-8 text-2xl font-bold sm:text-5xl">
          Titre axé sur les bénéfices <br /> apportés à votre audience
        </h1>
        <p className="text-[#DDDDDD] px-4 py-5">
          En quelques mots, expliquez à votre cible ce que vous faites, <br />{" "}
          pour qui et comment les aider.
        </p>

        <button className="rounded-3xl py-3 px-5 bg-[#C3D1A9] text-black">
          Réserver un appel
        </button>

        <div className="mt-8">
          <h2 className="text-gray-400 text-center text-lg">
            Ils nous ont fait confiance
          </h2>
          <div className="grid grid-cols-4 items-center m-4 gap-3 justify-center sm:flex sm:gap-5">
            <img
              src="./images/Meta logo.png"
              alt=""
              className="w-[90px] sm:w-[100px]"
            />
            <img
              src="./images/Whop_logo logo@2x.png"
              alt=""
              className="w-[90px] sm:w-[100px]"
            />
            <img
              src="./images/Webflow_logo_2023 logo.png"
              alt=""
              className="w-[90px] sm:w-[100px]"
            />
            <img
              src="./images/Adobe logo.png"
              alt=""
              className="w-[90px] sm:w-[100px]"
            />
          </div>
        </div>
        <div className="p-2 pt-8 flex flex-wrap gap-1 items-center sm:gap-8 sm:pt-20">
          {/* Les 3 cartes avec le même style */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`rounded-xl py-6 px-5 flex flex-col items-center border border-gray-700 ${
                item === 2 ? "bg-[#191919ac]" : ""
              } w-full sm:w-[300px]`}
            >
              <img
                src="./images/Featured icon.png"
                alt=""
                className="w-[60px] mb-3"
              />
              <div className="text-center">
                <h2 className="text-lg text-cyan-50 mb-2">Bénéfice {item}</h2>
                <p className="text-gray-300 p-2 mb-3">
                  Give one sentence describing who this is for and what it helps
                  them achieve
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#C3D1A9] hover:text-[#a9b58d]"
                >
                  en savoir plus
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accueil;
