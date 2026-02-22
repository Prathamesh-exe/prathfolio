"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json() as { error?: string }

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="font-mono text-sm text-muted-foreground">
            Feel free to reach out for collaborations, questions, or just to say
            hi!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Email
              </span>
              <a
                href="mailto:prathameshmedage7@gmail.com"
                className="font-mono text-sm text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                prathameshmedage7@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Phone
              </span>
              <a
                href="tel:+917972254365"
                className="font-mono text-sm text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                +91 7972254365
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Location
              </span>
              <span className="font-mono text-sm text-foreground">
                Pune, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-edge bg-background px-3 py-2 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-edge bg-background px-3 py-2 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-edge bg-background px-3 py-2 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-md border border-edge bg-background px-3 py-2 font-mono text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-edge bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="size-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
