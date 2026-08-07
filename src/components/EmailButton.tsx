"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export const EMAIL = "mtanseefshahid@gmail.com";

/**
 * The address as a mailto link, paired with a copy button.
 *
 * mailto: silently does nothing on machines with no registered mail handler —
 * common for webmail users — so the address must always be obtainable without
 * it. The link stays for people who do have a mail client.
 */
export default function EmailButton({ tone = "light" }: { tone?: "light" | "dark" }) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => () => {
        if (timer.current) clearTimeout(timer.current);
    }, []);

    async function copy() {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            // Clipboard API needs a secure context; fall back to a temp selection.
            const el = document.createElement("textarea");
            el.value = EMAIL;
            el.setAttribute("readonly", "");
            el.style.position = "fixed";
            el.style.opacity = "0";
            document.body.appendChild(el);
            el.select();
            try {
                document.execCommand("copy");
            } catch {
                return; // give up silently; the address is visible on screen anyway
            } finally {
                document.body.removeChild(el);
            }
        }

        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2000);
    }

    const dark = tone === "dark";

    return (
        <span className="inline-flex items-stretch rounded-[2px]">
            <a
                href={`mailto:${EMAIL}`}
                className={`rounded-l-[2px] px-5 py-2.75 text-[14px] font-medium transition-colors ${
                    dark
                        ? "bg-paper text-ink hover:bg-accent hover:text-paper"
                        : "bg-ink text-paper hover:bg-accent"
                }`}
            >
                {EMAIL}
            </a>

            <button
                type="button"
                onClick={copy}
                aria-label={copied ? "Email address copied" : "Copy email address"}
                title={copied ? "Copied" : "Copy email address"}
                className={`flex cursor-pointer items-center gap-1.5 rounded-r-[2px] border-l px-3 text-[12px] font-medium transition-colors ${
                    dark
                        ? "border-ink/15 bg-paper text-ink hover:bg-accent hover:text-paper"
                        : "border-paper/20 bg-ink text-paper hover:bg-accent"
                }`}
            >
                {copied ? (
                    <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        Copied
                    </>
                ) : (
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
            </button>
        </span>
    );
}
