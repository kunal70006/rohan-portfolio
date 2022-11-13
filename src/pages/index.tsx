import { type NextPage } from "next";
import { type mouseCoordsTypes } from "../types";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [mouseCords, setMouseCords] = useState<mouseCoordsTypes>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMovement = (e: MouseEventInit) => {
      setMouseCords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMovement, false);
    window.addEventListener("touchmove", handleMouseMovement, false);
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement, false);
      window.removeEventListener("touchmove", handleMouseMovement, false);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex h-screen ">
        <div className=" grid  w-full grid-cols-3  ">
          <ul className="flex justify-center ">
            <li className=" absolute animate-slideshow  ">
              <Image
                className="drop-shadow-2xl"
                src="https://images.unsplash.com/photo-1668248949793-12718a4dd485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
                alt="image"
                width={400}
                height={500}
              />
            </li>
          </ul>
          <ul className="flex justify-center ">
            <li className=" absolute animate-[slideshow_14s_linear_infinite]  ">
              <Image
                className="drop-shadow-2xl"
                src="https://images.unsplash.com/photo-1668248949793-12718a4dd485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
                alt="image"
                width={400}
                height={500}
              />
            </li>
          </ul>
          <ul className="flex justify-center ">
            <li className=" absolute animate-[slideshow_16s_linear_infinite]  ">
              <Image
                className="drop-shadow-2xl"
                src="https://images.unsplash.com/photo-1668248949793-12718a4dd485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
                alt="image"
                width={400}
                height={500}
              />
            </li>
          </ul>
        </div>
        <div
          className="absolute left-48 h-4 w-4 rounded-full bg-red-400"
          style={{ top: mouseCords.y, left: mouseCords.x }}
        />
      </div>
    </>
  );
};

export default Home;
