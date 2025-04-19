import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-12 py-8 bg-gray-200">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 text-black">
            <Image
              src="/images/lamech-logo.png"
              alt="Lamech logo small"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="font-light text-3xl">Lamech</span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-12 text-lg text-gray-600">
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] -mb-20">
          <Image 
            src="/images/lamech-logo.png" 
            alt="Lamech logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-[15rem] font-light tracking-tight">Lamech</h1>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <h2 className="text-[4.5rem] font-light tracking-wider text-center mb-32">SERVICES</h2>
        <div className="w-full">
          <div className="flex">
            <div className="w-1/2 bg-gray-100">
              <Image
                src="/images/service-it.jpg"
                alt="Dashboard service"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2 bg-gray-100">
              <Image
                src="/images/service-beautysalon.jpg"
                alt="Wellness service"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex mt-32">
            <div className="w-1/2 flex justify-start px-16 md:px-32">
              <div className="w-96">
                <div className="border-t border-gray-300 w-full mb-8"></div>
                <p className="text-xl">アプリ開発/システム開発</p>
                <p className="text-xl">ITコンサル/DX支援</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-end px-16 md:px-32">
              <div className="w-96">
                <div className="border-t border-gray-300 w-full mb-8"></div>
                <p className="text-xl">美容機器販売</p>
                <p className="text-xl">治療機器販売</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black text-white py-20 px-16 flex items-center justify-center">
          <h2 className="text-[4.5rem] font-light tracking-wider">ABOUT</h2>
        </div>
        <div className="w-full md:w-1/2 bg-gray-500 text-white py-20 px-16">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-[150px_1fr] gap-y-8 text-xl">
              <div className="text-gray-300">会社名</div>
              <div>株式会社Lamech</div>

              <div className="text-gray-300">代表者</div>
              <div>代表取締役 清水 翼</div>

              <div className="text-gray-300">事業内容</div>
              <div>
                <p>アプリ開発</p>
                <p>システム開発</p>
                <p>ITコンサル</p>
                <p>DX支援</p>
                <p>美容機器販売</p>
                <p>治療機器販売</p>
              </div>

              <div className="text-gray-300">所在地</div>
              <div>
                <p>奈良県橿原市上品寺町81-16-201</p>
              </div>

              <div className="text-gray-300">Email</div>
              <div>info@lamech.jp</div>

              <div className="text-gray-300">TEL</div>
              <div>070-9187-3180</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="mb-8 font-normal text-4xl">Contact</h3>
            <p className="text-xl mb-16">こちらからお問い合わせください。</p>
            <div className="mt-auto pt-32">
              <Link href="#" className="inline-flex items-center text-xl">
                <ArrowUp className="w-8 h-8 mr-2" />
                Back to Top
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-8 font-normal text-4xl">Contact Us</h3>
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 text-xl border border-gray-300 bg-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-4 text-xl border border-gray-300 bg-transparent" 
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full p-4 text-xl border border-gray-300 bg-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-4 text-xl border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center text-xs">
        <p>© 2023 株式会社Lamech</p>
      </footer>
    </main>
  )
}
