"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = ["home", "problem", "about", "work", "thinking", "contact"];
const SCROLL_THRESHOLD = 56;

export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* ------------------------------
   Scroll background state
  -------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------------------------
   Active section tracking
  -------------------------------- */
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ------------------------------
   Smooth scroll handler
  -------------------------------- */
  const scrollToId = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ------------------------------
   Mobile menu animation
  -------------------------------- */
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileOpen) {
      menu.classList.remove("hidden");
      requestAnimationFrame(() => {
        menu.classList.remove("opacity-0", "-translate-y-1");
        menu.classList.add("opacity-100", "translate-y-0");
      });
    } else {
      menu.classList.remove("opacity-100", "translate-y-0");
      menu.classList.add("opacity-0", "-translate-y-1");
      setTimeout(() => menu.classList.add("hidden"), 260);
    }
  }, [mobileOpen]);

  return (
    <nav
      ref={navbarRef}
      role="navigation"
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out text-white ${
        scrolled
          ? "bg-black/45 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToId("home")}
            aria-label="Kadir Salami"
            className="text-2xl md:text-3xl font-semibold tracking-tight hover:opacity-90 focus-ring hover-lift"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Kadir Salami
          </button>

          {/* Desktop / Tablet Navigation */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm">
            {[
              ["home", "Overview"],
              ["problem", "The Problem"],
              ["about", "Leadership"],
              ["work", "Selected work"],
              ["thinking", "Insights"],
              ["contact", "Connect"],
            ].map(([id, label]) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToId(id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-2 transition-colors duration-200 focus-ring hover-lift ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`absolute left-0 -bottom-0.5 h-px w-full bg-white/80 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 transition focus-ring hover-lift"
            >
              Start a conversation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 backdrop-blur-md p-2 hover:bg-white/10 transition focus-ring hover-lift"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-px bg-white/90" />
              <span className="block w-5 h-px bg-white/90" />
              <span className="block w-5 h-px bg-white/90" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-black/70 backdrop-blur-md hidden opacity-0 -translate-y-1 transition-[opacity,transform] duration-300 ease-out"
      >
        <ul className="flex flex-col px-6 py-6 space-y-5 text-base text-white">
          {[
            ["home", "Overview"],
            ["problem", "The Problem"],
            ["about", "Leadership"],
            ["work", "Selected work"],
            ["thinking", "Insights"],
            ["contact", "Connect"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollToId(id)}
                className="block w-full text-left opacity-80 hover:opacity-100 transition focus-ring hover-lift py-2 px-3 rounded-md hover:bg-white/10"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex w-full justify-center px-3 py-2.5 rounded-md border border-white/20 bg-white/10 hover:bg-white/15 transition focus-ring hover-lift"
            >
              Start a conversation
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
