const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold gradient-text font-mono">&lt;SFP /&gt;</span>
                    </div>

                    <p className="text-gray-500 text-sm text-center">
                        © {currentYear} <span className="text-gray-400">Sulistyo Fajar Pratama</span>.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#home" className="text-gray-500 hover:text-primary-light transition-colors text-sm">
                            Back to Top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
