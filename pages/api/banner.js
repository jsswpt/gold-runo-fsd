export default function handler(req, res) {
  res.status(200).json([
    {
      id: "1",
      dataType: "photo" | "video",
      src: "",
      link: "",
      // badges: ["new", "any"]
    },
  ]);
}
