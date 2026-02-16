import type { Metadata } from "next"

import { ContactForm } from "@/features/portfolio/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaborations, questions, or just to say hi!",
}

export default function ContactPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto md:max-w-3xl">
        <div className="screen-line-before screen-line-after border-x border-edge">
          <div className="screen-line-after px-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              Contact Me
            </h1>
          </div>

          <div className="p-4">
            <ContactForm />
          </div>
        </div>

        <div className="h-8" />
      </div>
    </div>
  )
}
