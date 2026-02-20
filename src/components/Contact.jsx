import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const ref = useRef()
    const formRef = useRef()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)

        try {
            // Read from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

            alert('Message sent! Thank you for reaching out.')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            alert('Oops! Something went wrong while sending your message.')
        } finally {
            setSending(false)
        }
    }

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'sulistyofajar@gmail.com',
            link: 'mailto:sulistyofajar@gmail.com',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            value: 'Indonesia',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: '+62 857 0699 2143',
        },
    ]

    const socials = [
        {
            name: 'GitHub',
            url: 'https://github.com/skutanjir',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sulistyo-fajar-pratama-a6345627a/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ]

    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div ref={ref} className="reveal max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Contact</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {contactInfo.map((info) => (
                            <div key={info.title} className="glass rounded-2xl p-6 hover-lift flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary-light shrink-0">
                                    {info.icon}
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <h4 className="text-sm text-gray-400 mb-1">{info.title}</h4>
                                    {info.link ? (
                                        <a href={info.link} className="text-white font-medium hover:text-primary-light transition-colors text-center sm:text-left">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span className="text-white font-medium text-center sm:text-left">{info.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-4 flex flex-col items-center lg:items-start w-full">
                            <h4 className="text-sm text-gray-400 mb-4">Find me on</h4>
                            <div className="flex justify-center lg:justify-start gap-3 w-full">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 mb-2 block">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-5 py-3 rounded-xl bg-dark-700/50 border border-white/5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder-gray-600"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            {sending ? (
                                <>
                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
