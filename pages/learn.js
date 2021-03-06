import Link from 'next/link'
import { TitleHeading1, TitleHeading2 } from '../components/Type'
import Search from '../components/Search'

function learn() {
    return (
        <div className="md:w-5/6 lg:w-3/4 mx-auto pb-20">
            <TitleHeading1>Gimbalabs: Learn</TitleHeading1>
            <div>
                <Search />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:gap-10">
                <div className="mx-5 p-3">
                    <TitleHeading2>Coding on Chain</TitleHeading2>
                    <p className="ml-3">
                        <a href="https://www.youtube.com/channel/UChp9R55VgwkjMzGP9qMa66g" className="classic">Coding on Chain</a> wants to take you on the journey into blockchain and decentralized development. We will explore and try to answer many questions about developing on blockchains and what it means to be decentralized. We enjoy learning and expanding our own knowledge in this subject. There is a lot to discover, and we hope to infect you with this desire to live in a decentralized world.
                    </p>

                </div>
                <div className="mx-5 p-3">
                    <TitleHeading2>Cardano Starter Kits</TitleHeading2>
                    <p className="ml-3"><Link href="/cardanostarterkits"><a className="classic">Cardano Starter Kits (CSKs)</a></Link> are open source, Project Based Learning (PBL) opportunities for people to engage with Cardano in the real world, and to learn through experience what the Cardano platform can do. Our current focus in on the developer experience. By developing useful tools, we will continue to move toward creating experiences for end users.</p>

                </div>
                <div className="mx-5 p-3">
                    <TitleHeading2>Intro to Development Courses</TitleHeading2>
                    <p className="ml-3">With our partners at ADOPT Pool and at Proof of Africa, we are piloting introductory development courses for anyone who wants to learn more about how code works and what it's like to interact with the Cardano blockchain. You can check out our work in progress on <a href="https://www.youtube.com/c/workshopmaybe" className="classic">YouTube</a> and on <a href="https://github.com/GimbaLabs/poa-dev-course-1" className="classic">GitHub</a>.</p>
                    
                </div>
                <div className="mx-5 p-3">
                    <TitleHeading2>Educational Marketing Workshops</TitleHeading2>
                    <p className="ml-3">A key part of building new products and tools in the blockchain are is being able to help a broad audience understand what you've made and the problems it solves. Our Educational Marketing Workshops help start-ups and existing businesses create plans for connecting with end-users. We currently offer private sessions, so if you're interested, please get in touch. Last fall, <a href="https://workshopmaybe.medium.com/education-is-the-new-marketing-dd609966c41a" className="classic">we outlined some ideas on Medium</a>, and we look forward to sharing more soon.</p>
                    
                </div>
                <div className="mx-5 p-3">
                <TitleHeading2>More to Come</TitleHeading2>
                <p className="ml-3"></p>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default learn