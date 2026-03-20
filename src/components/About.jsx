import { useEffect, useRef } from 'react'

const About = () => {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible')
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: '3.50', label: 'Current GPA' },
        { number: '6+', label: 'Projects Done' },
        { number: '10+', label: 'Technologies' },
        { number: '1', label: 'Internship' },
    ]

    return (
        <section id="about" className="py-24 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

            <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        Get to <span className="gradient-text">Know Me</span>
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
                    {/* Profile Image */}
                    <div className="relative group flex justify-center w-full">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent p-[2px] rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                <div className="w-full h-full rounded-3xl bg-dark-800" />
                            </div>
                            <div className="absolute inset-0 rounded-3xl overflow-hidden glass">
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <span className="text-8xl">👨‍💻</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                                <span className="text-sm font-semibold gradient-text">Full Stack Dev</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            A Passionate Developer Based in Indonesia 🇮🇩
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg max-w-3xl mx-auto">
                            I'm <span className="text-white font-semibold">Sulistyo Fajar Pratama</span>, an Informatics
                            Engineering student at Electronic Engineering Polytechnic Institute of Surabaya (EEPIS) with
                            strong interest in software development, web applications, and system automation.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-10 text-lg max-w-3xl mx-auto">
                            Experienced in building web-based systems using WordPress, mobile applications using Kotlin
                            and Flutter, and automation tools such as WhatsApp bots. Skilled in React and TypeScript for
                            modern web development, with hands-on experience integrating backend services and payment
                            systems using Supabase and Midtrans.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto place-items-center">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="glass rounded-2xl p-6 text-center hover-lift cursor-default transition-all duration-300"
                                >
                                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About