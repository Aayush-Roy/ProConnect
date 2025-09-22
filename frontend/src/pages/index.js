import UserLayout from '@/layout/UserLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const HomePage = () => {
  const router = useRouter();

  return (
    <UserLayout>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] px-6 md:px-12 lg:px-20">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Connecting <span className="text-blue-600">Professionals</span><br />
            Build Your Network
          </h1>
          <p className="text-lg text-slate-600">
            Join <strong>Pro Conect</strong> to expand your professional circle, discover new opportunities, and grow your career.
          </p>
          <button
            onClick={() => router.push('/login')}
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Get Started — Login
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mb-10 lg:mb-0">
          <Image
            width={500}
            height={500}
            src="/images/connect.png"
            alt="Connect illustration"
            className="w-[300px] md:w-[500px] h-auto"
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default HomePage;
