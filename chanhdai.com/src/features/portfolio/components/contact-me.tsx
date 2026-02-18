"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

import { CopyButton } from "@/registry/components/copy-button"
import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function ContactMe() {
  // Decode email and phone from base64
  const email = atob(USER.email)
  const phoneNumber = atob(USER.phoneNumber)

  const handleEmailClick = () => {
    toast.success("Opening email client...")
  }

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
    toast.success("Phone number copied to clipboard")
  }

  return (
    <Panel id="contact">
      <PanelHeader>
        <PanelTitle>Contact Me</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="space-y-4">
          <div className="group flex items-start gap-3">
            <Mail className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Email
              </span>
              <a
                href={`mailto:${email}`}
                onClick={handleEmailClick}
                className="font-mono text-sm text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                {email}
              </a>
            </div>
            <div className="opacity-0 transition-opacity group-hover:opacity-100">
              <CopyButton
                className="text-muted-foreground"
                variant="ghost"
                size="icon-xs"
                text={email}
                onCopySuccess={() => toast.success("Email copied to clipboard")}
              />
            </div>
          </div>

          <div className="group flex items-start gap-3">
            <Phone className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Phone
              </span>
              <button
                onClick={handlePhoneCopy}
                className="font-mono text-sm text-left text-foreground underline decoration-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                {phoneNumber}
              </button>
            </div>
            <div className="opacity-0 transition-opacity group-hover:opacity-100">
              <CopyButton
                className="text-muted-foreground"
                variant="ghost"
                size="icon-xs"
                text={phoneNumber}
                onCopySuccess={() => toast.success("Phone number copied to clipboard")}
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Location
              </span>
              <span className="font-mono text-sm text-foreground">
                {USER.address}
              </span>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}
