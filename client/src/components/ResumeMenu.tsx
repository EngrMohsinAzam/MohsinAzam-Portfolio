import type { ReactNode } from "react";
import { FileDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RESUMES } from "@/config/site";

type ResumeMenuProps = {
  children: ReactNode;
  align?: "start" | "center" | "end";
  onSelect?: () => void;
};

/** Wraps any button and opens a picker for the Full Stack, Backend, and Blockchain CVs */
export function ResumeMenu({ children, align = "end", onSelect }: ResumeMenuProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        sideOffset={8}
        className="w-72 p-2 rounded-xl text-white z-[60]"
        style={{
          background: "rgba(8, 20, 38, 0.97)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45)",
        }}
      >
        <DropdownMenuLabel
          className="text-[11px] tracking-widest uppercase px-2 pt-1 pb-2"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Choose a CV to download
        </DropdownMenuLabel>
        {RESUMES.map((resume) => (
          <DropdownMenuItem
            key={resume.url}
            asChild
            onSelect={onSelect}
            className="cursor-pointer rounded-lg px-3 py-2.5 focus:bg-[rgba(0,212,255,0.1)] focus:text-white"
          >
            <a href={resume.url} download className="flex items-start gap-3">
              <FileDown size={18} className="mt-0.5 shrink-0" style={{ color: "#00D4FF" }} />
              <span className="flex flex-col min-w-0">
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {resume.label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                >
                  {resume.description}
                </span>
              </span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
