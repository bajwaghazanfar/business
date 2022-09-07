// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const keywords = [
    {
      location: "Coventry",
      keyword: "Web Development Coventry",
    },
    {
      location: "Oxford",
      keyword: "Web Development Oxford",
    },
    {
      location: "Wolverhampton",
      keyword: "Web Development Wolverhampton",
    },
    {
      location: "Walsall",
      keyword: "Web Development Walsall",
    },
    {
      location: "Dudley",
      keyword: "Web Development Dudley",
    },
    {
      location: "Shirley",
      keyword: "Web Development Shirley",
    },
    {
      location: "Solihull",
      keyword: "Web Development Solihull",
    },
    {
      location: "MarstonGreen",
      keyword: "Web Development Marston Green",
    },
    {
      location: "Leicester",
      keyword: "Web Development Leicester",
    },
    {
      location: "Anstey",
      keyword: "Web Development Anstey",
    },
    {
      location: "Glenfield",
      keyword: "Web Development Glenfield",
    },
    {
      location: "Groby",
      keyword: "Web Development Groby",
    },
    {
      location: "Oadby",
      keyword: "Web Development Oadby",
    },
    {
      location: "Enderby",
      keyword: "Web Development Enderby",
    },
    {
      location: "Redditch",
      keyword: "Web Development Redditch",
    },
    {
      location: "Bromsgrove",
      keyword: "Web Development Bromsgrove",
    },
    {
      location: "Kiddernminster",
      keyword: "Web Development Kiddernminster",
    },
    {
      location: "Worcester",
      keyword: "Web Development Worcester",
    },
    {
      location: "Telford",
      keyword: "Web Development Telford",
    },
    {
      location: "Sparkhill",
      keyword: "Web Development Sparkhill",
    },
    {
      location: "Solihull",
      keyword: "Web Development Solihull",
    },
    {
      location: "Lozells",
      keyword: "Web Development Telford",
    },
    {
      location: "Alum Rock",
      keyword: "Web Development Alum Rock",
    },
    {
      location: "Hall Green",
      keyword: "Web Development Hall Green",
    },
    {
      location: "Shirley",
      keyword: "Web Development Shirley",
    },
  ];
  res.status(200).json(keywords);
}
