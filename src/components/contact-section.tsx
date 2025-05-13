"use client";

const contact = {
  address: "Irving, Texas",
  phone: "+1 (562) 837 7933",
  email: "akashpnnm@gmail.com",
};

export function ContactSection() {
  return (
    <section id="contact" className="pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{contact.address}</p>
        <p className="my-4">{contact.phone}</p>
        <a href={`mailto:${contact.email}`} className="border-b hover:text-primary transition-colors">
          {contact.email}
        </a>
      </div>
    </section>
  );
}
