import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg shadow-primary/5' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2 group">
                    <img
                        src="/icon.png"
                        alt="Profile"
                        className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-2xl font-bold gradient-text font-mono hidden sm:block">
                        &lt;SFP /&gt;
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1nlneh-IOuBUZn8TOgYtI1p5VYgPgodsP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-500 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-10 flex flex-col items-center gap-8 shadow-2xl">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xl font-semibold text-gray-300 hover:text-white transition-colors py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1nlneh-IOuBUZn8TOgYtI1p5VYgPgodsP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="w-full max-w-[200px] text-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar