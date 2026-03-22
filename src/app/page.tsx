import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Flag, Trophy, Target } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function LandingPage() {
  const { userId } = await auth();
  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Flag className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">F-OneByOne</span>
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-4">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">Log in</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-red-600 hover:bg-red-700 text-white border-0">Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d4d] to-[#ff0000] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 items-center">
                  Announcing our Next-Gen F1 Analytics.{' '}
                  <Link href="/sign-up" className="font-semibold text-red-500 hover:text-red-400 pl-2">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                The apex of <span className="text-red-600">Formula 1</span> intelligence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Immerse yourself in real-time telemetry, constructor stand-offs, and driver insights. F-OneByOne delivers beautifully designed charts and deep analytical insights for the modern motorsport enthusiast.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 shadow-lg shadow-red-600/30 transition-all hover:scale-105">
                    Start Your Engines
                  </Button>
                </Link>
                <Link href="#features" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                  View Features <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="features" className="py-24 sm:py-32 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-500">Accelerated Insights</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to track the season
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <Card className="bg-zinc-950 border-zinc-800 text-white">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-red-500 mb-4" />
                  <CardTitle>Championship Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Track the constructor championship round-by-round with interactive line charts to see who is dominating the season.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-950 border-zinc-800 text-white">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-red-500 mb-4" />
                  <CardTitle>Race Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Deep dive into individual race results, finishing orders, and points distribution after every grand prix.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-950 border-zinc-800 text-white">
                <CardHeader>
                  <Target className="h-8 w-8 text-red-500 mb-4" />
                  <CardTitle>Driver Standings</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400">
                    Keep your favorite drivers in sight with personalized dashboards and favoriting features.
                  </CardDescription>
                </CardContent>
              </Card>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
