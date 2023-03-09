import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bjarney 🌸🌹</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
