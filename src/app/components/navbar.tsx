import Image from 'next/image';

function Navbar() {
    return (
        <div className="w-full top-0 fixed left-0 p-4 flex justify-between">
            <div className="flex gap-2 items-center">
                <Image
                    className="dark:invert"
                    src="https://kiran-001.github.io/AI_Database/Assets/logo_v1.svg"
                    alt="Next.js logo"
                    width={50}
                    height={38}
                    priority
                />
                <p className="font-bold text-2xl">AI Tools Repository</p>
            </div>
            <div className='flex gap-6 pr-2'>
                <span className='font-semibold text-xl'>Home</span>
                <span className='font-semibold text-xl'>About</span>
            </div>
        </div>
    );
}

export default Navbar;
