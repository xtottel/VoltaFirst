import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ExaHeader } from "@/layout/ExaHeader";
import { ExaFooter } from "@/layout/ExaFooter";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
import { CookiesProvider } from "@/context/CookiesContext";
import { CookiesBanner } from "@/components/common/CookiesBanner";
import Script from "next/script";
import { TrackingScripts } from "@/components/common/TrackingScripts";
//import TopBar from "@/layout/Topbar";


const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: 'VoltaFirst – Trusted News from the Volta Region',
    template: '%s | VoltaFirst',
  },
  description:
    'Stay informed with VoltaFirst – the most trusted source for breaking news, politics, business, sports, culture, and lifestyle from Ghana’s Volta Region and beyond.',
  keywords: [
    'Volta Region news',
    'Ghana news today',
    'Breaking news Volta',
    'Volta politics',
    'Volta business',
    'Volta sports',
    'Volta culture',
    'Ewe news',
    'Ghana regional news',
    'African news updates',
    'VoltaFirst',
    'Ghanaian news portal',
  ],
  authors: [{ name: 'VoltaFirst News Team', url: 'https://voltafirst.com' }],
  creator: 'VoltaFirst Media Network',
  publisher: 'VoltaFirst Publishing',
  metadataBase: new URL('https://voltafirst.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-GH': '/',
    },
  },
  openGraph: {
    title: 'VoltaFirst – Trusted News from the Volta Region',
    description:
      'VoltaFirst brings you verified news, in-depth reports, and real-time updates from Ghana’s Volta Region and across Africa.',
    url: 'https://voltafirst.com',
    siteName: 'VoltaFirst',
    images: [
      {
        url: '/images/og-default.jpg', // High-quality 1200x630 OG image
        width: 1200,
        height: 630,
        alt: 'VoltaFirst – Trusted News from the Volta Region',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltaFirst – Trusted News from the Volta Region',
    description:
      'Breaking news, culture, politics, and community updates from Ghana’s Volta Region and beyond.',
    images: ['/images/twitter-card.jpg'], // 1200x675 recommended for Twitter
    creator: '@voltafirst',
    site: '@voltafirst',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  category: 'News',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#111e4f" />
      
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}
      >
        <GoogleTagManager gtmId="G-FLDGHERSB9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="sendexa-theme"
        >
          <AnalyticsProvider>
            <CookiesProvider>
              {/* <TopBar /> */}
              <ExaHeader />
             
              <main id="main-content" className="min-h-screen">
                {children}
              </main>
              <ExaFooter />
              <CookiesBanner />
              <SpeedInsights />
            </CookiesProvider>
          </AnalyticsProvider>
        </ThemeProvider>

        <TrackingScripts />

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLDGHERSB9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLDGHERSB9');
          `}
        </Script>
        
        

        <Script
          src="https://vercel-speed-insights.vercel.app/script.js"
          strategy="afterInteractive"
          // data-vercel-speed-insights="your-vercel-speed-insights-id"
        />
      </body>
    </html>
  );
}
