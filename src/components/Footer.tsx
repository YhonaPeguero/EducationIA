import React from 'react'

export function Footer() {
  const footerSections = [
    { title: "Platform", items: ["Features", "How it Works", "Pricing", "FAQ"] },
    { title: "Company", items: ["About Us", "Blog", "Careers", "Contact"] },
    { title: "Resources", items: ["Community", "Support", "Privacy Policy", "Terms of Service"] },
    { title: "Connect", items: ["Twitter", "LinkedIn", "Facebook", "Instagram"] },
  ]

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="hover:text-foreground cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-center text-muted-foreground">
        <p>&copy; 2024 Vocational IA. All rights reserved.</p>
      </div>
    </footer>
  )
} 