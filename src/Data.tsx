interface Data {
  seg1: { img: string; heading: string; paragraph: string }[]
  comments: { comment: string; name: string; details: string; img: string }[]
}
export const data: Data = {
  seg1: [
    {
      img: 'icon-access-anywhere',
      heading: 'Access your files, anywhere',
      paragraph:
        'The ability to use a smartphone, tablet, or computer to access your account means your files follows you everywhere',
    },
    {
      img: 'icon-security',
      heading: 'Security you can trust',
      paragraph:
        '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files',
    },
    {
      img: 'icon-collaboration',
      heading: 'Real time collaboration',
      paragraph:
        'Securely share files and folders with friends,family and colleagues for live collaboration. no email attachments required.',
    },
    {
      img: 'icon-any-file',
      heading: 'Store any type of file',
      paragraph:
        "whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all the types to be securely stored and shared",
    },
  ],
  comments: [
    {
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      details: 'Founder & CEO, Huddle',
      img: 'profile-1',
    },
    {
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      details: 'Founder & CEO, Huddle',
      img: 'profile-1',
    },
    {
      comment:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      details: 'Founder & CEO, Huddle',
      img: 'profile-1',
    },
  ],
}
