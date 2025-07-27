"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { InlineWidget } from "react-calendly";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScheduleCall({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Disable scroll when modal is open
      useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Ensure component is mounted on client before rendering portal
  useEffect(() => {
    setIsClient(true);
  }, []);


  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    inset: 0,
    backdropFilter: "blur(6px)", // Blur effect
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  };

  const modalStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: isMobile ? "95vw" : "58vw",
    height: isMobile ? "92vh" : "90vh",
    maxHeight: "80vh",
    overflow: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: 8,
    right: 14,
    background: "transparent",
    border: "none",
    fontSize: 28,
    cursor: "pointer",
    zIndex: 10,
    color: "#6b7280",
    padding: "4px",
    lineHeight: 1,
  };

  const calendlyWidgetStyle: React.CSSProperties = {
    minWidth: 320,
    width: "100%",
    height: "100%",
    border: "none",
  };

  const ModalComponent = (
    <div style={overlayStyle} onClick={() => setOpen(false)}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button
          style={closeButtonStyle}
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <InlineWidget
          url="https://calendly.com/office-hisync/strategy-call?hide_gdpr_banner=1"
          styles={calendlyWidgetStyle}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
        />
      </div>
    </div>
  );


  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="sm"
        className={cn("bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 h-9", className)}
      >
        Schedule Call
      </Button>
      {open && isClient && createPortal(ModalComponent, document.body)}  
    </>
  );
}
