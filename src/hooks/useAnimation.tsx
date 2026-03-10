import { useEffect, useState } from "react"
import useMobile from "./useMobile";
import type{ AnimationType } from "./interfaces/AnimationProps";
import type{ Variants } from "framer-motion";

export const useAnimation = (type: AnimationType, duration: number) => {

   const [animationSettings, setAnimationSettings] = useState<Variants>();
   const { isMobile } = useMobile();

   useEffect(() => {
      setting();

   }, [type]);

   const setting = () => {
      switch (type) {
         case 'slide':
            setAnimationSettings({
               visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 1 : 1.5, ease: "easeInOut" } },
               hidden: { opacity: 0.0001, y: 50 }
            });
            break;

         case 'fade':
            setAnimationSettings({
               visible: { opacity: 1, y: 0, transition: { duration: duration, ease: "easeInOut" } },
               hidden: { opacity: 0.0001, y: 0 }
            });
            break;

         case 'LeftHorizontal':
            setAnimationSettings({
               visible: { opacity: 1, x: 0, transition: { duration: isMobile ? 1 : 1.5, ease: "easeInOut" } },
               hidden: { opacity: 0.0001, x: -50 }
            });
            break;
            
         case 'RightHorizontal':
            setAnimationSettings({
               visible: { opacity: 1, x: 0, transition: { duration: isMobile ? 1 : 1.5, ease: "easeInOut" } },
               hidden: { opacity: 0.0001, x: 50 }
            });
            break;


         case 'nextTransition':
            setAnimationSettings({
               visible: { opacity: 0.0001, x: -50, scale: 1, transition: { duration: isMobile ? 1 : 1, ease: "easeInOut" } },
               hidden: { opacity: 0.0001, x: 0 },
            });
            break;

         case 'prevTransition':
            setAnimationSettings({
               visible: { opacity: 0.0001, x: 50, transition: { duration: isMobile ? 1 : 1, ease: "easeInOut" } },
            });
            break;

         default:
            setAnimationSettings({
               visible: { opacity: 1 },
               hidden: { opacity: 1 }
            });


      }
   }

   return animationSettings;
}