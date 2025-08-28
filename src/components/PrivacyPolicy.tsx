import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      Dolfyn Brands is a full-stack accelerator helping consumer brands scale globally through
      AI-powered strategy and creative execution. We respect your privacy and are committed to
      protecting personal information that you share with us.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
    <p className="mb-4">
      We may collect contact details, communications, and usage data when you interact with our
      website or request information about our services. This helps us respond to inquiries and
      improve our offerings.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
    <p className="mb-4">
      Information is used to deliver and enhance our brand acceleration services, provide marketing
      insights, and maintain the security of our platform. We may also send updates or resources
      related to growing your brand.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
    <p className="mb-4">
      We do not sell personal data. We may share information with trusted service providers who
      support our analytics, hosting, or communication tools, and only as necessary to operate our
      business or comply with legal obligations.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
    <p>
      For questions about this policy or your data, please contact us at
      {' '}<a href="mailto:contact@dolfynbrands.com" className="text-blue-600 underline">contact@dolfynbrands.com</a>.
    </p>
  </section>
);

export default PrivacyPolicy;
