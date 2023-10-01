"use client"

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import MyselfImg from '@/public/Myself.jpg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2,
                }}
                >
                    <Image src={MyselfImg}
                    alt="Bernardo Brito"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                initial={{ opacity:0, scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"spring",
                    stiffness:125,
                    delay:0.1,
                    duration:0.7,
                }}
                >
                    👋
                </motion.span>
            </div>

        </div>
        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        >
            <span className="font-bold">Hello, I'm Bernardo.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">strong</span> background in creating <span className="italic">sites & apps & systems.</span>
        </motion.p>
        <motion.div className='flex flex-col sm:flex-row items-center gap-2 px-6 text-lg font-medium justify-center'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:0.1,
        }}
        >
            <Link href="#contact"
            className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            >Contact me here<BsArrowRight />
            </Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
            href='/CV.pdf' download={true}
            >Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}