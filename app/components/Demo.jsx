import { Lectures, Notes } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { NotesCard } from "./NotesCard";
import { LectureCard } from "./LectureCard";

const Demo = () => {
  return (
    <section
      id="Demo"
      className="px-6 lg:px-20 min-h-screen flex justify-center items-center">
      <div className="w-full">
        <h1 className="md:text-3xl text-2xl font-bold text-text-800 ">Demo</h1>
        <div className="py-8">
          <h2 className="text-text-600 text-lg sm:text-xl font-semibold">
            Lectures
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
            {Lectures.map((lecture, index) => (
              <LectureCard key={index} index={index} {...lecture} />
            ))}
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-text-600 text-lg sm:text-xl font-semibold">
            Notes
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
            {Notes.map((lecture, index) => (
              <NotesCard key={index} index={index} {...lecture} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
