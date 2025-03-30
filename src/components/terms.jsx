import React from 'react';
import Footer from './footer';
import './terms.scss';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        {`1. INTRODUCTION

1.1 Welcome to DishPatch ("we," "us," or "our"), a food delivery marketplace operating in Enugu, Nigeria. These Terms and Conditions ("Terms") govern your use of our website, mobile application, and services (collectively, the "Platform").

1.2 By accessing or using our Platform, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Platform.

2. DEFINITIONS

2.1 "Customer" refers to any individual or entity that places an order through the Platform.

2.2 "Vendor" refers to any restaurant or food service provider that offers meals through the Platform.

2.3 "Delivery Personnel" refers to individuals or companies that provide delivery services through the Platform.

2.4 "User" refers to any Customer, Vendor, or Delivery Personnel using the Platform.

3. ELIGIBILITY AND ACCOUNT REGISTRATION

3.1 Age Requirement: You must be at least 18 years old to use the Platform.

3.2 Account Creation:
   a) Customers must provide a valid email address and phone number.
   b) Vendors must provide email, phone number, restaurant details, and bank account information. They must also complete a video call verification process.
   c) Individual Delivery Personnel must provide email, phone number, next of kin details, bank information, driver's licence, and a personal photograph.
   d) Delivery Companies must provide coverage areas, company information, driver's licence of the registrant, CAC company registration, email, and bank details.

3.3 Account Responsibility: You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.

[Continue with the rest of your terms...]`}
      </p>
      <Footer />
    </div>
  );
};

export default Terms;