import { createFileRoute } from '@tanstack/react-router'
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 font-medium">Last updated: July 2026</p>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information that you provide directly to us, such as when you create an account, submit a job application, or communicate with us. This may include your name, email address, phone number, resume data, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our services. Specifically, we use it to match candidates with potential employers, facilitate video interviews, provide customer support, and send important notices about your account or our platform.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Data Sharing and Disclosure</h2>
            <p className="mb-6">
              We may share your information with potential employers if you are a candidate, or with candidates if you are an employer. We do not sell your personal information to third parties. We may also share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Your Privacy Rights</h2>
            <p className="mb-6">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Changes to this Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a notice on our platform prior to the change becoming effective.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us at privacy@hirerapido.com.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
