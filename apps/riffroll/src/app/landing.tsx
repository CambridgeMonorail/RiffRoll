import React from 'react';

export function Landing({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to {title}</h1>
          <p className="text-xl mb-8">Your one-stop solution for all your needs</p>
          <a href="#cta" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Get Started</a>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl mb-8">We offer the best services to help you succeed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Quality</h3>
              <p>We provide top-notch quality in all our services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Reliability</h3>
              <p>Our services are reliable and trustworthy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Support</h3>
              <p>We offer 24/7 support to assist you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join us today and experience the difference.</p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Contact Us</a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p>"This is the best service I have ever used!"</p>
              <p className="mt-4 font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p>"Highly recommend to everyone."</p>
              <p className="mt-4 font-bold">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p>"Exceptional quality and support."</p>
              <p className="mt-4 font-bold">- Bob Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-lg">
              <summary className="font-semibold">What services do you offer?</summary>
              <p>We offer a wide range of services to meet your needs.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-lg">
              <summary className="font-semibold">How can I contact support?</summary>
              <p>You can contact our support team 24/7 via email or phone.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-lg">
              <summary className="font-semibold">What is your pricing?</summary>
              <p>Our pricing is competitive and offers great value for money.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-8">We are here to help you. Reach out to us anytime.</p>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;