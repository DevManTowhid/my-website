'use client';

import Image from "next/image";
// import { FaGithub } from "react-icons/fa";
// import { ExternalLink } from "lucide-react";
import {
  Image as ImageIcon,
  ScanEye,
  Network,
  ShieldCheck,
  Waves,
  Earth,
  Layers3,
  University,
} from "lucide-react";
import { FcEngineering } from "react-icons/fc";
const researchInterests = [
  {
    title: "Digital Image Processing",
    icon: ImageIcon,
    color: "text-violet-500",
  },
  {
    title: "Computer Vision",
    icon: ScanEye,
    color: "text-cyan-500",
  },
  {
    title: "Computer Networks",
    icon: Network,
    color: "text-blue-500",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    color: "text-emerald-500",
  },
  {
    title: "Underwater Imaging",
    icon: Waves,
    color: "text-sky-500",
  },
  {
    title: "Geotechnical and Environmental Imaging",
    icon: Earth,
    color: "text-green-500",
  },
  {
    title: "Image Reconstruction",
    icon: Layers3,
    color: "text-fuchsia-500",
  },
];
const projects = [
  {
    name: "Lorenz Chaos Cryptography Engine",
    description:
      "Developed a stream encryption tool using Lorenz differential equations for pseudo-random key generation and XOR-based encryption, combining chaos theory with mathematical modelling.",
    technologies: [
      "JavaScript",
      "HTML5 Canvas",
      "Chaos Theory",
      "Cryptography",
    ],
    github:
      "https://github.com/DevManTowhid/Deterministic-Chaos-A-Non-Linear-Dynamic-System-for-Real-Time-Stream-Cipher-Generation",
  },
  {
    name: "Phylogenetic Tree Explorer",
    description:
      "Built a full-stack application for exploring language ancestry through recursive algorithms and hierarchical data structures. Optimized data modelling and denormalization to reduce API latency from 1.5 seconds to under 100 milliseconds.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Firebase Firestore",
    ],
    github: "https://github.com/DevManTowhid/LangTree",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Created an interactive platform for visualizing data structures and algorithms, including Quick Sort and Merge Sort, with optimized rendering for smooth 60 FPS animations on datasets exceeding 5,000 elements.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    github: "https://github.com/DevManTowhid/learn-with-towhid",
  },
];
const Educations = [
  {name: "Bangladesh University of Engineering and Technology", Degree: "MSc Engg (ongoing)", Discipline: "Computer Science & Engineering" , logo: '/BUET_logo2.png', year: "2026 - Present"}, {name: "Rajshahi University of Engineering and Technology", Degree: "BSc Engg", Discipline: "Electrical and Computer Engineering", logo: '/RUET_logo.png', year: "2021 - 2024"}, {name: "Notre Dame College", Degree: "HSC", Discipline: "Science", logo: '/NDC_logo.png', year: "2018 - 2020"}
]
export default function Home() {
  return (

<main className="min-h-screen p-6 font-times-new-roman md:p-12 lg:p-16">

  {/* Upper section: Profile */}
  <section className="mb-16 flex flex-col items-start gap-8 md:flex-row md:gap-12">

    {/* Left: Image (1/3 width) */}
    <div className="w-full md:w-1/3">
      <div className="mx-auto mt-4 w-full max-w-sm md:max-w-none">
        <Image
          src="/image copy 2.png"
          alt="My Picture"
          width={1000}
          height={1000}
          priority
          className="mx-auto aspect-square w-full max-w-xs rounded-[25%] object-cover md:max-w-none"
        />
      </div>
    </div>

    {/* Right: About + Research Interests (2/3 width) */}
    <div className="w-full min-w-0 md:w-2/3">

      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Welcome to My Portfolio
      </h1>

      <div className="mb-6">
        <h2 className="mb-4 inline-block border-b border-gray-300 pb-2 text-2xl font-bold dark:border-gray-700">
          About Me
        </h2>

        <p className="text-justify text-lg leading-8">
          Currently pursuing my MSc Engg. (CSE) at BUET. I am a passionate
          computer science student with a strong interest in digital image
          processing, computer vision, computer networks, and cyber security.
          I have a solid foundation in programming languages such as C, C++,
          and Python. I am eager to apply my skills and knowledge to real-world
          projects and contribute to the field of computer science.
        </p>
      </div>

  
<div className="research-interest">
      <h2 className="mb-5 text-2xl font-bold">
        Research Interests
      </h2>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {researchInterests.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title}>
              <div className="group flex h-full items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60">
                <Icon
                  aria-hidden="true"
                  size={21}
                  strokeWidth={1.8}
                  className={`mt-1 shrink-0 ${item.color} transition-transform duration-200 group-hover:scale-110`}
                />

                <span className="text-base leading-7 transition-colors group-hover:text-violet-600 dark:group-hover:text-cyan-400">
                  {item.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  </section>

  {/* Lower section: Projects */}
  <section className="projects w-full">
    <h2 className="mb-6 border-b border-gray-300 pb-3 text-3xl font-bold dark:border-gray-700">
      Projects
    </h2>

    <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700">
      <table className="w-full min-w-[800px] border-collapse text-left">
        <thead className="bg-gray-100 dark:bg-slate-800">
          <tr>
            <th className="border-b border-gray-300 px-4 py-3 dark:border-gray-700">
              Project
            </th>
            <th className="border-b border-gray-300 px-4 py-3 dark:border-gray-700">
              Description
            </th>
            <th className="border-b border-gray-300 px-4 py-3 dark:border-gray-700">
              Technologies
            </th>
            <th className="border-b border-gray-300 px-4 py-3 text-center dark:border-gray-700">
              GitHub
            </th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr
              key={project.github}
              className="transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/60"
            >
              <td className="border-b border-gray-200 px-4 py-3 font-medium dark:border-gray-700">
                {project.name}
              </td>

              <td className="border-b border-gray-200 px-4 py-3 leading-7 dark:border-gray-700">
                {project.description}
              </td>

              <td className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-slate-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </td>

              <td className="border-b border-gray-200 px-4 py-3 text-center dark:border-gray-700">
                <div className="group relative inline-flex">
                  
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={project.github}
                        aria-label={`Open GitHub repository for ${project.name}`}
                        className="inline-flex rounded-lg p-2 transition duration-200 hover:scale-110 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-blue-500 dark:hover:bg-slate-700"
                      >
                        <Image
                          src="/github.png"
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain dark:invert"
                        />
                      </a>


                  <div
                    id={`github-tooltip-${index}`}
                    role="tooltip"
                    className="pointer-events-none invisible absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-64 -translate-x-1/2 break-all rounded-lg bg-gray-900 px-3 py-2 text-left text-xs text-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    <span className="mb-1 block font-semibold text-gray-300">
                      GitHub Repository
                    </span>
                    {project.github}
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>

<section className="education mb-16 mt-16 w-full overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700">
  <h2 className="mb-6 border-b border-gray-300 pb-3 text-3xl font-bold underline dark:border-gray-700">
    Education
  </h2>

  <table className="w-full px-4 text-left min-w-[800px] border-collapse">
    <tbody>
      {Educations.map((education, index) => (
        <tr key={`${education.name}-${index}`}>
          <td className="border-b border-gray-200 px-4 py-3 last:border-b-0 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <Image
                src={education.logo}
                alt={`${education.name} Logo`}
                width={500}
                height={500}
                className="h-12 w-12 shrink-0 object-contain"
              />

              <div>
                <p className="font-semibold">{education.name}</p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {education.Degree} in {education.Discipline}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {education.year}
                </p>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>




</main>

  );
}
