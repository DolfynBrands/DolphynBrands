import React from 'react';

const CookiePolicy: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
    <p className="mb-4">
      Dolfyn Brands uses cookies to make our website work effectively and to understand how it is
      used. Cookies help us deliver a better experience for entrepreneurs exploring our brand
      acceleration services.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Types of Cookies We Use</h2>
    <ul className="list-disc list-inside mb-4 space-y-1">
      <li>Essential cookies that enable core site features.</li>
      <li>Analytics cookies that help us improve performance and content.</li>
      <li>Marketing cookies that support our outreach and ad campaigns.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
    <p>
      You can adjust your browser settings to refuse cookies or use the cookie banner on our site to
      accept or decline non-essential cookies. Disabling cookies may affect site functionality.
    </p>
  </section>
);

export default CookiePolicy;
