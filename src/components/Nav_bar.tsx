"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    const sections = NAV_ITEMS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0.01 },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out ${
        scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo - smaller on tablet so nav fits */}
          <button
            onClick={() => scrollToId("home")}
            aria-label="Kadir Salami"
            className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-tight hover:opacity-95 focus-ring hover-lift shrink-0"
            style={{
              fontFamily:
                "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <Image
              src="https://res.cloudinary.com/drktuxjgs/image/upload/v1770302201/FullLogo_NoBuffer-removebg-preview_jl9edl.png"
              alt="Kadir Salami"
              width={40}
              height={40}
              className="w-25 h-15 md:w-30 md:h-12 md:w-30 md:h-16 object-contain"
            />
          </button>

          {/* Desktop / Tablet Navigation - tighter on tablet (768–1024) */}
          <ul
            className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-6 xl:gap-8 text-xs md:text-xs lg:text-sm py-1"
            style={{ fontFamily: "Inter, Roboto, sans-serif" }}
          >
            {[
              ["home", "Overview"],
              ["problem", "The Problem"],
              ["work", "Proof of Impact"],
              ["about", "My Perspective"],
              ["thinking", "Insights"],
              ["contact", "Connect"],
            ].map(([id, label]) => {
              const isActive = activeId === id;
              return (
                <li key={id} className="shrink-0">
                  <button
                    onClick={() => scrollToId(id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-2 px-2 md:px-2.5 lg:px-4 rounded-md transition-colors duration-300 focus-ring hover-lift whitespace-nowrap ${
                      scrolled
                        ? "text-black hover:bg-amber-50 hover:text-black"
                        : "text-white hover:text-white"
                    } ${isActive ? (scrolled ? "text-[#e07424] font-semibold" : "text-amber-300 font-semibold") : ""}`}
                  >
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`absolute left-0 -bottom-0.5 h-px w-full bg-[#e07424] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA - hidden on tablet to save space, show from lg */}
          <div className="hidden lg:block shrink-0">
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-amber-600 text-white hover:bg-amber-700 transition focus-ring"
              style={{ fontFamily: "var(--bold-paragraph)" }}
            >
              Start a conversation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 bg-transparent p-2 hover:bg-amber-50 transition focus-ring"
          >
            <div className="space-y-1.5">
              <span
                className={
                  scrolled
                    ? "block w-5 h-px bg-black"
                    : "block w-5 h-px bg-white/90"
                }
              />
              <span
                className={
                  scrolled
                    ? "block w-5 h-px bg-black"
                    : "block w-5 h-px bg-white/90"
                }
              />
              <span
                className={
                  scrolled
                    ? "block w-5 h-px bg-black"
                    : "block w-5 h-px bg-white/90"
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-white hidden opacity-0 -translate-y-1 transition-[opacity,transform] duration-300 ease-out"
      >
        <ul
          className="flex flex-col px-6 py-6 space-y-4 text-base text-black"
          style={{ fontFamily: "Inter, Roboto, sans-serif" }}
        >
          {[
            ["home", "Overview"],
            ["problem", "The Problem"],
            ["work", "Proof of Impact"],
            ["about", "My Perspective"],
            ["thinking", "Insights"],
            ["contact", "Connect"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => scrollToId(id)}
                className={`block w-full text-left transition-colors duration-150 focus-ring py-3 px-3 rounded-md ${
                  activeId === id
                    ? "bg-amber-50 text-[#e07424] font-semibold"
                    : "text-black hover:bg-amber-50 hover:text-[#e07424]"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex w-full justify-center px-3 py-2.5 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition focus-ring"
              style={{ fontFamily: "var(--bold-paragraph)" }}
            >
              Start a conversation
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
