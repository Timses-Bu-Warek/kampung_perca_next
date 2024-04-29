"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubeFacade(params: { id: string; title: string }) {
  return (
    <LiteYouTubeEmbed
      aspectHeight={9}
      aspectWidth={16}
      id={params.id}
      title={params.title}
      // activatedClass="lty-activated"
      // iframeClass="justify-center w-full h-full mb-6 shadow-xl shadow-gray-400 rounded-xl relative block"
      // playerClass="w-[65px] h-[46px] z-1 0opacity-[.8] border-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22YouTube_Icon%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%201024%20721%22%20enable-background%3D%22new%200%200%201024%20721%22%20xml%3Aspace%3D%22preserve%22%3E%3Cscript%20xmlns%3D%22%22%3E%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20Object.defineProperty(navigator%2C%20%22globalPrivacyControl%22%2C%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20false%2C%0A%20%20%20%20%20%20%20%20configurable%3A%20false%2C%0A%20%20%20%20%20%20%20%20writable%3A%20false%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20document.currentScript.parentElement.removeChild(document.currentScript)%3B%0A%20%20%20%20%7D%20catch(e)%20%7B%7D%3B%0A%20%20%20%20%20%20%3C%2Fscript%3E%0A%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%23FFFFFF%22%20d%3D%22M407%2C493l276-143L407%2C206V493z%22%2F%3E%0A%3Cpath%20id%3D%22The_Sharpness%22%20opacity%3D%220.12%22%20fill%3D%22%23420000%22%20d%3D%22M407%2C206l242%2C161.6l34-17.6L407%2C206z%22%2F%3E%0A%3Cg%20id%3D%22Lozenge%22%3E%0A%09%3Cg%3E%0A%09%09%0A%09%09%09%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22512.5%22%20y1%3D%22719.7%22%20x2%3D%22512.5%22%20y2%3D%221.2%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20721)%22%3E%0A%09%09%09%3Cstop%20offset%3D%220%22%20style%3D%22stop-color%3A%23E52D27%22%2F%3E%0A%09%09%09%3Cstop%20offset%3D%221%22%20style%3D%22stop-color%3A%23BF171D%22%2F%3E%0A%09%09%3C%2FlinearGradient%3E%0A%09%09%3Cpath%20fill%3D%22url(%23SVGID_1_)%22%20d%3D%22M1013%2C156.3c0%2C0-10-70.4-40.6-101.4C933.6%2C14.2%2C890%2C14%2C870.1%2C11.6C727.1%2C1.3%2C512.7%2C1.3%2C512.7%2C1.3%20%20%20%20h-0.4c0%2C0-214.4%2C0-357.4%2C10.3C135%2C14%2C91.4%2C14.2%2C52.6%2C54.9C22%2C85.9%2C12%2C156.3%2C12%2C156.3S1.8%2C238.9%2C1.8%2C321.6v77.5%20%20%20%20C1.8%2C481.8%2C12%2C564.4%2C12%2C564.4s10%2C70.4%2C40.6%2C101.4c38.9%2C40.7%2C89.9%2C39.4%2C112.6%2C43.7c81.7%2C7.8%2C347.3%2C10.3%2C347.3%2C10.3%20%20%20%20s214.6-0.3%2C357.6-10.7c20-2.4%2C63.5-2.6%2C102.3-43.3c30.6-31%2C40.6-101.4%2C40.6-101.4s10.2-82.7%2C10.2-165.3v-77.5%20%20%20%20C1023.2%2C238.9%2C1013%2C156.3%2C1013%2C156.3z%20M407%2C493V206l276%2C144L407%2C493z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E')]"
      // wrapperClass="justify-center w-full h-full mb-6 shadow-xl shadow-gray-400 rounded-xl relative block [contain: content] bg-center bg-cover"
    />
  );
}
