import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedBackground = () => {
    return (
        <Sphere visible args={[1, 32, 32]} scale={2}>
            <MeshDistortMaterial
                color="#8b5cf6"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.5}
            />
        </Sphere>
    )
}

const roles = [
    'Full Stack Developer',
    'React Developer',
    'Frontend Engineer',
    'Backend Developer',
    'UI/UX Enthusiast',
]

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timeout

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
        } else {
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentRole.substring(0, displayText.length - 1)
                        : currentRole.substring(0, displayText.length + 1)
                )
            }, isDeleting ? 50 : 100)
        }

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Background Element */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <AnimatedBackground />
                </Canvas>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">
                {/* Greeting Badge */}
                <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 mx-auto hover-lift">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">Available for work</span>
                </div>

                {/* Name */}
                <h1 className="animate-slide-up text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight text-center">
                    <span className="text-white">Hi, I'm </span>
                    <span className="gradient-text">Sulistyo</span>
                </h1>
                <h2 className="animate-slide-up text-2xl sm:text-4xl md:text-5xl font-bold text-white/80 mb-6 text-center" style={{ animationDelay: '0.2s' }}>
                    Fajar Pratama
                </h2>

                {/* Typing Effect */}
                <div className="animate-slide-up h-10 sm:h-12 flex items-center justify-center mb-8 mx-auto" style={{ animationDelay: '0.4s' }}>
                    <span className="text-lg sm:text-3xl font-mono text-primary-light">
                        {displayText}
                        <span className="inline-block w-0.5 h-6 sm:h-8 bg-accent ml-1 animate-pulse" />
                    </span>
                </div>

                {/* Description */}
                <p className="animate-slide-up text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-center" style={{ animationDelay: '0.6s' }}>
                    Passionate about crafting beautiful, performant web applications.
                    I turn ideas into reality with clean code and modern technologies.
                </p>

                {/* CTA Buttons */}
                <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center w-full" style={{ animationDelay: '0.8s' }}>
                    <a
                        href="#projects"
                        className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                        View My Work
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 gradient-border text-center"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                        <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
