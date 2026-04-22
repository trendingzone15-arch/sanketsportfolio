import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/mvpblocks',
  instaLink: 'https://www.instagram.com/___sanket._.135/',
  twitterLink: 'https://twitter.com/mvpblocks',
  githubLink: 'https://github.com/Sanketmane135',
  dribbbleLink: 'https://dribbble.com/mvpblocks',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    googleads: '/google-ads',
  },
  about: {
    history: '/company-history',
    team: '/meet-the-team',
    handbook: '/employee-handbook',
    careers: '/careers',
  },
  help: {
    faqs: '/faqs',
    support: '/support',
    livechat: '/live-chat',
  },
  contact: {
    email: 'hello@mvpblocks.com',
    phone: '+91 8637373116',
    address: 'Kolkata, West Bengal, India',
  },
  company: {
    name: 'Mvpblocks',
    description:
      'Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.',
    logo: 'https://i.postimg.cc/2SRcktkT/Mvpblocks.webp',
  },
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
];




export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex flex-col items-center justify-center">
         
             <div className="text-primary flex justify-center gap-2 sm:justify-start">

              <span className="text-2xl font-semibold">
               Developer Sanket Mane
              </span>
            </div>

            {/* <p className="text-foreground/50 mt-6 flex flex-wrap wrap-break-word ">
             I’m a full-stack web developer passionate about building modern, scalable, and user-friendly applications. I specialize in  React.js, Next.js, Javascript, TypeScript, Tailwind CSS, and Node.js, Express.js , python,Dwith hands-on experience in databases like MongoDB and Oracle.
            </p> */}

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2026 sanket mane
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
