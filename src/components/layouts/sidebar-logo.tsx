"use client"
import CollapseButton from "./collapse-button"
import Image from 'next/image';
import logo from '../../assets/logo.svg'

const AdminSidebarLogo: React.FC<{ collapseHandle?: ( e: React.MouseEvent )=> void }> = ({collapseHandle}) => {
    return (
        <header className='flex h-16 sticky md:h-20 px-5 justify-between gap-2 border-b border-black/10 items-center'>
            <div className='flex items-center gap-1'>
                <span className='sr-only'>Logo</span>
                <Image
                    src={logo.src}
                    width="0"
                    height="0"
                    alt={'logo'}
                    priority={true}
                    className="w-[4.5rem] h-auto">
                </Image>
                <span className='font-normal text-2xl'>Beta</span>
            </div>

            <CollapseButton onClick={collapseHandle} className="lg:hidden">
                <svg className='h-7 w-7 text-slate-400' viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.20011 25.125H21.0959C21.8407 25.125 22.4501 24.5156 22.4501 23.7708C22.4501 23.026 21.8407 22.4167 21.0959 22.4167H6.20011C5.45532 22.4167 4.84595 23.026 4.84595 23.7708C4.84595 24.5156 5.45532 25.125 6.20011 25.125ZM6.20011 18.3542H17.0334C17.7782 18.3542 18.3876 17.7448 18.3876 17C18.3876 16.2552 17.7782 15.6458 17.0334 15.6458H6.20011C5.45532 15.6458 4.84595 16.2552 4.84595 17C4.84595 17.7448 5.45532 18.3542 6.20011 18.3542ZM4.84595 10.2292C4.84595 10.974 5.45532 11.5833 6.20011 11.5833H21.0959C21.8407 11.5833 22.4501 10.974 22.4501 10.2292C22.4501 9.48437 21.8407 8.875 21.0959 8.875H6.20011C5.45532 8.875 4.84595 9.48437 4.84595 10.2292ZM28.273 20.9L24.373 17L28.273 13.1C28.8012 12.5719 28.8012 11.7187 28.273 11.1906C27.7449 10.6625 26.8918 10.6625 26.3637 11.1906L21.5022 16.0521C20.9741 16.5802 20.9741 17.4333 21.5022 17.9615L26.3637 22.8229C26.8918 23.351 27.7449 23.351 28.273 22.8229C28.7876 22.2948 28.8012 21.4281 28.273 20.9Z" fill="currentColor"/>
                </svg>
            </CollapseButton>

            <CollapseButton className="hidden lg:block">
                <svg className='h-7 w-7 text-slate-400' viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.20011 25.125H21.0959C21.8407 25.125 22.4501 24.5156 22.4501 23.7708C22.4501 23.026 21.8407 22.4167 21.0959 22.4167H6.20011C5.45532 22.4167 4.84595 23.026 4.84595 23.7708C4.84595 24.5156 5.45532 25.125 6.20011 25.125ZM6.20011 18.3542H17.0334C17.7782 18.3542 18.3876 17.7448 18.3876 17C18.3876 16.2552 17.7782 15.6458 17.0334 15.6458H6.20011C5.45532 15.6458 4.84595 16.2552 4.84595 17C4.84595 17.7448 5.45532 18.3542 6.20011 18.3542ZM4.84595 10.2292C4.84595 10.974 5.45532 11.5833 6.20011 11.5833H21.0959C21.8407 11.5833 22.4501 10.974 22.4501 10.2292C22.4501 9.48437 21.8407 8.875 21.0959 8.875H6.20011C5.45532 8.875 4.84595 9.48437 4.84595 10.2292ZM28.273 20.9L24.373 17L28.273 13.1C28.8012 12.5719 28.8012 11.7187 28.273 11.1906C27.7449 10.6625 26.8918 10.6625 26.3637 11.1906L21.5022 16.0521C20.9741 16.5802 20.9741 17.4333 21.5022 17.9615L26.3637 22.8229C26.8918 23.351 27.7449 23.351 28.273 22.8229C28.7876 22.2948 28.8012 21.4281 28.273 20.9Z" fill="currentColor"/>
                </svg>
            </CollapseButton>
        </header>
    )
}

export default AdminSidebarLogo