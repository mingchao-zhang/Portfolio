import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto
                  flex flex-col items-start justify-center`}
      // hide all items at the beginning with some y delta
      initial={{ opacity: 0, y: 50 }}
      // eventually show all items while putting them back to original positions
      whileInView={{ opacity: 1, y: 0 }}
      // do so gradually
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

// We have four different pages
export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      {/* <Section>
        <h1>Skills</h1>
      </Section> */}
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-7xl text-gray-700  font-bold leading-snug">
        Hi, I'm
        <br />
        <span className="px-1">Mingchao</span>
      </h1>
      <motion.p
        className="text-xl text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        // Add more delay to the description text to let items show up one by one
        transition={{ duration: 1, delay: 1.5 }}
      >
        - a student, software engineer,
        <br />
        climber and snowboarder
      </motion.p>
      {/* <motion.button
        className={`bg-indigo-600 text-white py-4 px-8
                    rounded-lg font-bold text-lg mt-16`}
        // button has the most delay and shows up the last
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Contact me
      </motion.button> */}
    </Section>
  );
};

const skills = [
  {
    title: "Algorithm",
    level: 90,
  },
  {
    title: "System Design",
    level: 80,
  },
  {
    title: "Climbing",
    level: 85,
  },
  {
    title: "Snowboarding",
    level: 80,
  },
  {
    title: "Cooking",
    level: 60,
  },
];

const languages = [
  {
    title: "Python",
    level: 95,
  },
  {
    title: "C++",
    level: 90,
  },
  {
    title: "Golang",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {/* loop through skills and calculate the percentage of each skill */}
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
