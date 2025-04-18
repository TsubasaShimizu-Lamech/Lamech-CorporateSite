import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-100">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1 text-black">
            <Image
              src="/images/lamech-logo.png"
              alt="Lamech logo small"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="font-medium">Lamech</span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 text-sm text-gray-600">
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
      <section className="flex flex-col items-center justify-center py-24">
        <div className="w-24 h-24 mb-4">
          <Image src="/images/lamech-logo.png" alt="Lamech logo" width={100} height={100} className="w-full h-full" />
        </div>
        <h1 className="text-7xl font-normal tracking-tight">Lamech</h1>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <h2 className="text-center text-2xl font-normal mb-16">SERVICES</h2>
        <div className="w-full">
          <div className="flex">
            <div className="w-1/2">
              <Image
                src="/images/service-it.jpg"
                alt="Dashboard service"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/service-beautysalon.jpg"
                alt="Wellness service"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
          <div className="flex mt-16">
            <div className="w-1/2 flex justify-start px-8 md:px-16">
              <div className="w-64">
                <div className="border-t border-gray-300 w-full mb-4"></div>
                <p className="text-sm">アプリ開発とシステム開発</p>
                <p className="text-sm">パソコンサイトとスマホ対応</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-end px-8 md:px-16">
              <div className="w-64 text-right">
                <div className="border-t border-gray-300 w-full mb-4"></div>
                <p className="text-sm">美容関連事業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black text-white py-16 px-8 flex items-center justify-center">
          <h2 className="text-2xl font-normal">ABOUT</h2>
        </div>
        <div className="w-full md:w-1/2 bg-gray-500 text-white py-16 px-8">
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-[100px_1fr] gap-y-4 text-sm">
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
      <section id="contact" className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 font-normal">Contact</h3>
            <p className="text-sm mb-8">こちらからお問い合わせください。</p>
            <div className="mt-auto pt-16">
              <Link href="#" className="inline-flex items-center text-sm">
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to Top
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-normal">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 bg-transparent"
                />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 bg-transparent" />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 bg-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 border border-gray-300 hover:bg-gray-200 transition-colors"
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
