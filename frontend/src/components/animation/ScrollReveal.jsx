import useScrollReveal from "../../hooks/useScrollReveal";

export default function ScrollReveal({
  children,
  className = "",
}) {

  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${
        isVisible ? "scroll-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}