"use client"
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { useState } from 'react'

export const Sidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const userProfile = false;

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded text-[#F51997]';

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar &&
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <Link href='/'>
            <div className={normalLink}>
              <p className='text-2xl'>
                <AiFillHome />
                <span className='text-xl hidden xl:block'>For You</span>
              </p>
            </div>
          </Link>
          {!userProfile && (
            <div><p>Login</p></div>
          )}
        </div>
      }
    </div>
  )
}