// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body.id);
  res.status(200).json({ name: req.body.firstName });
}
