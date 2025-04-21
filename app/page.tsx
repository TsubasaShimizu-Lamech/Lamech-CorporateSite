"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { useState, FormEvent } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf4tPkoi90mb_1HWLANxwpmENVPq_EmrTt1SlW5MO2ToC9a7A/formResponse'
    const form = new FormData()
    form.append('entry.440491378', formData.name)
    form.append('entry.2023816419', formData.email)
    form.append('entry.589339108', formData.message)

    try {
      // CORS制約を回避するためにno-corsモードを使用
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: form
      })

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  // 環境に応じてベースパスを設定
  const basePath = process.env.NODE_ENV === 'production' ? '/Lamech-CorporateSite' : ''
  const imagePath = (path: string) => `${basePath}${path}`

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 md:py-8 bg-gray-200">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href={basePath || '/'} className="flex items-center gap-3 text-black">
            <Image
              src={imagePath('/images/lamech-logo.png')}
              alt="Lamech logo small"
              width={48}
              height={48}
              className="h-8 md:h-12 w-auto"
            />
            <span className="font-light text-2xl md:text-3xl">Lamech</span>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 md:gap-12 text-base md:text-lg text-gray-600">
            <li>
              <Link href={`${basePath}/#services`}>Services</Link>
            </li>
            <li>
              <Link href={`${basePath}/#about`}>About</Link>
            </li>
            <li>
              <Link href={`${basePath}/#contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen px-4 md:px-0">
        <div className="relative w-[20vw] md:w-[30vw] h-[35vw] md:h-[30vw] max-w-[300px] max-h-[300px] -mb-4 md:-mb-20">
          <Image 
            src={imagePath('/images/lamech-logo.png')}
            alt="Lamech logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-[15vw] md:text-[15rem] font-light tracking-tight">Lamech</h1>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 px-4 md:px-0">
        <h2 className="text-[3rem] md:text-[4.5rem] font-light tracking-wider text-center mb-16 md:mb-32">SERVICES</h2>
        <div className="w-full">
          {/* PC表示用 */}
          <div className="hidden md:flex">
            <div className="w-1/2 bg-gray-100">
              <Image
                src={imagePath('/images/service-it.jpg')}
                alt="Dashboard service"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2 bg-gray-100">
              <Image
                src={imagePath('/images/service-beautysalon.jpg')}
                alt="Wellness service"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="hidden md:flex mt-32">
            <div className="w-1/2 flex justify-start px-32">
              <div className="w-96">
                <div className="border-t border-gray-300 w-full mb-8"></div>
                <p className="text-xl">アプリ開発/システム開発</p>
                <p className="text-xl">ITコンサル/DX支援</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-end px-32">
              <div className="w-96">
                <div className="border-t border-gray-300 w-full mb-8"></div>
                <p className="text-xl">美容機器販売</p>
                <p className="text-xl">治療機器販売</p>
              </div>
            </div>
          </div>

          {/* スマホ表示用 */}
          <div className="md:hidden space-y-16">
            <div>
              <div className="w-full bg-gray-100">
                <Image
                  src={imagePath('/images/service-it.jpg')}
                  alt="Dashboard service"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-8 px-8">
                <div className="border-t border-gray-300 w-full mb-4 md:mb-8"></div>
                <p className="text-lg">アプリ開発/システム開発</p>
                <p className="text-lg">ITコンサル/DX支援</p>
              </div>
            </div>

            <div>
              <div className="w-full bg-gray-100">
                <Image
                  src={imagePath('/images/service-beautysalon.jpg')}
                  alt="Wellness service"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-8 px-8">
                <div className="border-t border-gray-300 w-full mb-4 md:mb-8"></div>
                <p className="text-lg">美容機器販売</p>
                <p className="text-lg">治療機器販売</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black text-white py-12 md:py-20 px-8 md:px-16 flex items-center justify-center">
          <h2 className="text-[3rem] md:text-[4.5rem] font-light tracking-wider">ABOUT</h2>
        </div>
        <div className="w-full md:w-1/2 bg-gray-500 text-white py-12 md:py-20 px-8 md:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-y-6 md:gap-y-8 text-base md:text-xl">
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
      <section id="contact" className="py-16 md:py-32 px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="mb-6 md:mb-8 font-normal text-3xl md:text-4xl">Contact</h3>
            <p className="text-lg md:text-xl mb-8 md:mb-16">こちらからお問い合わせください。</p>
            <div className="mt-auto pt-16 md:pt-32">
              <Link href={`${basePath}/#`} className="inline-flex items-center text-lg md:text-xl">
                <ArrowUp className="w-6 h-6 md:w-8 md:h-8 mr-2" />
                Back to Top
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 md:mb-8 font-normal text-3xl md:text-4xl">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 md:p-4 text-lg md:text-xl border border-gray-300 bg-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 md:p-4 text-lg md:text-xl border border-gray-300 bg-transparent" 
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-3 md:p-4 text-lg md:text-xl border border-gray-300 bg-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 md:py-4 text-lg md:text-xl border border-gray-300 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? '送信中...' : 'Submit'}
                </button>
                {status === 'success' && (
                  <p className="mt-4 text-green-600 whitespace-pre-line">
                    お問い合わせ頂きありがとうございます。{'\n'}担当者よりご連絡いたしますので、しばらくお待ちください。
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600">
                    送信に失敗しました。もう一度お試しください。
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 md:py-4 bg-gray-800 text-white text-center text-xs">
        <p>© 2023 株式会社Lamech</p>
      </footer>
    </main>
  )
}
