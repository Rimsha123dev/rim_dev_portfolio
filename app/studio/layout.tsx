export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children} {/* No navbar, no animations, only studio */}
      </body>
    </html>
  );
}