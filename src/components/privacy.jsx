import React from 'react';
import Footer from './footer';
import './privacy.scss';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated 4th July, 2024</p>
      <div className="policy-content">
        {`1. INTRODUCTION

DishPatch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Platform"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Platform.

2. INFORMATION WE COLLECT

We collect information from and about users of our Platform in a variety of ways. This information includes:

2.1 Personal Information You Provide to Us:

a) Customers:
   - Email address
   - Phone number
   - Bank account number
   - Delivery addresses

b) Vendors:
   - Email address
   - Phone number
   - Restaurant details (name, address, cuisine type)
   - Bank account information
   - Video call verification data

[Continue with the rest of your privacy policy content...]`}
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;