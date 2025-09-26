"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Cross } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Recursos", href: "/recursos" },
    { name: "Galería", href: "/galeria" },
    { name: "Contacto", href: "/contacto" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors">
              <Cross className="h-6 w-6 md:h-8 md:w-8 text-accent" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold block leading-tight">Iglesia UCB</span>
              <span className="text-xs text-primary-foreground/70 hidden sm:block">Cristo al Mundo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-primary/80 hover:text-accent transition-all duration-200 font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary/80 hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-2 bg-primary/95 backdrop-blur-sm rounded-lg p-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground hover:bg-accent hover:text-primary transition-colors duration-200 py-3 px-4 rounded-md text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}