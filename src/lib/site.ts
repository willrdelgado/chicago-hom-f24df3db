// Central site configuration & content for the WeBuyChicagoHouses-style site.

export const SITE = {
  name: "WeBuyChicagoHouses.com",
  shortName: "WeBuyChicagoHouses",
  phone: "(312) 757-7669",
  phoneHref: "tel:+13127577669",
  email: "offers@webuychicagohouses.com",
  address: "230 E Ohio St Suite 410 1187, Chicago, IL 60611",
  tagline: 'We Buy Houses In Chicago "As-Is" For CASH!',
};

// Cloud-storage URLs (generated real-estate imagery)
export const ASSETS = {
  heroHouse:
    "https://vibe.filesafe.space/1794668445398164664/assets/3fc84898-443f-4409-9739-242bb7b48ea9.png",
  aboutPhoto:
    "https://vibe.filesafe.space/1794668445398164664/assets/97d8189b-da2d-475d-8675-7f154cdb039f.png",
  teamPhoto:
    "https://vibe.filesafe.space/1794668445398164664/assets/97d8189b-da2d-475d-8675-7f154cdb039f.png",
  step1:
    "https://vibe.filesafe.space/1794668445398164664/assets/1dfdef33-eb99-4bb9-949c-df4b0a1299e7.png",
  step2:
    "https://vibe.filesafe.space/1794668445398164664/assets/02e20c41-db87-424c-b925-058f67827644.png",
  step3:
    "https://vibe.filesafe.space/1794668445398164664/assets/804101e3-a90b-409c-91e9-28cc31fc82b8.png",
  step4:
    "https://vibe.filesafe.space/1794668445398164664/assets/f89d2c7d-5f4e-4d31-b436-46d59ed1df5c.png",
};

export const SITUATIONS = [
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/269ff471-d53a-482e-87a8-024b6b5c5fe1.png",
    title: "Looking to sell the property as-is",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/14199679-480e-4f6f-bc10-e29fec0e62c3.png",
    title: "Inherited property you can't keep",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/dcd7e1e6-3776-4a05-affd-2800a3fc9f6f.png",
    title: "Financial distress, medical bills or foreclosure",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/1632d7f7-4211-4ac1-a5e3-22c6a92f415d.png",
    title: "Structural issues, unpermitted work or condemned houses",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/9e87ac16-17c1-4ed8-91cf-ce52d36e1e88.png",
    title: "Sudden or unexpected life events",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/6c58069c-e277-4eff-bde7-6249f3afc219.png",
    title: "Damage from natural disasters",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/108db6ea-4370-4465-8277-1577f5126239.png",
    title: "Downsizing or relocation due to retirement",
  },
  {
    img: "https://vibe.filesafe.space/1794668445398164664/assets/0c04e764-7ef3-4740-a486-db25a8a02b70.png",
    title: "Vacant or problematic rental property",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    avatar:
      "https://vibe.filesafe.space/1794668445398164664/assets/3461a02c-ff0e-4bec-80a9-be5c02e40b33.png",
    quote:
      "I couldn't believe how easy it was to sell my home with this company. They took care of everything and made the process so simple.",
  },
  {
    name: "Mike S.",
    avatar:
      "https://vibe.filesafe.space/1794668445398164664/assets/463189bc-79be-42cd-8517-ce3f4e93c764.png",
    quote:
      "I was really impressed with how quickly they were able to make me an offer and close on my home. I would definitely recommend them to anyone looking to sell their home.",
  },
  {
    name: "Lisa T.",
    avatar:
      "https://vibe.filesafe.space/1794668445398164664/assets/7aeff352-a28c-4172-88ea-5852cd266433.png",
    quote:
      "I was hesitant at first about selling my home to a company, but they were so professional and made me a fair offer. I'm so glad I decided to go with them.",
  },
  {
    name: "Billy J.",
    avatar:
      "https://vibe.filesafe.space/1794668445398164664/assets/9278fd30-7d5a-435f-8165-c36dcacf90cf.png",
    quote:
      "I had a difficult situation and needed to sell my home fast. This company was able to make me an offer within days and close on the sale in a few weeks. They really saved me a lot of stress and hassle.",
  },
];

export const STEPS = [
  {
    n: 1,
    title: "Confirm Your Address",
    img: "step1",
    body: "After you enter your address we pull the Google Streetview and Map of your house to confirm that we have the right property. If not, you can fix the address with just a click of a button.",
  },
  {
    n: 2,
    title: "Confirm Property Details",
    img: "step2",
    body: "We then pull public tax records to verify basic property details, such as square footage, bedrooms, bathrooms, and age so that we can make the most accurate offer possible.",
  },
  {
    n: 3,
    title: "Property Condition",
    img: "step3",
    body: 'We buy homes "As-Is" and do the repairs ourselves so you don\'t have to. Tell us what your house needs so we can determine the cost of bringing your home to "like new" condition.',
  },
  {
    n: 4,
    title: "Get Your Cash Offer",
    img: "step4",
    body: "After pulling the latest sales of homes in your neighborhood, we will then determine a fair cash offer for your home based on the information you provided.",
  },
];

export const AGENT_VS_US = {
  agent: [
    "6% Commission",
    "3-4% in Closing Costs",
    "You're Responsible For Repairs",
    "Appraisal Required",
    "Lender Inspection Required",
    "Can Take 3-6 Months to Sell",
    "Must Clean Before Listing",
  ],
  us: [
    "NO COMMISSIONS",
    "WE PAY CLOSING COSTS",
    'WE BUY HOMES "AS-IS"',
    "NO APPRAISAL",
    "WE PAY CASH — NO LENDER REQUIREMENTS",
    "WE CAN CLOSE IN WEEKS, NOT MONTHS",
    "NO CLEANING — LEAVE WHAT YOU WANT BEHIND",
  ],
};

export const FAQS = [
  {
    q: "Is there any cost or obligation if I request an offer?",
    a: "Receiving an offer on your home from WeBuyChicagoHouses.com is free, and comes with absolutely no obligation to sell. To get started, just enter your address at the top of this page, and we'll walk you through some quick questions about your home's details and condition.",
  },
  {
    q: "Are there any fees or commissions to work with you?",
    a: "No. There are no fees or commissions when you sell your house to us. We'll make you an all cash offer, and if it's a fit, we'll buy your house and even pay for the closing costs too! No hassle. No fees. We make our money after we pay for repairs on the house (if any) and sell it for a profit.",
  },
  {
    q: "What happens after I accept your instant Cash Offer?",
    a: "We follow a quick and simple process that makes things easy for sellers. First, we will set an appointment to walk the property with you to confirm the details you provided and then we'll take care of the paperwork and close on a date that works best for you. You will receive the cash for your home within 24 hours of closing. The whole process for closing on your house can take as little as 2-3 weeks.",
  },
  {
    q: "Do you really buy houses in any condition?",
    a: 'Yes. We buy homes "As-Is" — fire damage, water damage, structural issues, code violations, inherited, vacant, tenant-occupied, or just outdated. You don\'t need to make a single repair or even clean out the property.',
  },
  {
    q: "How fast can you close?",
    a: "We can close in as little as 2-3 weeks, or on whatever timeline works best for you. Because we pay cash, there's no lender approval, appraisal, or underwriting holding up the sale.",
  },
  {
    q: "What areas do you buy in?",
    a: "We buy houses throughout Chicago and the surrounding suburbs across the greater Chicagoland area. Enter your address in the offer form to see if your property qualifies.",
  },
  {
    q: "Will you list my house on the MLS?",
    a: "No. We are not agents and we don't list your house. We are the buyer — we make you a direct cash offer and buy the house ourselves, so there are no showings, open houses, or waiting for a buyer.",
  },
  {
    q: "How do you determine your offer?",
    a: "We look at your home's location, condition, and recent sales of comparable homes in your neighborhood, then subtract a fair margin for repairs and resale. The result is a transparent, no-obligation cash offer.",
  },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "FAQ's", to: "/frequently-asked-questions" },
];
