import { useEffect, useRef } from 'react'

const experiences = [
    {
        company: 'Semarsoft',
        role: 'Software Developer Intern',
        period: 'May 2023 – October 2023',
        color: 'from-violet-500/20 to-purple-600/20',
        icon: '💼',
        bullets: [
            'Developed E-Kantin Nejavio, a cafeteria ordering website using WordPress and MySQL.',
            'Customized WordPress theme to implement product catalog and ordering features.',
            'Managed product listings, categories, and transaction data via the WordPress dashboard.',
            'Built an Android application using Kotlin WebView to provide mobile access to the website.',
            'Created a WhatsApp automation bot using C# for automated announcements and information distribution.',
            'Developed SEO-optimized landing pages to improve website visibility.',
        ],
    },
]

const certifications = [
    {
        title: 'National Competency Certificate – Junior Assistant Programmer',
        issuer: 'Indonesian Professional Certification Authority (BNSP)',
        period: 'May 2025',
        certNo: 'No. 62010 2512 0 0004501 2025',
        valid: 'Valid: 2025 – 2028',
        icon: '🏆',
        color: 'from-amber-500/20 to-yellow-600/20',
        bullets: [
            'Passed the national competency assessment in Software Development (Programming) at the Junior Assistant Programmer occupational level.',
            'Competency units covered: data structures, program specifications, structured programming, code writing based on best practices, debugging, and software tools configuration.',
            'Issued by the Professional Certification Body of SMK Negeri 1 Bangil, recognized nationally for 3 years.',
        ],
    },
]

const education = [
    {
        institution: 'Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)',
        degree: 'Diploma III (D3) – Informatics Engineering',
        period: '2024 – Present',
        detail: 'Current GPA: 3.50 / 4.00',
        icon: '🎓',
        color: 'from-blue-500/20 to-cyan-600/20',
        bullets: [
            'Relevant Coursework: Object-Oriented Programming (OOP), Computer Networks, Mobile Application Development, Cloud Computing.',
        ],
    },
    {
        institution: 'SMK Negeri 1 Bangil (State Vocational High School 1 Bangil)',
        degree: 'Major in Software Engineering',
        period: '2021 – 2024',
        detail: '',
        icon: '🏫',
        color: 'from-emerald-500/20 to-green-600/20',
        bullets: [
            'Relevant Coursework: Desktop Application Development, Web Development, Mobile Application Development, Database Management.',
        ],
    },
]

const Experience = () => {
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
        <section id="experience" className="py-24 relative">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div ref={ref} className="reveal max-w-5xl mx-auto px-6">

                {/* EXPERIENCE */}
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        <span className="gradient-text">Experience</span>
                    </h2>
                </div>

                <div className="space-y-6 mb-20">
                    {experiences.map((exp) => (
                        <div key={exp.company} className="glass rounded-3xl p-8 hover-lift">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shrink-0`}>
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                        <p className="text-primary-light font-medium">{exp.role}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 font-mono shrink-0 mt-1">{exp.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {exp.bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CERTIFICATIONS */}
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Credentials</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                </div>

                <div className="space-y-6 mb-20">
                    {certifications.map((cert) => (
                        <div key={cert.title} className="glass rounded-3xl p-8 hover-lift">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl shrink-0`}>
                                        {cert.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white leading-snug">{cert.title}</h3>
                                        <p className="text-primary-light font-medium text-sm">{cert.issuer}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{cert.certNo} &nbsp;|&nbsp; {cert.valid}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 font-mono shrink-0 mt-1">{cert.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {cert.bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* EDUCATION */}
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Background</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        <span className="gradient-text">Education</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {education.map((edu) => (
                        <div key={edu.institution} className="glass rounded-3xl p-8 hover-lift">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl shrink-0`}>
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white leading-snug">{edu.institution}</h3>
                                        <p className="text-primary-light font-medium text-sm">{edu.degree}</p>
                                        {edu.detail && <p className="text-gray-400 text-xs mt-0.5">{edu.detail}</p>}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 font-mono shrink-0 mt-1">{edu.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {edu.bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience
