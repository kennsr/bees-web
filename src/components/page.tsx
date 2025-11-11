import { DETAIL_PDF_LINK } from "@/constants/links.const";
import ClassSection from "./sections/SectionClasses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Home = () => {
  return (
    <div className="flex h-full min-h-[100dvh] w-full flex-col items-center justify-start gap-12 px-4 sm:px-8 md:px-12">
      {/* HERO SECTION */}
      <main
        id="home"
        className="relative mb-24 flex h-[60dvh] w-full max-w-screen-xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fed63c] via-[#ffd700] to-[#fed63c]"
      >
        {/* Decorative background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 h-32 w-32 animate-pulse rounded-full bg-[#2259a2]/20"></div>
          <div className="absolute top-20 right-20 h-24 w-24 animate-bounce rounded-full bg-[var(--foreground)]/20"></div>
          <div className="absolute bottom-20 left-20 h-28 w-28 rounded-full bg-white/30"></div>
          <div className="absolute right-10 bottom-10 h-20 w-20 animate-pulse rounded-full bg-[#2259a2]/30"></div>
          <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>
        </div>
        {/* Bold text - Instagram style with perfect visibility */}
        {/* Bold text - Instagram style with perfect visibility */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 -rotate-2 transform text-4xl font-black text-gray-800 drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-[var(--foreground)]">BEES</span>
            <span className="mt-2 block rotate-1 transform text-[#2259a2]">
              EDUCATION
            </span>
          </h1>

          <div className="mx-auto mb-6 max-w-xs rotate-1 transform rounded-2xl border-4 border-gray-800 bg-white/95 p-4 shadow-2xl backdrop-blur-sm sm:mb-8 sm:max-w-2xl sm:p-6">
            <p className="text-lg font-black text-gray-800 sm:text-xl md:text-2xl">
              Learning isn&apos;t a chore,
              <span className="mt-1 block text-[var(--foreground)]">
                it&apos;s a LIFESTYLE!
              </span>
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-3">
              <span className="rounded-full bg-[#2259a2] px-3 py-1 text-xs font-bold text-white sm:px-4 sm:py-2 sm:text-sm">
                ✨ FUN
              </span>
              <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-xs font-bold text-white sm:px-4 sm:py-2 sm:text-sm">
                🚀 EFFECTIVE
              </span>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-bold text-white sm:px-4 sm:py-2 sm:text-sm">
                💪 FLEXIBLE
              </span>
            </div>
          </div>

          {/* CTA Button - Responsive positioning */}
          <div className="mt-4">
            <a
              className="inline-block transform rounded-2xl border-4 border-gray-800 bg-[var(--foreground)] px-6 py-3 text-lg font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 sm:px-10 sm:py-4 sm:text-xl"
              target="_blank"
              href={DETAIL_PDF_LINK}
            >
              GET READY! 🚀
            </a>
          </div>
        </div>
        {/* Enhanced decorative elements */}
        <div className="absolute top-6 right-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#2259a2] text-2xl opacity-80">
          🐝
        </div>
        <div className="absolute bottom-6 left-6 flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-[var(--foreground)] text-lg opacity-80">
          📚
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section
        className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-8"
        id="about"
      >
        <div className="relative text-center">
          <div className="absolute -top-4 -left-4 h-8 w-8 animate-pulse rounded-full bg-[#fed63c]"></div>
          <h2 className="mb-4 -rotate-1 transform text-4xl font-black sm:text-5xl">
            <span className="text-[var(--foreground)]">ABOUT</span>
            <span className="ml-2 inline-block rotate-2 transform text-[#2259a2]">
              US
            </span>
          </h2>
          <div className="mx-auto h-2 w-32 rotate-1 transform rounded-full bg-gradient-to-r from-[var(--foreground)] via-[#fed63c] to-[#2259a2]"></div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          {/* Enhanced Content Card - Instagram Style */}
          <Card className="hover:shadow-3xl relative -rotate-1 transform overflow-hidden border-4 border-white bg-gradient-to-br from-[var(--foreground)] via-[#ff8533] to-[var(--foreground)] text-white shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-0">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-[#fed63c]/20"></div>
            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-[#2259a2]/20"></div>
            <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"></div>

            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="mb-4 rotate-1 transform text-4xl font-black md:text-5xl">
                  🐝 <span className="text-[#fed63c]">LEARNING</span>
                  <span className="mt-2 block -rotate-2 transform">
                    COMMUNITY
                  </span>
                </h3>
                <div className="inline-block rotate-1 transform rounded-2xl bg-white/20 px-6 py-3 backdrop-blur-sm">
                  <p className="text-lg font-bold text-white/95 md:text-xl">
                    Where education meets excitement!
                  </p>
                </div>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                {/* Main Content */}
                <div className="space-y-6">
                  <div className="-rotate-1 transform rounded-2xl bg-white/15 p-6 backdrop-blur-sm">
                    <p className="text-lg leading-relaxed font-medium">
                      Bees is not just a tutoring place, but a{" "}
                      <span className="text-xl font-black text-[#fed63c]">
                        fun and exciting learning community!
                      </span>
                    </p>
                  </div>

                  <div className="rotate-1 transform rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                    <p className="text-base leading-relaxed">
                      We present a{" "}
                      <span className="font-bold text-[#fed63c]">
                        flexible and interactive
                      </span>{" "}
                      learning experience without the limitations of a boring
                      classroom.
                    </p>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="space-y-4">
                  <div className="flex rotate-1 transform items-center gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm transition-transform duration-300 hover:rotate-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fed63c] text-2xl">
                      🌍
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">New Language?</h4>
                      <p className="text-sm opacity-90">
                        Master English with confidence
                      </p>
                    </div>
                  </div>

                  <div className="flex -rotate-1 transform items-center gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm transition-transform duration-300 hover:rotate-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2259a2] text-2xl">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Test Prep?</h4>
                      <p className="text-sm opacity-90">
                        TOEFL & IELTS excellence
                      </p>
                    </div>
                  </div>

                  <div className="flex rotate-1 transform items-center gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm transition-transform duration-300 hover:rotate-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fed63c] text-2xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Quick Learning?</h4>
                      <p className="text-sm opacity-90">
                        Accelerated programs available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-10 text-center">
                <div className="inline-block -rotate-2 transform rounded-2xl bg-[#fed63c] px-8 py-4 text-xl font-black text-gray-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0">
                  Learn it at BEES! 🚀
                </div>
                <p className="mt-4 font-medium text-white/80">
                  Join our buzzing community of learners today!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section
        className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-8"
        id="advantages"
      >
        <div className="relative text-center">
          <div className="absolute -top-6 -right-6 h-12 w-12 animate-bounce rounded-full bg-[#2259a2] opacity-80"></div>
          <h2 className="mb-4 rotate-1 transform text-4xl font-black sm:text-5xl">
            <span className="text-[#2259a2]">WHY CHOOSE</span>
            <span className="mt-2 block -rotate-2 transform text-[var(--foreground)]">
              BEES?
            </span>
          </h2>
          <div className="mx-auto h-2 w-40 -rotate-1 transform rounded-full bg-gradient-to-r from-[#2259a2] via-[#fed63c] to-[var(--foreground)]"></div>
          <p className="mt-6 inline-block rounded-full bg-[#fed63c]/20 px-6 py-2 text-xl font-bold text-gray-700">
            Discover what makes us different! ✨
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Flexible Card */}
          <Card className="group relative rotate-1 transform overflow-hidden border-4 border-white bg-gradient-to-br from-[#2259a2] to-[#1e4d8f] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
            <div className="absolute top-0 right-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#fed63c]/30"></div>
            <CardHeader className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white/20 text-4xl backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12">
                🕐
              </div>
              <CardTitle className="-rotate-1 transform text-2xl font-black sm:text-3xl">
                FLEXIBLE
              </CardTitle>
              <CardDescription className="font-bold text-white/90">
                Learn at your own pace
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 text-center">
              <div className="mb-4 rounded-xl bg-white/20 p-4 backdrop-blur-sm">
                <p className="text-sm leading-relaxed font-medium">
                  Choose when, where, and how you learn. Our flexible scheduling
                  adapts to your lifestyle!
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <span className="rounded-full bg-[#fed63c] px-4 py-2 text-sm font-black text-gray-800">
                  ONLINE
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#2259a2]">
                  OFFLINE
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Card */}
          <Card className="group relative -rotate-1 transform overflow-hidden border-4 border-white bg-gradient-to-br from-[#fed63c] to-[#f5c842] text-gray-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-[#2259a2]/30"></div>
            <CardHeader className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-gray-800 bg-white/30 text-4xl backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12">
                🎮
              </div>
              <CardTitle className="rotate-1 transform text-2xl font-black sm:text-3xl">
                INTERACTIVE
              </CardTitle>
              <CardDescription className="font-bold text-gray-800/90">
                Engaging learning experience
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 text-center">
              <div className="mb-4 rounded-xl bg-white/40 p-4 backdrop-blur-sm">
                <p className="text-sm leading-relaxed font-medium">
                  Dynamic lessons with games, discussions, and real-world
                  practice. Learning becomes fun!
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <span className="rounded-full bg-[#2259a2] px-4 py-2 text-sm font-black text-white">
                  GAMES
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-gray-800">
                  PRACTICE
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Affordable Card */}
          <Card className="group relative rotate-2 transform overflow-hidden border-4 border-white bg-gradient-to-br from-[var(--foreground)] to-[#ff8533] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-0 hover:shadow-2xl">
            <div className="absolute top-0 left-0 h-16 w-16 -translate-x-8 -translate-y-8 rounded-full bg-[#fed63c]/40"></div>
            <CardHeader className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white/20 text-4xl backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12">
                💰
              </div>
              <CardTitle className="-rotate-2 transform text-2xl font-black sm:text-3xl">
                AFFORDABLE
              </CardTitle>
              <CardDescription className="font-bold text-white/90">
                Quality education for everyone
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 text-center">
              <div className="mb-4 rounded-xl bg-white/20 p-4 backdrop-blur-sm">
                <p className="text-sm leading-relaxed font-medium">
                  Premium education without premium prices. Quality learning
                  should be accessible to all!
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <span className="rounded-full bg-[#fed63c] px-4 py-2 text-sm font-black text-gray-800">
                  VALUE
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-[var(--foreground)]">
                  QUALITY
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Additional Benefits Section */}
        <div className="mt-12 w-full">
          <div className="relative mb-8 text-center">
            <div className="absolute -top-8 -left-8 h-10 w-10 animate-pulse rounded-full bg-[#fed63c]"></div>
            <div className="absolute -top-4 -right-4 h-6 w-6 animate-bounce rounded-full bg-[#2259a2]"></div>
            <h3 className="mb-4 rotate-1 transform text-3xl font-black sm:text-4xl">
              <span className="text-[var(--foreground)]">PLUS,</span>
              <span className="mt-2 block -rotate-2 transform text-[#2259a2]">
                YOU GET:
              </span>
            </h3>
            <div className="mx-auto h-3 w-24 rotate-2 transform rounded-full bg-gradient-to-r from-[var(--foreground)] via-[#fed63c] to-[#2259a2]"></div>
            <p className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#fed63c]/30 to-[#2259a2]/20 px-8 py-3 text-xl font-bold text-gray-700">
              Everything you need for SUCCESS! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 100+ Materials */}
            <Card className="group transform border-2 transition-all duration-300 hover:scale-105 hover:border-[#2259a2] hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
                    color: "#2259a2",
                  }}
                >
                  📚
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-800">
                  100+ Materials
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Comprehensive PDF resources, grammar guides, and practice
                  exercises
                </p>
                <div
                  className="mt-3 rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: "#2259a2" }}
                >
                  Lifetime Access
                </div>
              </CardContent>
            </Card>

            {/* 24/7 Support */}
            <Card className="group transform border-2 transition-all duration-300 hover:scale-105 hover:border-[#2259a2] hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
                    color: "#2259a2",
                  }}
                >
                  💬
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-800">
                  24/7 Support
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Round-the-clock assistance via chat for all your learning
                  needs
                </p>
                <div
                  className="mt-3 rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: "#2259a2" }}
                >
                  Always Available
                </div>
              </CardContent>
            </Card>

            {/* Expert Tutors */}
            <Card className="group transform border-2 transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  🏆
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-800">
                  Expert Tutors
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Experienced educators with 3+ years of proven teaching
                  excellence
                </p>
                <div className="mt-3 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                  3+ Years Experience
                </div>
              </CardContent>
            </Card>

            {/* Proven Results */}
            <Card className="group transform border-2 transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  🎯
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-800">
                  Proven Results
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Track record of student success with measurable improvements
                </p>
                <div className="mt-3 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                  Success Guaranteed
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call-to-action Banner */}
          <div className="mt-8">
            <Card className="relative overflow-hidden border-2 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--foreground)]/90 text-[var(--background)]">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <CardContent className="relative z-10 py-8">
                <div className="text-center">
                  <h4 className="mb-3 text-xl font-bold sm:text-2xl">
                    🚀 Ready to Transform Your Learning Journey?
                  </h4>
                  <p className="mb-4 text-sm opacity-90 sm:text-base">
                    Join hundreds of students who&apos;ve achieved their goals
                    with Bees Education
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="text-sm">No Hidden Fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="text-sm">Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="text-sm">Start Anytime</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CLASS SECTION */}
      <ClassSection />
    </div>
  );
};
