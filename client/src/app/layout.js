export const metadata = {
  title: "CS:GO Stats",
  description: "Created by Adrian Ursu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
