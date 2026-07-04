"use client";

const currentYear = new Date().getFullYear();

export function CopyrightYear() {
  return <span>{currentYear}</span>;
}
