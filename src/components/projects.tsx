import { projectsData } from "@/lib/data";
import Image from 'next/image';
import SectionHeading from "./section-heading";
import SectionWindow from "./section-window";


export default function Projects() {
  return (
   <section className="my-10">
    <SectionHeading>Projects</SectionHeading>
    {projectsData.map((project, index) => (
        <SectionWindow key={index} title={project.title} className="relative mb-10">
            <div className="flex flex-col items-center">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={200}
                    quality={95}
                    className="rounded-lg border border-black mt-2"
                />
                <p className="mt-4 text-center">{project.description}</p>
                <div className="flex my-4 space-x-2">
                <a className="bg-[#FCC6E7] hover:bg-[#f9afdd] shadow-md border-[0.1rem] border-black px-5 py-3 flex items-center gap-2 rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer" href="/">
                    View on Github
                </a>
                <a className="bg-[#F87046] hover:bg-[#f38665] shadow-md border-[0.1rem] border-black px-5 py-3 flex items-center gap-2 rounded-md outline-none focus:outline-none focus:ring focus:ring-offset-2 transition cursor-pointer" href="/">
                    View Live Site
                </a>
                </div>
            </div>
        </SectionWindow>
    ))}
   </section>
  )
}
