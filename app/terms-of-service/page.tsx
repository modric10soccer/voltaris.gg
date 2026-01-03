import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Link from "next/link"
import { FileText } from "lucide-react"
import AnimatedGradientBg from "@/components/animated-gradient-bg"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-dark">
      <SiteHeader />
      <main className="flex-1 pt-20 relative overflow-hidden">
        <AnimatedGradientBg />
        <div className="py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-voltaris-red/20 px-4 py-2 text-sm font-medium text-voltaris-red border border-voltaris-red/30">
                <FileText className="h-4 w-4" />
                Terms of Service
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Terms of Service
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Please read our terms and conditions carefully before using our services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Welcome to voltaris.gg. By accessing or using our website and services, you agree to be bound by these
                  Terms of Service. Please read them carefully.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">1.</span> Acceptance of Terms
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  By accessing and using Voltaris.gg, you accept and agree to be bound by the terms and provisions of
                  this agreement. If you do not agree to these terms, please do not use our services.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms of Service apply to all users of the site, including without limitation users who are
                  browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">2.</span> No Refunds Policy
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  All sales are final. Due to the nature of digital goods and services, we do not offer refunds once a
                  purchase has been completed and the product key or access has been delivered. Please ensure you have
                  selected the correct product and duration before finalizing your purchase.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  In exceptional circumstances, any potential resolution will be at the sole discretion of Voltaris
                  management. Requests for refunds must be submitted within 24 hours of purchase through our official
                  Discord support channel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">3.</span> Chargeback Policy
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  <strong className="text-foreground">
                    Chargebacks are strictly prohibited and will result in immediate and permanent consequences.
                  </strong>{" "}
                  By making a purchase on Voltaris.gg, you acknowledge and agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed text-muted-foreground">
                  <li>
                    Filing a chargeback or payment dispute without first contacting our support team is considered fraud
                    and theft of services.
                  </li>
                  <li>
                    Any account associated with a chargeback will be immediately and permanently banned from all
                    Voltaris services.
                  </li>
                  <li>
                    Your HWID (Hardware ID), email address, and payment information will be permanently blacklisted from
                    making future purchases.
                  </li>
                  <li>All active subscriptions and product access will be immediately revoked without refund.</li>
                  <li>
                    Chargeback fees incurred by Voltaris (typically $15-25 per chargeback) will be added to your account
                    balance as a debt.
                  </li>
                  <li>
                    We reserve the right to pursue legal action and report fraudulent chargebacks to the appropriate
                    authorities.
                  </li>
                  <li>
                    Information about fraudulent chargebacks may be shared with other service providers to prevent
                    further abuse.
                  </li>
                </ul>
                <p className="leading-relaxed mt-3 text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> If you have any issues with your purchase,
                  product functionality, or billing, please contact our support team on Discord immediately. We are
                  committed to resolving legitimate concerns, but chargebacks bypass our ability to help you and will be
                  treated as fraudulent activity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">4.</span> Software Disclaimer
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  Voltaris acts solely as a reseller of digital products. We do not develop, create, or maintain any of
                  the software or digital goods offered on this website. All products are provided by third-party
                  developers.
                </p>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  We are not responsible for the functionality, compatibility, performance, detection status, or any
                  issues arising from the use of third-party software. Any support or troubleshooting related to the
                  software itself should be directed to the respective software developer through our Discord support
                  channels.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">No Warranty:</strong> All products are provided "as is" without
                  any warranty of any kind, either expressed or implied, including but not limited to warranties of
                  merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">5.</span> User Conduct and Prohibited Activities
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  You agree to use our services responsibly and in compliance with all applicable laws. You are
                  prohibited from using our services for any illegal or unauthorized purpose. Prohibited activities
                  include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed text-muted-foreground">
                  <li>Sharing, reselling, or distributing purchased products or account access to third parties.</li>
                  <li>
                    Attempting to reverse engineer, decompile, or modify any software purchased through our platform.
                  </li>
                  <li>Using our services to harass, abuse, or harm other users or third parties.</li>
                  <li>Attempting to gain unauthorized access to our systems, servers, or databases.</li>
                  <li>Using automated systems or bots to access our services without permission.</li>
                  <li>Providing false or misleading information during registration or purchase.</li>
                  <li>Engaging in any activity that could damage, disable, or impair our services.</li>
                </ul>
                <p className="leading-relaxed mt-3 text-muted-foreground">
                  Violation of these terms may result in immediate account termination and permanent ban from our
                  services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">6.</span> Account Responsibility and Security
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account information, including your
                  password and payment details, and for all activities that occur under your account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed text-muted-foreground">
                  <li>
                    Immediately notify us of any unauthorized use of your account or any other breach of security.
                  </li>
                  <li>Ensure that you log out from your account at the end of each session.</li>
                  <li>Use a strong, unique password for your account.</li>
                  <li>Not share your account credentials with anyone else.</li>
                </ul>
                <p className="leading-relaxed mt-3 text-muted-foreground">
                  Voltaris will not be liable for any loss or damage arising from your failure to comply with these
                  security obligations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">7.</span> Product Delivery and Access
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  Upon successful payment, you will receive access to your purchased product through our designated
                  delivery method (typically via Discord or email). Delivery times may vary but are usually instant to
                  within 24 hours.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  It is your responsibility to provide accurate contact information and to check your email/Discord for
                  product delivery. We are not responsible for delays caused by incorrect information provided by the
                  customer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">8.</span> Subscription Terms
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  For subscription-based products, your subscription will automatically renew at the end of each billing
                  period unless cancelled before the renewal date. You are responsible for cancelling your subscription
                  if you no longer wish to continue.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Subscription cancellations must be made at least 24 hours before the next billing cycle to avoid being
                  charged for the next period. No refunds will be provided for partial subscription periods.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">9.</span> Limitation of Liability
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  To the maximum extent permitted by law, Voltaris shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed text-muted-foreground">
                  <li>Your use or inability to use our services or products.</li>
                  <li>
                    Any unauthorized access to or use of our servers and/or any personal information stored therein.
                  </li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted to or through our services.</li>
                  <li>
                    Any errors or omissions in any content or for any loss or damage incurred as a result of the use of
                    any content posted, emailed, transmitted, or otherwise made available through the services.
                  </li>
                  <li>The defamatory, offensive, or illegal conduct of any third party.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">10.</span> Intellectual Property Rights
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  All content on Voltaris.gg, including but not limited to text, graphics, logos, images, and software,
                  is the property of Voltaris or its content suppliers and is protected by international copyright laws.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit
                  any of our content without our express written permission.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">11.</span> Termination
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  We reserve the right to terminate or suspend your account and access to our services immediately,
                  without prior notice or liability, for any reason, including but not limited to breach of these Terms
                  of Service.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Upon termination, your right to use the services will immediately cease. All provisions of the Terms
                  which by their nature should survive termination shall survive, including ownership provisions,
                  warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">12.</span> Changes to Terms
                </h2>
                <p className="leading-relaxed mb-3 text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any
                  material changes by posting the new Terms of Service on this page and updating the "Last Updated"
                  date.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
                  It is your responsibility to review these Terms periodically for updates.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">13.</span> Governing Law
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  These Terms of Service shall be governed by and construed in accordance with applicable international
                  laws. Any disputes arising from these terms or your use of our services shall be resolved through
                  binding arbitration.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-voltaris-red">14.</span> Contact Information
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  For any questions, concerns, or support requests regarding these Terms of Service or our services,
                  please contact us through our official Discord server. Our support team is available to assist you
                  with any issues or inquiries.
                </p>
              </div>

              <div className="pt-6 border-t border-voltaris-red/30">
                <p className="text-sm text-center text-muted-foreground mb-3">Last Updated: January 2025</p>
                <p className="text-center text-muted-foreground">
                  If you have any questions regarding these terms, please{" "}
                  <Link
                    href="https://discord.gg/voltaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltaris-red hover:underline font-semibold"
                  >
                    contact our support team on Discord
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
