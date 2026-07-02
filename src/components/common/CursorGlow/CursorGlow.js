import { useEffect, useRef } from 'react';
import './CursorGlow.css';

function CursorGlow() {
    const glowRef = useRef(null);
    const target = useRef({ x: -300, y: -300 });
    const current = useRef({ x: -300, y: -300 });
    const raf = useRef(null);
    const visible = useRef(false);

    useEffect(() => {
        const onMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };
            if (!visible.current && glowRef.current) {
                glowRef.current.style.opacity = '1';
                visible.current = true;
            }
        };

        const onLeave = () => {
            if (glowRef.current) {
                glowRef.current.style.opacity = '0';
                visible.current = false;
            }
        };

        const animate = () => {
            current.current.x += (target.current.x - current.current.x) * 0.1;
            current.current.y += (target.current.y - current.current.y) * 0.1;

            if (glowRef.current) {
                glowRef.current.style.transform =
                    `translate(${current.current.x}px, ${current.current.y}px)`;
            }
            raf.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);
        raf.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <div className="cursor-glow" ref={glowRef}>
            <span className="cursor-glow__ring" />
        </div>
    );
}

export default CursorGlow;
