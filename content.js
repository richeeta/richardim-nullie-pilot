/*
 * Content lives here so publishing does not require touching layout code.
 * Add a new object to `research` and it will automatically appear in the feed.
 * Categories must be one or more of: apple, ai, tools.
 */
window.siteContent = {
  research: [
    {
      title: "Siri-ously Leaky: Exploring Overlooked Attack Surfaces Across Apple's Ecosystem",
      type: 'Featured writeup',
      date: '2025.08',
      dateKey: '2025-08-08',
      summary:
        'A field guide to lock-state confusion, assistant-mediated data exposure, race conditions, and the product seams that produced multiple Apple security credits.',
      categories: ['apple'],
      tags: ['Siri', 'Lock screen', 'Trust boundaries'],
      href: 'writeups/siriously-leaky.html',
      featured: true
    },
    {
      title: 'AI Auditor',
      type: 'Open-source tool',
      date: 'PROJECT',
      dateKey: '2024-01-01',
      summary:
        "A Burp Suite extension that brings LLM-assisted analysis into Burp's Scanner workflow for focused, reproducible application-security testing.",
      categories: ['ai', 'tools'],
      tags: ['LLM security', 'Burp Suite', 'Java'],
      href: 'https://github.com/richeeta/AIAuditor',
      featured: false
    },
    {
      title: '0xGUIDScanner',
      type: 'Open-source tool',
      date: 'PROJECT',
      dateKey: '2025-01-01',
      summary:
        'A passive Burp Suite scanner for UUIDs that are predictable, reversible, malformed, or leaking time and hardware identity.',
      categories: ['tools'],
      tags: ['UUID', 'Burp Suite', 'AppSec'],
      href: 'https://github.com/richeeta/0xGUIDScanner',
      featured: false
    }
  ],

  advisories: [
    {
      year: '2026',
      id: 'CVE-2026-112521',
      component: 'Security',
      platform: 'macOS',
      impact: 'A sandboxed process may bypass sandbox restrictions due to a buffer overflow. Credited jointly with Efstratios Kaplanellis.',
      href: 'https://support.apple.com/en-us/149521'
    },
    {
      year: '2026',
      id: 'CVE-2026-86987',
      component: 'Apple Intelligence',
      platform: 'iOS / iPadOS',
      impact: 'An authorization issue could allow a remote attacker to access sensitive user data. Fixed with improved entitlement checks.',
      href: 'https://support.apple.com/en-us/149230'
    },
    {
      year: '2026',
      id: 'CVE-2026-20655',
      component: 'Live Captions',
      platform: 'iOS / iPadOS',
      impact: 'A locked device could expose sensitive user information to an attacker with physical access.',
      href: 'https://support.apple.com/en-us/126347'
    },
    {
      year: '2025',
      id: 'CVE-2025-30468',
      component: 'Siri → Safari Private Browsing',
      platform: 'iOS / iPadOS',
      impact: 'Private Browsing tabs could be accessed without authentication through an assistant-mediated path.',
      href: 'https://support.apple.com/en-us/125108'
    },
    {
      year: '2025',
      id: 'CVE-2025-24225',
      component: 'Mail Addressing',
      platform: 'iOS / iPadOS',
      impact: 'Processing a crafted email could lead to user-interface spoofing.',
      href: 'https://support.apple.com/en-afri/122405'
    },
    {
      year: '2025',
      id: 'CVE-2025-24198',
      component: 'Siri',
      platform: 'iOS / iPadOS',
      impact: 'A physical attacker could use Siri to access sensitive user data while the device was locked.',
      href: 'https://support.apple.com/en-us/122371'
    },
    {
      year: '2025',
      id: 'CVE-2025-24133',
      component: 'Text Input',
      platform: 'iOS / iPadOS',
      impact: 'Lock-screen keyboard suggestions could expose sensitive information. The CVE record was later rejected; Apple attribution remains.',
      href: 'https://support.apple.com/en-us/125108'
    },
    {
      year: '2024',
      id: 'CVE-2024-44235',
      component: 'Spotlight',
      platform: 'iOS / iPadOS',
      impact: 'An attacker could view restricted content from the Lock Screen.',
      href: 'https://support.apple.com/en-us/121563'
    }
  ],

  recognition: [
    { year: '2025', label: 'Apple web server security acknowledgements', href: 'https://support.apple.com/en-us/102774' },
    { year: '2024', label: 'Apple web server security acknowledgements', href: 'https://support.apple.com/en-us/102774' },
    { year: '2025', label: 'iOS and iPadOS 26.2', href: 'https://support.apple.com/en-us/125884' },
    { year: '2025', label: 'iOS and iPadOS 18.4', href: 'https://support.apple.com/en-us/122371' },
    { year: '2025', label: 'visionOS 2.4', href: 'https://support.apple.com/en-us/122378' },
    { year: '2024', label: 'iOS and iPadOS 18.2', href: 'https://support.apple.com/en-us/121837' },
    { year: '2024', label: 'macOS Sequoia 15.2', href: 'https://support.apple.com/en-us/121839' },
    { year: '2024', label: 'visionOS 2.2', href: 'https://support.apple.com/en-us/121845' },
    { year: '2024', label: 'macOS Sequoia 15', href: 'https://support.apple.com/en-us/121238' },
    { year: '2024', label: 'visionOS 2', href: 'https://support.apple.com/en-us/121249' },
    { year: '2024', label: 'iOS and iPadOS 18', href: 'https://support.apple.com/en-us/121250' }
  ],

  talks: [
    {
      date: '2025.08.08',
      title: "Siri-ously Leaky: Exploring Overlooked Attack Surfaces Across Apple's Ecosystem",
      venue: 'DEF CON 33 Main Stage',
      type: 'Solo research talk',
      href: 'https://www.youtube.com/watch?v=MWvpOW-PRJI'
    },
    {
      date: '2025.10.01',
      title: "Siri-ously Leaky: Exploring Overlooked Attack Surfaces Across Apple's Ecosystem",
      venue: 'HOU.SEC.CON 2025',
      type: 'Updated research talk',
      href: 'https://github.com/richeeta/DEFCON33-Siriously-Leaky'
    },
    {
      date: '2025.08.10',
      title: 'Hacker v. Triage: Inside the Bug Bounty Battleground',
      venue: 'DEF CON 33 Bug Bounty Village',
      type: 'With Denis Smajlović',
      href: 'https://media.defcon.org/DEF%20CON%2033/DEF%20CON%2033%20villages%20and%20creators/DEF%20CON%2033%20-%20Bug%20Bounty%20Village%20-%20Richard%20Hyunho%20Im%20%28%40richeeta%29%20%26%20Denis%20Smajlovi%C4%87%20-%20Hacker%20vs.%20Triage%20-%20Inside%20the%20Bug%20Bounty%20Battleground.pdf'
    }
  ]
};
