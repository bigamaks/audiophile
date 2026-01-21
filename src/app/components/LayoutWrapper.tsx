// components/LayoutWrapper.tsx
interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutWrapper({ children, className = "" }: LayoutWrapperProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}