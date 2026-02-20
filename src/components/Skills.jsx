import { useEffect, useRef } from 'react'

const skills = [
    {
        category: 'Frontend',
        icon: '🎨',
        items: [
            { name: 'HTML5', level: 95, color: '#e34f26' },
            { name: 'CSS3', level: 90, color: '#1572b6' },
            { name: 'JavaScript', level: 90, color: '#f7df1e' },
            { name: 'React', level: 85, color: '#61dafb' },
            { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
            { name: 'TypeScript', level: 75, color: '#3178c6' },
        ]
    },
    {
        category: 'Backend',
        icon: '⚙️',
        items: [
            { name: 'Node.js', level: 85, color: '#339933' },
            { name: 'Express.js', level: 82, color: '#ffffff' },
            { name: 'Python', level: 70, color: '#3776ab' },
            { name: 'PHP', level: 72, color: '#777bb4' },
            { name: 'REST API', level: 88, color: '#8b5cf6' },
            { name: 'GraphQL', level: 65, color: '#e535ab' },
        ]
    },
    {
        category: 'Database & Tools',
        icon: '🗄️',
        items: [
            { name: 'MongoDB', level: 80, color: '#47a248' },
            { name: 'MySQL', level: 78, color: '#4479a1' },
            { name: 'PostgreSQL', level: 72, color: '#4169e1' },
            { name: 'Git', level: 88, color: '#f05032' },
            { name: 'Docker', level: 65, color: '#2496ed' },
            { name: 'Firebase', level: 75, color: '#ffca28' },
        ]
    },
]

const Skills = () => {
    const ref = useRef()

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

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">My Skills</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
                    {skills.map((group) => (
                        <div key={group.category} className="glass rounded-3xl p-8 md:p-10 hover-lift flex flex-col items-center text-center w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)]">
                            <div className="flex flex-col items-center gap-4 mb-10 w-full">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-5xl mb-2 shadow-inner">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">{group.category}</h3>
                            </div>
                            <div className="space-y-5 w-full">
                                {group.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
