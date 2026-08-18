import { useEffect, useState, useRef } from 'react';
import { ShieldAlert, Lock } from 'lucide-react';

export default function ContentProtection() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isShieldActive, setIsShieldActive] = useState(false);
  const toastTimeoutRef = useRef(null);
  const shieldTimeoutRef = useRef(null);

  const showToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const applyScreenProtection = (reason = 'Screen capture is restricted') => {
    // 1. Direct synchronous DOM class addition (0ms delay)
    document.documentElement.classList.add('screen-protected');
    setIsShieldActive(true);
    showToast(reason);

    // 2. Wipe clipboard buffer
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('Protected Content - e-construct.in');
      }
    } catch (_) {}

    if (shieldTimeoutRef.current) clearTimeout(shieldTimeoutRef.current);
    shieldTimeoutRef.current = setTimeout(() => {
      if (document.hasFocus()) {
        document.documentElement.classList.remove('screen-protected');
        setIsShieldActive(false);
      }
    }, 2500);
  };

  const removeScreenProtection = () => {
    document.documentElement.classList.remove('screen-protected');
    setIsShieldActive(false);
  };

  useEffect(() => {
    // 1. Block Context Menu (Right-Click)
    const handleContextMenu = (e) => {
      e.preventDefault();
      showToast('Right-click is disabled to protect website content.');
      return false;
    };

    // 2. Block Dragging of images, videos, canvas, and links
    const handleDragStart = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (['img', 'video', 'canvas', 'a', 'picture', 'svg'].includes(tag) || e.target?.closest('img, video, canvas, a')) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Block keyboard shortcuts for Save, Print, DevTools, and Screenshot
    const handleKeyDown = (e) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key?.toLowerCase();
      const code = e.keyCode || e.which;

      // PrintScreen key (Win Snipping Tool / OS PrintScreen)
      if (e.key === 'PrintScreen' || code === 44 || key === 'printscreen') {
        e.preventDefault();
        applyScreenProtection('Screenshots and screen captures are disabled.');
        return false;
      }

      // Windows + Shift + S or Mac Cmd + Shift + 3/4/5
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && ['s', '3', '4', '5'].includes(key)) {
        e.preventDefault();
        applyScreenProtection('Snipping Tool and screen captures are disabled.');
        return false;
      }

      // Save Page: Ctrl+S or Cmd+S
      if (isCtrlOrCmd && key === 's') {
        e.preventDefault();
        showToast('Saving this web page is disabled.');
        return false;
      }

      // Print Page: Ctrl+P or Cmd+P
      if (isCtrlOrCmd && key === 'p') {
        e.preventDefault();
        showToast('Printing this page is disabled for copyright protection.');
        return false;
      }

      // View Source: Ctrl+U or Cmd+Option+U
      if (isCtrlOrCmd && key === 'u') {
        e.preventDefault();
        showToast('Viewing page source is disabled.');
        return false;
      }

      // DevTools: F12
      if (e.key === 'F12' || code === 123) {
        e.preventDefault();
        showToast('Developer tools access is restricted.');
        return false;
      }

      // DevTools: Ctrl+Shift+I / Cmd+Option+I, Ctrl+Shift+J / Cmd+Option+J, Ctrl+Shift+C / Cmd+Option+C
      if (isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(key)) {
        e.preventDefault();
        showToast('Developer inspection tools are disabled.');
        return false;
      }

      // Mac Cmd+Alt+I / Cmd+Alt+J / Cmd+Alt+C
      if (e.metaKey && e.altKey && ['i', 'j', 'c', 'u'].includes(key)) {
        e.preventDefault();
        showToast('Inspection tools are disabled.');
        return false;
      }
    };

    // 4. Handle KeyUp for PrintScreen (clears any captured clipboard buffer)
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44 || e.key?.toLowerCase() === 'printscreen') {
        applyScreenProtection('Screenshots and screen captures are disabled.');
      }
    };

    // 5. Block copying on non-input text
    const handleCopy = (e) => {
      const target = e.target;
      const isInput = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.closest('input, textarea, [contenteditable="true"]')
      );

      if (!isInput) {
        e.preventDefault();
        showToast('Copying text from this page is disabled.');
        return false;
      }
    };

    // 6. Block cutting on non-input text
    const handleCut = (e) => {
      const target = e.target;
      const isInput = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.closest('input, textarea, [contenteditable="true"]')
      );

      if (!isInput) {
        e.preventDefault();
        return false;
      }
    };

    // 7. Instant Window Blur Shield
    const handleWindowBlur = () => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'IFRAME') {
        return;
      }
      document.documentElement.classList.add('screen-protected');
      setIsShieldActive(true);
    };

    const handleWindowFocus = () => {
      removeScreenProtection();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.documentElement.classList.add('screen-protected');
        setIsShieldActive(true);
      } else {
        removeScreenProtection();
      }
    };

    const handleMouseMove = () => {
      if (document.hasFocus() && isShieldActive) {
        removeScreenProtection();
      }
    };

    // Attach all listeners to window / document
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('dragstart', handleDragStart, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('copy', handleCopy, { capture: true });
    document.addEventListener('cut', handleCut, { capture: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('dragstart', handleDragStart, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('copy', handleCopy, { capture: true });
      document.removeEventListener('cut', handleCut, { capture: true });
      document.documentElement.classList.remove('screen-protected');
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      if (shieldTimeoutRef.current) clearTimeout(shieldTimeoutRef.current);
    };
  }, [isShieldActive]);

  return (
    <>
      {/* ── Toast Alert ──────────────────────────────────────────────────────── */}
      {toastMessage && (
        <div
          role="alert"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[999999999] pointer-events-none transition-all duration-300 animate-fadeIn"
          style={{
            animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/95 text-white border border-yellow-500/30 shadow-2xl backdrop-blur-md">
            <div className="w-7 h-7 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
              <ShieldAlert size={16} />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100 pr-2">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* ── Screen Capture & Snipping Tool Privacy Shield Curtain ──────────────── */}
      {isShieldActive && (
        <div
          onClick={removeScreenProtection}
          className="fixed inset-0 z-[9999999999] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-6 select-none cursor-pointer transition-opacity duration-100"
        >
          <div className="max-w-md mx-auto flex flex-col items-center bg-slate-900/90 border border-yellow-500/30 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center mb-5 animate-pulse">
              <Lock size={32} />
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-black tracking-tight mb-2 uppercase">
              Protected Content
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              Screen capture and background viewing are restricted to protect proprietary engineering materials and designs.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
              Click anywhere to resume
            </div>
          </div>

          {/* Watermark Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-10 flex flex-wrap gap-12 items-center justify-center p-8 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="text-white font-black text-xs sm:text-sm tracking-widest uppercase rotate-[-25deg]">
                E-CONSTRUCT • CONFIDENTIAL &amp; PROTECTED
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
