import './globals.css'

export const metadata = {
  title: 'Lakshana Construction | Building Trust with Quality',
  description: 'Lakshana Construction – Premium residential, commercial construction, interior design, and architectural services in Paramakudi, Tamil Nadu.',
  keywords: 'construction, building, Paramakudi, Tamil Nadu, residential, commercial, interior design, architecture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
