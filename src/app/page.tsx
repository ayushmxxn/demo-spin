"use client";
import React, { useState, useRef } from "react";

interface SpinItem {
  id: number;
  name: string;
  value: string;
  image: string;
}

const Spin: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SpinItem | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  const spinItems: SpinItem[] = [
    {
      id: 1,
      name: "Waiting",
      value: "0.000",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23374151'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='16'%3E%3F%3C/text%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "Tooop",
      value: "0.001",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6B6B'/%3E%3Cstop offset='100%25' stop-color='%23FF8E53'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g1)'/%3E%3Ccircle cx='16' cy='12' r='4' fill='white'/%3E%3Cpath d='M12 20 L16 24 L20 20 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Zamaxx",
      value: "0.001",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234ECDC4'/%3E%3Cstop offset='100%25' stop-color='%2344A08D'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g2)'/%3E%3Cpolygon points='8,8 24,8 16,24' fill='white'/%3E%3Ccircle cx='16' cy='12' r='2' fill='url(%23g2)'/%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "D1234",
      value: "0.002",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23667eea'/%3E%3Cstop offset='100%25' stop-color='%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g3)'/%3E%3Crect x='8' y='8' width='16' height='16' rx='2' fill='white'/%3E%3Ctext x='16' y='19' text-anchor='middle' fill='url(%23g3)' font-size='10' font-weight='bold'%3ED%3C/text%3E%3C/svg%3E",
    },
    {
      id: 5,
      name: "BaenBal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFD700'/%3E%3Cstop offset='100%25' stop-color='%23FFA500'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g4)'/%3E%3Cpath d='M16 4 L20 12 L28 12 L22 18 L24 26 L16 22 L8 26 L10 18 L4 12 L12 12 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 6,
      name: "DevDal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF416C'/%3E%3Cstop offset='100%25' stop-color='%23FF4B2B'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g5)'/%3E%3Ccircle cx='16' cy='16' r='10' fill='none' stroke='white' stroke-width='2'/%3E%3Cpath d='M12 16 L16 20 L20 12' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 7,
      name: "SamRal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2300C9FF'/%3E%3Cstop offset='100%25' stop-color='%2392FE9D'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g6)'/%3E%3Cpath d='M8 8 Q16 4 24 8 Q20 16 16 16 Q12 16 8 8' fill='white'/%3E%3Ccircle cx='16' cy='20' r='4' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 8,
      name: "CanBal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FC466B'/%3E%3Cstop offset='100%25' stop-color='%233F5EFB'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g7)'/%3E%3Crect x='6' y='10' width='20' height='12' rx='6' fill='white'/%3E%3Ccircle cx='20' cy='16' r='4' fill='url(%23g7)'/%3E%3C/svg%3E",
    },
    {
      id: 9,
      name: "Allzabal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FDBB2D'/%3E%3Cstop offset='100%25' stop-color='%2322C1C3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g8)'/%3E%3Cpath d='M16 6 L22 14 L16 22 L10 14 Z' fill='white'/%3E%3Ccircle cx='16' cy='14' r='3' fill='url(%23g8)'/%3E%3C/svg%3E",
    },
    {
      id: 10,
      name: "EnBaacal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%238360c3'/%3E%3Cstop offset='100%25' stop-color='%232ebf91'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g9)'/%3E%3Cpath d='M8 16 Q16 8 24 16 Q16 24 8 16' fill='white'/%3E%3Ccircle cx='16' cy='16' r='2' fill='url(%23g9)'/%3E%3C/svg%3E",
    },
    {
      id: 11,
      name: "Baalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ee0979'/%3E%3Cstop offset='100%25' stop-color='%23ff6a00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g10)'/%3E%3Cpath d='M16 8 L8 24 L24 24 Z' fill='white'/%3E%3Cpath d='M16 12 L12 20 L20 20 Z' fill='url(%23g10)'/%3E%3C/svg%3E",
    },
    {
      id: 12,
      name: "Nallal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e3c72'/%3E%3Cstop offset='100%25' stop-color='%232a5298'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g11)'/%3E%3Ccircle cx='11' cy='11' r='3' fill='white'/%3E%3Ccircle cx='21' cy='11' r='3' fill='white'/%3E%3Cpath d='M8 20 Q16 26 24 20' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 13,
      name: "Deslal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23667db6'/%3E%3Cstop offset='100%25' stop-color='%230082c8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g12)'/%3E%3Cpath d='M16 4 L28 16 L16 28 L4 16 Z' fill='white'/%3E%3Cpath d='M16 8 L24 16 L16 24 L8 16 Z' fill='url(%23g12)'/%3E%3C/svg%3E",
    },
    {
      id: 14,
      name: "Bislalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g13' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f093fb'/%3E%3Cstop offset='100%25' stop-color='%23f5576c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g13)'/%3E%3Cpath d='M6 16 L16 6 L26 16 L16 26 Z' fill='white'/%3E%3Cpath d='M10 16 L16 10 L22 16 L16 22 Z' fill='url(%23g13)'/%3E%3C/svg%3E",
    },
    {
      id: 15,
      name: "Tismal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g14' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234facfe'/%3E%3Cstop offset='100%25' stop-color='%2300f2fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g14)'/%3E%3Ccircle cx='16' cy='16' r='8' fill='white'/%3E%3Ccircle cx='16' cy='16' r='4' fill='url(%23g14)'/%3E%3C/svg%3E",
    },
    {
      id: 16,
      name: "Ekalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g15' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a8edea'/%3E%3Cstop offset='100%25' stop-color='%23fed6e3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g15)'/%3E%3Cpath d='M8 8 L24 8 L20 16 L24 24 L8 24 L12 16 Z' fill='%234A90E2'/%3E%3C/svg%3E",
    },
    {
      id: 17,
      name: "Nkalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g16' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffecd2'/%3E%3Cstop offset='100%25' stop-color='%23fcb69f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g16)'/%3E%3Cpath d='M16 6 L6 26 L26 26 Z' fill='%23FF6B6B'/%3E%3Ccircle cx='16' cy='18' r='2' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 18,
      name: "Bsulal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g17' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff9a9e'/%3E%3Cstop offset='100%25' stop-color='%23fecfef'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g17)'/%3E%3Cpolygon points='16,4 28,14 24,28 8,28 4,14' fill='%237B68EE'/%3E%3C/svg%3E",
    },
    {
      id: 19,
      name: "Akburlal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g18' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a1c4fd'/%3E%3Cstop offset='100%25' stop-color='%23c2e9fb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g18)'/%3E%3Crect x='8' y='8' width='6' height='6' fill='%23FF4081'/%3E%3Crect x='18' y='8' width='6' height='6' fill='%23FF4081'/%3E%3Crect x='8' y='18' width='6' height='6' fill='%233F51B5'/%3E%3Crect x='18' y='18' width='6' height='6' fill='%233F51B5'/%3E%3C/svg%3E",
    },
    {
      id: 20,
      name: "kimalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g19' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fad0c4'/%3E%3Cstop offset='100%25' stop-color='%23ffd1ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g19)'/%3E%3Cpath d='M16 8 C20 8 24 12 24 16 C24 20 20 24 16 24 C12 24 8 20 8 16 C8 12 12 8 16 8' fill='%2300BCD4'/%3E%3Ccircle cx='13' cy='14' r='1.5' fill='white'/%3E%3Ccircle cx='19' cy='14' r='1.5' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 21,
      name: "lijal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g20' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ebc0fd'/%3E%3Cstop offset='100%25' stop-color='%23d9ded8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g20)'/%3E%3Cpath d='M8 12 L16 4 L24 12 L24 24 L8 24 Z' fill='%234CAF50'/%3E%3Crect x='14' y='16' width='4' height='8' fill='%238BC34A'/%3E%3C/svg%3E",
    },
    {
      id: 22,
      name: "Pathal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g21' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c1dfc4'/%3E%3Cstop offset='100%25' stop-color='%23deecdd'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g21)'/%3E%3Cpath d='M6 16 L16 6 L26 16 L22 20 L16 14 L10 20 Z' fill='%23FF5722'/%3E%3Cpath d='M10 20 L16 14 L22 20 L26 24 L6 24 Z' fill='%23FF7043'/%3E%3C/svg%3E",
    },
    {
      id: 23,
      name: "Kanthal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g22' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23d299c2'/%3E%3Cstop offset='100%25' stop-color='%23fef9d7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g22)'/%3E%3Cpath d='M16 4 L4 16 L16 28 L28 16 Z' fill='%239C27B0'/%3E%3Cpath d='M16 8 L8 16 L16 24 L24 16 Z' fill='white'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%239C27B0'/%3E%3C/svg%3E",
    },
    {
      id: 24,
      name: "Betall",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g23' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23b8cbb8'/%3E%3Cstop offset='100%25' stop-color='%23b8cbb8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g23)'/%3E%3Ccircle cx='16' cy='16' r='10' fill='%23607D8B'/%3E%3Ccircle cx='16' cy='16' r='6' fill='white'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%23607D8B'/%3E%3C/svg%3E",
    },
    {
      id: 25,
      name: "Zimkimal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g24' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23b465da'/%3E%3Cstop offset='100%25' stop-color='%23cf6cc9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g24)'/%3E%3Cpath d='M6 6 L26 6 L26 16 L16 26 L6 16 Z' fill='white'/%3E%3Cpath d='M10 10 L22 10 L22 14 L16 20 L10 14 Z' fill='url(%23g24)'/%3E%3C/svg%3E",
    },
    {
      id: 26,
      name: "Yugmual",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g25' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ee9ca7'/%3E%3Cstop offset='100%25' stop-color='%23ffdde1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g25)'/%3E%3Cpath d='M8 16 L16 8 L24 16 L16 24 Z' fill='%23E91E63'/%3E%3Cpath d='M12 16 L16 12 L20 16 L16 20 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 27,
      name: "Ciplal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g26' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23de6161'/%3E%3Cstop offset='100%25' stop-color='%232657eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g26)'/%3E%3Ccircle cx='10' cy='10' r='4' fill='white'/%3E%3Ccircle cx='22' cy='10' r='4' fill='white'/%3E%3Ccircle cx='10' cy='22' r='4' fill='white'/%3E%3Ccircle cx='22' cy='22' r='4' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 28,
      name: "Duipalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g27' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffb347'/%3E%3Cstop offset='100%25' stop-color='%23ffcc33'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g27)'/%3E%3Cpath d='M16 4 L26 14 L16 24 L6 14 Z' fill='%23FF9800'/%3E%3Cpath d='M16 8 L22 14 L16 20 L10 14 Z' fill='white'/%3E%3Ccircle cx='16' cy='14' r='2' fill='%23FF9800'/%3E%3C/svg%3E",
    },
    {
      id: 29,
      name: "Kripual",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g28' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c850c0'/%3E%3Cstop offset='100%25' stop-color='%23ffcc70'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g28)'/%3E%3Cpath d='M8 8 L24 8 L24 24 L8 24 Z' fill='white'/%3E%3Cpath d='M12 12 L20 12 L20 20 L12 20 Z' fill='%23673AB7'/%3E%3Ccircle cx='16' cy='16' r='2' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 30,
      name: "Zemmyal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g29' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2365c7f7'/%3E%3Cstop offset='100%25' stop-color='%239cecfb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g29)'/%3E%3Cpath d='M16 6 L28 12 L22 24 L10 24 L4 12 Z' fill='%232196F3'/%3E%3Cpath d='M16 10 L24 14 L20 22 L12 22 L8 14 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 31,
      name: "Sinphal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g30' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2374b9ff'/%3E%3Cstop offset='100%25' stop-color='%230984e3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g30)'/%3E%3Cpath d='M16 4 L4 28 L28 28 Z' fill='white'/%3E%3Cpath d='M16 8 L8 24 L24 24 Z' fill='%23FF4757'/%3E%3Cpath d='M16 12 L12 20 L20 20 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 32,
      name: "Eslaphil",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g31' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2355a3ff'/%3E%3Cstop offset='100%25' stop-color='%23003d82'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g31)'/%3E%3Ccircle cx='16' cy='16' r='12' fill='white'/%3E%3Ccircle cx='16' cy='16' r='8' fill='%234CAF50'/%3E%3Ccircle cx='16' cy='16' r='4' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 33,
      name: "Kilaphial",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g32' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fbc2eb'/%3E%3Cstop offset='100%25' stop-color='%23a6c1ee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g32)'/%3E%3Cpath d='M8 8 L24 16 L8 24 Z' fill='%23E53E3E'/%3E%3Cpath d='M24 8 L24 24 L16 16 Z' fill='%23F56565'/%3E%3C/svg%3E",
    },
    {
      id: 34,
      name: "Jethaal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g33' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fdcbf1'/%3E%3Cstop offset='100%25' stop-color='%23e6dee9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g33)'/%3E%3Cpath d='M6 16 C6 10 10 6 16 6 C22 6 26 10 26 16 C26 22 22 26 16 26 C10 26 6 22 6 16' fill='%23FF6B35'/%3E%3Ccircle cx='12' cy='12' r='2' fill='white'/%3E%3Ccircle cx='20' cy='12' r='2' fill='white'/%3E%3Cpath d='M12 18 Q16 22 20 18' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 35,
      name: "Kataal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g34' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f7f0ac'/%3E%3Cstop offset='100%25' stop-color='%23acf7f0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g34)'/%3E%3Cpath d='M16 4 L28 16 L16 28 L4 16 Z' fill='%23795548'/%3E%3Cpath d='M16 8 L24 16 L16 24 L8 16 Z' fill='white'/%3E%3Cpath d='M16 12 L20 16 L16 20 L12 16 Z' fill='%23795548'/%3E%3C/svg%3E",
    },
    {
      id: 36,
      name: "Hwalal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g35' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffeaa7'/%3E%3Cstop offset='100%25' stop-color='%23fab1a0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g35)'/%3E%3Cpath d='M8 8 L24 8 L28 16 L24 24 L8 24 L4 16 Z' fill='%23E17055'/%3E%3Cpath d='M12 12 L20 12 L22 16 L20 20 L12 20 L10 16 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 37,
      name: "Jismaal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g36' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2374ebd5'/%3E%3Cstop offset='100%25' stop-color='%23acb6e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g36)'/%3E%3Cpath d='M16 6 L6 16 L16 26 L26 16 Z' fill='%23009688'/%3E%3Cpath d='M16 10 L10 16 L16 22 L22 16 Z' fill='white'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23009688'/%3E%3Ccircle cx='18' cy='18' r='1' fill='%23009688'/%3E%3C/svg%3E",
    },
    {
      id: 38,
      name: "Bkasws",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g37' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2386fde8'/%3E%3Cstop offset='100%25' stop-color='%23acb6e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g37)'/%3E%3Cpath d='M16 4 L4 8 L8 16 L4 24 L16 28 L28 24 L24 16 L28 8 Z' fill='%23607D8B'/%3E%3Ccircle cx='16' cy='16' r='6' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 39,
      name: "Askialal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g38' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f093fb'/%3E%3Cstop offset='100%25' stop-color='%23f5576c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g38)'/%3E%3Cpath d='M8 12 L24 12 L24 20 L8 20 Z' fill='white'/%3E%3Ccircle cx='12' cy='16' r='2' fill='%23E91E63'/%3E%3Ccircle cx='20' cy='16' r='2' fill='%23E91E63'/%3E%3Cpath d='M8 8 L24 8 L20 12 L12 12 Z' fill='%23F48FB1'/%3E%3C/svg%3E",
    },
    {
      id: 40,
      name: "Isklal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g39' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234facfe'/%3E%3Cstop offset='100%25' stop-color='%2300f2fe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g39)'/%3E%3Cpath d='M12 8 L20 8 L24 12 L24 20 L20 24 L12 24 L8 20 L8 12 Z' fill='%23FFC107'/%3E%3Ccircle cx='16' cy='16' r='4' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 41,
      name: "Uplolal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g40' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a8edea'/%3E%3Cstop offset='100%25' stop-color='%23fed6e3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g40)'/%3E%3Cpath d='M16 4 L24 12 L16 20 L8 12 Z' fill='%23FF5722'/%3E%3Cpath d='M8 20 L16 12 L24 20 L16 28 Z' fill='%23FF7043'/%3E%3C/svg%3E",
    },
    {
      id: 42,
      name: "Bikaal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g41' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffecd2'/%3E%3Cstop offset='100%25' stop-color='%23fcb69f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g41)'/%3E%3Cpath d='M6 6 L26 6 L22 16 L26 26 L6 26 L10 16 Z' fill='%23673AB7'/%3E%3Cpath d='M10 10 L22 10 L19 16 L22 22 L10 22 L13 16 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 43,
      name: "Sukhlaal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g42' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff9a9e'/%3E%3Cstop offset='100%25' stop-color='%23fecfef'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g42)'/%3E%3Ccircle cx='16' cy='16' r='10' fill='%23795548'/%3E%3Ccircle cx='16' cy='16' r='6' fill='white'/%3E%3Ccircle cx='13' cy='13' r='1.5' fill='%23795548'/%3E%3Ccircle cx='19' cy='13' r='1.5' fill='%23795548'/%3E%3C/svg%3E",
    },
    {
      id: 44,
      name: "Biwayarl",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g43' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a1c4fd'/%3E%3Cstop offset='100%25' stop-color='%23c2e9fb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g43)'/%3E%3Cpath d='M8 8 L24 8 L20 16 L24 24 L8 24 L12 16 Z' fill='%232196F3'/%3E%3Cpath d='M12 12 L20 12 L17 16 L20 20 L12 20 L15 16 Z' fill='white'/%3E%3C/svg%3E",
    },
    {
      id: 45,
      name: "Zeptlal",
      value: "0.1",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g44' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fad0c4'/%3E%3Cstop offset='100%25' stop-color='%23ffd1ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='6' fill='url(%23g44)'/%3E%3Cpath d='M16 6 L26 16 L20 26 L12 26 L6 16 Z' fill='%234CAF50'/%3E%3Cpath d='M16 10 L22 16 L18 22 L14 22 L10 16 Z' fill='white'/%3E%3Ccircle cx='16' cy='16' r='2' fill='%234CAF50'/%3E%3C/svg%3E"
    },
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedItem(null);
    setAnimationKey((prev) => prev + 1);

    const randomWinner = spinItems[Math.floor(Math.random() * spinItems.length)];
    const degreesPerItem = 360 / spinItems.length;
    const winnerIndex = spinItems.findIndex(item => item.id === randomWinner.id);

    // More rotations (5-8 full spins)
    const baseRotations = 5 + Math.random() * 3;
    const targetRotation = currentRotation - (360 * baseRotations) - (winnerIndex * degreesPerItem);

    setCurrentRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedItem(randomWinner);
    }, 6000); // 10 second spin
  };

  const SolIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className="flex-shrink-0">
      <defs>
        <linearGradient id="solGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
      <rect width="16" height="3" x="4" y="4" rx="1" fill="url(#solGradient)" />
      <rect width="16" height="3" x="4" y="10" rx="1" fill="url(#solGradient)" />
      <rect width="16" height="3" x="4" y="16" rx="1" fill="url(#solGradient)" />
    </svg>
  );

  const SpinCard = ({ item, index, totalItems }: { item: SpinItem; index: number; totalItems: number }) => {
    const isWaiting = item.name === "Waiting";
    const isHighlighted = item.name === "Zamaxx" && !isWaiting;
    const isPremium = item.name === "BaenBal";

    return (
      <div
        className="absolute inset-x-0 mx-auto -mt-1 backface-hidden preserve-3d"
        style={{
          width: '9%', // Reduced for 11 cards to be closer
          transform: `rotateY(${(360 / totalItems) * index}deg) translateZ(700px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="preserve-3d backface-hidden will-change-transform">
          <div className={`flex flex-col justify-center w-auto aspect-square bg-gradient-to-b from-white/15 to-gray-600/0 rounded-xl p-0.5 preserve-3d backface-hidden transition-all duration-100 ${isPremium ? 'shadow-lg shadow-purple-500/20' :
            isHighlighted ? 'shadow-lg shadow-blue-500/20' : ''
            }`}>
            <div
              className="bg-gray-1200 w-full h-full absolute top-0 left-0 z-[3] rounded-xl duration-500 will-change-opacity hidden sm:block"
              style={{ opacity: isWaiting ? 0.6 : 0.3 }}
            />

            <div
              className={`flex flex-col h-full rounded-[10px] preserve-3d backface-hidden transition-colors duration-300 will-change-colors shadow-2xl ${isPremium ? 'bg-purple-900/40' :
                isHighlighted ? 'bg-blue-900/40' :
                  isWaiting ? 'bg-gray-800/40' : 'bg-gray-700/40'
                }`}
            >
              <div className="w-full h-full absolute top-0 left-0 z-[2] rounded-[11px] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
              <div className="w-full h-full absolute bottom-0 left-0 z-[2] rounded-b-[11px] bg-gradient-to-t from-black/20 to-transparent" />

              <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-white/15 to-gray-600/0 p-0.5 grow relative preserve-3d backface-hidden">
                <div
                  className={`flex flex-col items-center justify-center w-full h-full rounded-lg p-1 preserve-3d backface-hidden transition-all duration-300 will-change-auto ${isPremium ? 'bg-purple-900/60 text-purple-200' :
                    isHighlighted ? 'bg-blue-900/60 text-blue-200' :
                      isWaiting ? 'bg-gray-800/60 text-gray-400' : 'bg-gray-700/60 text-gray-200'
                    }`}
                >
                  <div className="relative w-max h-max preserve-3d mt-1">
                    {!isWaiting && (
                      <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[200%] h-[150%] scale-x-125 backface-hidden opacity-10"
                        style={{
                          maskImage: 'linear-gradient(transparent, black, transparent)',
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                        }}
                      />
                    )}

                    <div className="relative preserve-3d backface-hidden">
                      <div
                        className={`rounded-xl overflow-hidden border aspect-square w-8 h-8 m-auto -mt-1 transition-all duration-300 will-change-auto ${isWaiting ? 'opacity-40 pointer-events-none border-gray-600 bg-gray-700' :
                          'cursor-pointer hover:opacity-75 hover:brightness-110 border-gray-600 bg-gray-700'
                          } shadow-inner`}
                      >
                        <div className="w-full h-full p-0.5 border border-gray-600 bg-current relative overflow-hidden rounded-[11px]">
                          <div className="bg-gradient-to-b from-white to-white/0 opacity-30 absolute top-0 left-0 w-full h-full" />
                          <div className="w-full h-full border border-gray-600 overflow-hidden relative z-[3] bg-gray-600 rounded-[9px]">
                            <img
                              src={item.image}
                              className="object-cover object-center w-full h-full"
                              alt={item.name}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative text-xs mt-1">
                    <p className={`max-w-[60px] truncate font-medium text-[10px] ${isWaiting ? 'text-gray-400' : 'text-white'
                      }`}>
                      {item.name}
                    </p>
                  </div>

                  <div className="relative mt-0.5">
                    <div className="flex items-center space-x-1">
                      <SolIcon size={10} />
                      <p className={`text-[10px] font-bold transition-colors duration-300 will-change-colors ${isWaiting ? 'text-gray-400' : 'text-white'
                        }`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 w-max h-max mx-auto inset-x-0 preserve-3d backface-hidden">
                <div className={`bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 inset-x-0 mx-auto w-[20px] h-[calc(100%-2px)] mix-blend-plus-lighter transition-opacity duration-300 will-change-opacity ${index === Math.floor(totalItems / 2) ? 'opacity-100' : 'opacity-0'
                  }`} />
                <svg
                  width="20"
                  height="3"
                  viewBox="0 0 45 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`inset-x-0 mb-auto mx-auto transition-all duration-300 will-change-auto ${index === Math.floor(totalItems / 2) ? 'opacity-100 drop-shadow-[0px_0px_10px_currentColor]' : 'opacity-25'
                    }`}
                  style={{
                    color: isPremium ? 'rgb(147, 51, 234)' :
                      isHighlighted ? 'rgb(59, 130, 246)' :
                        'rgb(156, 163, 175)'
                  }}
                >
                  <path d="M3.47326 4.29086C2.91607 4.29086 2.40153 3.99253 2.12472 3.50896L1.01431 1.56914C0.717824 1.0512 1.09177 0.40625 1.68857 0.40625L43.2933 0.406253C43.8901 0.406253 44.2641 1.0512 43.9676 1.56915L42.8572 3.50896C42.5803 3.99253 42.0658 4.29087 41.5086 4.29087L3.47326 4.29086Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div
              className="w-full h-6 absolute bg-black rounded-full -bottom-[20%] -z-[1] blur-lg opacity-50 backface-hidden"
              style={{ transform: 'translateY(5px) scaleY(0.4)' }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/50 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Main container */}
      <div className="relative z-10">
        {/* Arrow indicator */}
        {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-t-[24px] border-l-transparent border-r-transparent border-t-gray-600 drop-shadow-2xl" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-purple-600" />
          </div>
        </div> */}
        {/* Arrow indicator */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            <div className="w-0 h-0 border-l-[22px] border-r-[22px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#161616] drop-shadow-2xl" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#4e30c7]" />
          </div>
        </div>

        {/* 3D Reel Container */}
        <div className="bg-[#0c0c0d]/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0d]/20 via-transparent to-[#0c0c0d]/20 rounded-3xl" />

          <div
            className="relative w-[900px] h-[200px] mx-auto overflow-hidden z-10"
            style={{ perspective: '1400px' }} // Adjusted for 700px translateZ and 11 cards
          >
            <div
              className="flex items-center w-full h-full preserve-3d will-change-transform relative pt-1"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentRotation}deg)`,
                transition: isSpinning ? 'transform 12s cubic-bezier(0.1, 0, 0.2, 1)' : 'none',
              }}
            >
              {spinItems.map((item, index) => (
                <SpinCard
                  key={`${item.id}-${index}`}
                  item={item}
                  index={index}
                  totalItems={spinItems.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spin button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`
          group mt-16 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 relative overflow-hidden shadow-lg
          ${isSpinning
            ? "bg-gray-800/60 text-gray-400 cursor-not-allowed border border-gray-600/30 shadow-inner"
            : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-xl border border-blue-400/20 hover:border-blue-400/40 hover:-translate-y-0.5"
          }
        `}
      >
        {!isSpinning && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        )}

        {isSpinning ? (
          <div className="flex items-center justify-center space-x-3">
            <div className="w-4 h-4 border-2 border-gray-400/60 border-t-gray-300 rounded-full animate-spin" />
            <span className="text-sm font-medium">Spinning...</span>
          </div>
        ) : (
          <span className="relative z-10 font-semibold">Spin to Win</span>
        )}
      </button>

      {/* Result display */}
      {!isSpinning && selectedItem && (
        <div className="mt-8 px-8 py-6 bg-gray-800/60 backdrop-blur-sm text-white rounded-2xl shadow-2xl border border-blue-500/30 relative overflow-hidden opacity-100 transform scale-100 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-gray-600/5 rounded-2xl" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-blue-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-blue-400/5 to-transparent rounded-full translate-y-16 -translate-x-16" />

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide">
                  WINNER
                </span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-3 rounded-xl px-5 py-3 backdrop-blur-sm border border-gray-600/40">
                <div className="p-[2px] rounded-xl">
                  <div className="rounded-[10px] p-1">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                </div>
                <span className="font-semibold text-xl text-gray-100">
                  {selectedItem.name}
                </span>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

              <div className="flex items-center space-x-3 bg-gray-800/60 rounded-xl px-5 py-3 backdrop-blur-sm border border-gray-600/40">
                <SolIcon size={16} />
                <span className="font-mono text-xl font-medium text-gray-100">
                  {selectedItem.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spin;