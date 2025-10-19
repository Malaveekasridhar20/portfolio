import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Malaveeka Sridhar",
      "jobTitle": "AI Engineer & Software Developer",
      "description": "Freelance AI Engineer, Software Developer & Website Developer specializing in AI/ML, React, Flutter, and full-stack development.",
      "url": "https://malaveeka-portfolio.vercel.app",
      "image": "https://malaveeka-portfolio.vercel.app/logo.png",
      "email": "malaveekasridhar20072004@gmail.com",
      "telephone": "+91-9790731131",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tiruchirappalli",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Saranathan College Of Engineering",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tiruchirappalli",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "India"
        }
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "React",
        "Flutter",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQLite",
        "Billing Systems"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "AI Engineer & Software Developer",
        "occupationLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tiruchirappalli",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          }
        },
        "skills": [
          "AI/ML Development",
          "Custom App Development",
          "Website Creation",
          "Billing System Solutions",
          "AI Integration Services",
          "Software Support"
        ]
      },
      "sameAs": [
        "https://linkedin.com/in/malaveeka-sridhar",
        "https://github.com/malaveeka"
      ]
    };

    // Professional Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Malaveeka Sridhar - AI & Software Development Services",
      "description": "Professional AI engineering and software development services including custom app development, website creation, billing systems, and AI integration.",
      "provider": {
        "@type": "Person",
        "name": "Malaveeka Sridhar"
      },
      "areaServed": {
        "@type": "Place",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom App Development",
              "description": "Flutter-based mobile applications with cross-platform compatibility and modern UI/UX design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Creation",
              "description": "Responsive websites using React, TypeScript, and modern frameworks with SEO optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Billing System Solutions",
              "description": "Complete billing and invoice management systems with inventory tracking and automated reporting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Integration Services",
              "description": "AI-powered solutions including chatbots, data analysis, and machine learning models"
            }
          }
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9790731131",
        "email": "malaveekasridhar20072004@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Tamil"]
      }
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Malaveeka Sridhar Portfolio",
      "description": "Professional portfolio of Malaveeka Sridhar - AI Engineer, Software Developer & Website Developer",
      "url": "https://malaveeka-portfolio.vercel.app",
      "author": {
        "@type": "Person",
        "name": "Malaveeka Sridhar"
      },
      "inLanguage": "en-US",
      "copyrightYear": "2025",
      "genre": "Portfolio",
      "keywords": "AI Engineer, Software Developer, Web Developer, Portfolio, Freelance Developer"
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(personSchema, 'person-schema');
    addSchema(serviceSchema, 'service-schema');
    addSchema(websiteSchema, 'website-schema');

    // Cleanup function
    return () => {
      const schemas = ['person-schema', 'service-schema', 'website-schema'];
      schemas.forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StructuredData;