import React, { useState } from "react";
import "./question.scss";

const faqs = [
    {

        question: "How do I place an order?",
    
        answer:
    
          "You can browse restaurants and menus in the app. Add items to your cart and check out to place an order. You'll be able to track the status of your order in the app.",
    
      },
    
      {
    
        question: "How do I pay for my order?",
    
        answer:
    
          "You can pay seamlessly and securely within the app using credit cards, debit cards, or digital wallets like Apple Pay or Google Pay.",
    
      },
    
      {
    
        question: "How do I give feedback about an order?",
    
        answer:
    
          "In your order history, you can rate and leave feedback for each past order. This helps us improve restaurant offerings and delivery services.",
    
      },
    
      {
    
        question: "How does the refer and earn work?",
    
        answer:
    
          "You can refer your family and friends and earn rewards when they complete 10 orders. Go to your profile, click on 'Refer and Earn,' copy your code, and share it with your friends. You can also track your referrals' order status.",
    
      },
    
      {
    
        question: "Can I pay with cash?",
    
        answer:
    
          "You can pay with cash if the restaurant accepts cash on delivery. Otherwise, you'll need to pay via wallet, referral earnings, or bank transfer.",
    
      },
    
      {
    
        question: "How do I track my order status?",
    
        answer:
    
          "In the app, you can view real-time delivery status updates, including confirmed orders, meal preparation, rider assignment, on-the-way updates, and delivered status. Estimated delivery times are also shown.",
    
      },
    
      {
    
        question: "What if I need to edit or cancel my order?",
    
        answer:
    
          "Once payment is processed, you CANNOT edit or cancel your order. You must contact customer service or the restaurant directly for any change requests.",
    
      },
    
      {
    
        question: "What if there is an issue with my food or delivery?",
    
        answer:
    
          "Report any issues such as incorrect or damaged items, delivery problems, etc., within 48 hours. Customer support can provide credits, refunds, or reorder the food for verified cases.",
    
      },
    
    ];


const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="question">
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about Dishpatch</p>

      <div className="faq">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <h2>{faq.question}</h2>
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                ▼
              </span>
            </div>
            <div 
              className={`faq-answer ${openIndex === index ? "show" : ""}`}
              aria-expanded={openIndex === index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;