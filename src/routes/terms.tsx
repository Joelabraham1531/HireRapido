import { createFileRoute } from '@tanstack/react-router'
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute('/terms')({
  component: TermsOfService,
})

function TermsOfService() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 font-medium">Last updated: July 2026</p>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to HireRapido. These Terms of Service ("Terms") govern your access to and use of the HireRapido website, services, and applications. By accessing or using our platform, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Description of Services</h2>
            <p className="mb-6">
              HireRapido provides a platform connecting US-based companies with highly skilled talent in Latin America. Our services include an AI-driven matching system, video vetting capabilities, and shortlisting dashboards.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. User Responsibilities</h2>
            <p className="mb-6">
              As a user of our platform, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Intellectual Property</h2>
            <p className="mb-6">
              All content, features, and functionality on the HireRapido platform, including but not limited to text, graphics, logos, and software, are the exclusive property of HireRapido and are protected by international copyright and intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              HireRapido shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of the platform.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of any significant changes. Your continued use of the platform after such modifications constitutes your acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at support@hirerapido.com.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
