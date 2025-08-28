import React from 'react';

const GDPR: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">GDPR Commitment</h1>
    <p className="mb-4">
      Dolfyn Brands complies with the General Data Protection Regulation (GDPR) and respects the
      rights of individuals in the European Economic Area. We process personal data to support our
      brand acceleration services and communicate with entrepreneurs.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
    <ul className="list-disc list-inside mb-4 space-y-1">
      <li>Access, update, or delete your personal data.</li>
      <li>Restrict or object to our processing activities.</li>
      <li>Receive a copy of your data in a portable format.</li>
      <li>Withdraw consent for marketing communications at any time.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Legal Basis</h2>
    <p className="mb-4">
      We process data on the basis of legitimate interest in operating our business and with your
      consent when sending marketing messages. We retain information only as long as necessary for
      these purposes.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
    <p>
      To exercise your rights or ask questions about our GDPR practices, contact
      {' '}<a href="mailto:contact@dolfynbrands.com" className="text-blue-600 underline">contact@dolfynbrands.com</a>.
    </p>
  </section>
);

export default GDPR;
