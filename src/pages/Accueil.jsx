import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    title: "Bénéfice 1",
    description:
      "Give one sentence describing who this is for and what it helps them achieve",
    link: "#benefice-1",
  },
  {
    id: 2,
    title: "Bénéfice 2",
    description:
      "Give one sentence describing who this is for and what it helps them achieve",
    link: "#benefice-2",
    highlighted: true,
  },
  {
    id: 3,
    title: "Bénéfice 3",
    description:
      "Give one sentence describing who this is for and what it helps them achieve",
    link: "#benefice-3",
  },
];

const logos = [
  { name: "Meta", src: "./images/Meta logo.png" },
  { name: "Whop", src: "./images/Whop_logo logo@2x.png" },
  { name: "Webflow", src: "./images/Webflow_logo_2023 logo.png" },
  { name: "Adobe", src: "./images/Adobe logo.png" },
];

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: {
    opacity: 0.7,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Accueil() {
  return (
    <section className="bg-black px-[8%] py-5 md:py-1">
      <motion.div
        className="pt-16 text-center sm:pt-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Badge */}
        <motion.a
          href="#landing-page"
          variants={itemVariants}
          className="inline-block rounded-2xl bg-[#C3D1A926] px-4 py-3 text-sm shadow-lg shadow-[#C3D1A9]/20 text-[#C3D1A9] transition-all duration-300 hover:bg-[#C3D1A940] focus:outline-none focus:ring-2 focus:ring-[#C3D1A9] focus:ring-offset-2 focus:ring-offset-black active:bg-[#C3D1A960] sm:text-base"
        >
          La meilleure structure de landing page d'agence
        </motion.a>

        {/* Titre principal */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-2xl font-bold text-[#f6f6f6] sm:text-5xl"
        >
          Titre axé sur les bénéfices <br /> apportés à votre audience
        </motion.h1>

        {/* Sous-titre */}
        <motion.p variants={itemVariants} className="px-4 py-5 text-[#DDDDDD]">
          En quelques mots, expliquez à votre cible ce que vous faites,{" "}
          <br className="hidden sm:block" />
          pour qui et comment les aider.
        </motion.p>

        {/* CTA principal */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-3xl bg-[#C3D1A9] px-5 py-3 text-black transition-all duration-300 hover:bg-[#b3c199] focus:outline-none focus:ring-2 focus:ring-[#C3D1A9] focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Réserver un appel avec notre équipe"
        >
          Réserver un appel
        </motion.button>

        {/* Section logos */}
        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-center text-lg text-gray-400">
            Ils nous ont fait confiance
          </p>
          <div className="m-4 grid grid-cols-2 items-center justify-center gap-4 sm:flex sm:gap-8">
            {logos.map((logo, index) => (
              <motion.img
                key={logo.name}
                src={logo.src}
                alt={`Logo ${logo.name}`}
                variants={logoVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mx-auto w-20 sm:w-24"
              />
            ))}
          </div>
        </motion.div>

        {/* Cartes de bénéfices */}
        <div className="flex flex-wrap gap-6 p-4 pt-8 sm:pt-20 lg:gap-4">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex w-full flex-col items-center rounded-xl border border-gray-700 p-6 transition-all duration-300 hover:border-[#C3D1A9] hover:shadow-lg hover:shadow-[#C3D1A9]/10 sm:w-[calc(33.333%-1rem)] ${
                benefit.highlighted ? "bg-[#191919ac]" : ""
              }`}
            >
              <motion.img
                src="./images/Featured icon.png"
                alt=""
                className="mb-2 w-12"
                aria-hidden="true"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="text-center">
                <h2 className="mb-3 text-xl font-semibold text-cyan-50">
                  {benefit.title}
                </h2>
                <p className="mb-4 text-gray-300">{benefit.description}</p>
                <motion.a
                  href={benefit.link}
                  className="inline-flex items-center gap-2 text-[#C3D1A9] transition-colors hover:text-[#a9b58d] focus:outline-none focus:underline"
                  aria-label={`En savoir plus sur ${benefit.title}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  en savoir plus
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Accueil;
