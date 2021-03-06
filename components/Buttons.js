import Link from 'next/link'

export function SideBarButton({children}) {
    return (
        <div className='text-xs md:text-base lg:w-auto w-full mx-auto px-3 md:py-3 my-1 md:my-3 rounded text-white font-bold items-center justify-center hover:bg-purple-300 hover:text-black cursor-pointer'>{children}</div>
    )
}

export function VideoLinkButton({children}) {
    return (
        <div className='p-3 mx-auto my-3 w-full md:w-4/5 font-bold items-center justify-center bg-purple-100 hover:bg-purple-300 hover:text-black cursor-pointer'>{children}</div>
    )
}

export function DiscordButton() {
    return (
        <a href="https://discord.gg/XTvJBj7kzq">
            <div className='p-3 mx-auto m-6 font-bold text-center justify-center bg-purple-100 hover:bg-purple-300 hover:text-black cursor-pointer'>Join Gimbalabs on Discord</div>
        </a>
    )
}

export function CurrentButton() {
    return (
        <Link href="/projects">
            <a>
                <div className='p-3 mx-auto mt-3 w-3/4 font-bold text-center justify-center bg-purple-100 hover:bg-purple-300 hover:text-black cursor-pointer'>What's happening now?</div>
            </a>
        </Link>
    )
}

export function CalendarButton() {
    return (
        <Link href="/participate/calendar">
            <a className="classic">
                <div className='p-3 my-6 font-bold text-center justify-center bg-purple-100 hover:bg-purple-300 hover:text-black cursor-pointer'>Check out the Gimbalabs Calendar</div>
            </a>
        </Link>
    )
}

export function TagButton({children}) {
    return (
        <div className="m-2 p-2 text-xs text-purple-900 bg-purple-100">{children}</div>
    )
}

export function GitlabButton() {
    return (
        <div className="flex justify-center bg-yellow-500 bg-opacity-70 hover:bg-yellow-100 my-6 p-3 font-bold">
            <a href="https://gitlab.com/gimbalabs/gimbalabs" className="classic">Contribute to this site on GitLab</a>
        </div>
    )
}