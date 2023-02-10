export default function handler(req, res) {
  res.status(200).json([
    {
      id: "1",
      image_url: "",
      title: "agffa",
      minPrice: 214,
      maxSale: 27,
      sizes: {
        length: 5,
        width: 2,
        height: 1,
      },
      // badges: ["new", "any"]
    },
  ]);
}
