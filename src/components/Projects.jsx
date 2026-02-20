import { useEffect, useRef, useState } from 'react'

const projects = [
    {
        title: 'Antrian Pasien',
        description: 'Queue management system for healthcare facilities. Streamlines patient flow and reduces waiting times.',
        tags: ['PHP', 'MySQL', 'Web App'],
        image: '🏥',
        color: 'from-blue-500/20 to-cyan-600/20',
        link: '#',
        github: 'https://github.com/skutanjir/Antrian-Pasien',
    },
    {
        title: 'E-Perpustakaan',
        description: 'Digital library management system for managing book loans, returns, and inventory tracking.',
        tags: ['PHP', 'MySQL', 'Management'],
        image: '📚',
        color: 'from-emerald-500/20 to-green-600/20',
        link: '#',
        github: 'https://github.com/skutanjir/E-Perpustakaan',
    },
    {
        title: 'Chat App React',
        description: 'Real-time chat application frontend built with React, featuring responsive design and interactive UI.',
        tags: ['React', 'WebSocket', 'UI/UX'],
        image: '💬',
        color: 'from-violet-500/20 to-purple-600/20',
        link: '#',
        github: 'https://github.com/skutanjir/Chat-App-React',
    },
    {
        title: 'Chat App NodeJS',
        description: 'Backend server for the chat application, handling real-time socket connections and message routing.',
        tags: ['Node.js', 'Socket.io', 'Backend'],
        image: '🔌',
        color: 'from-slate-500/20 to-gray-600/20',
        link: '#',
        github: 'https://github.com/skutanjir/Chat-App-NodeJS',
    },
    {
        title: 'Tic-Tac-Toe Java',
        description: 'Classic Tic-Tac-Toe game implementation in Java, demonstrating object-oriented programming concepts.',
        tags: ['Java', 'OOP', 'Game Dev'],
        image: '🎮',
        color: 'from-orange-500/20 to-red-600/20',
        link: '#',
        github: 'https://github.com/skutanjir/tic-tac-to-Game-Java',
    },
    {
        title: 'Microsoft-Reward-Bot',
        description: 'A Automation Microsoft Reward Bot',
        tags: ['React'],
        image: '💼',
        color: 'from-pink-500/20 to-rose-600/20',
        link: 'https://github.com/skutanjir/Microsoft-Reward-Bot.git',
        github: '#',
    },
]

const Projects = () => {
    const ref = useRef()
    const [filter, setFilter] = useState('All')

    const tags = ['All', 'React', 'Node.js', 'PHP', 'Java', 'Web App']

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible')
            },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(filter))

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

            <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        A collection of projects that showcase my skills and experience
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar px-4">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 whitespace-nowrap tracking-wide border-2 ${filter === tag
                                ? 'bg-primary border-primary text-white shadow-xl shadow-primary/40 scale-105'
                                : 'glass border-white/5 text-gray-400 hover:text-white hover:border-primary/50'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="group glass rounded-3xl overflow-hidden hover-lift w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)]"
                        >
                            {/* Project Image */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                                    {project.image}
                                </span>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-dark-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href={project.link} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform" title="Live Demo">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <a href={project.github} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition-transform" title="Source Code">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-light font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
