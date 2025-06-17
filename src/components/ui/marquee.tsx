import type React from "react";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Animation duration in seconds
   * @default 40
   */
  duration?: number;
  /**
   * Animation speed (alternative to duration)
   */
  speed?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  speed,
  ...props
}: MarqueeProps) {
  const animationDuration = speed ? `${speed}s` : `${duration}s`;

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-4 [--gap:2rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{ "--duration": animationDuration } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 [gap:var(--gap)]", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "animate-marquee-left-to-right": !reverse && !vertical,
              "animate-marquee-right-to-left": reverse && !vertical,
              "animate-marquee-vertical": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
