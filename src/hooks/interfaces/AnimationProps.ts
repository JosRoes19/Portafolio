import type { Variants } from "framer-motion";

export type AnimationType = 
| ""
| "slide" 
| "LeftHorizontal"
| "RightHorizontal"
| "fade"
| "nextTransition"
| "prevTransition"

export interface AnimationConfProps {
   visible: {
      opacity: number;
      y?: number;
      x?: number;
      scale?: number;
      transition: { duration: number; ease: string };
   };
   hidden: {
      opacity: number;
      y?: number;
      x?: number;
      scale?: number;
   };
}

export type CustomVariants = Variants & {
   visible?: Variants['visible'] & {
      transition?: { duration: number; ease: string };
   };
   hidden?: Variants['hidden'];
};