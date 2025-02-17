// create web site comments
// /api/comments
router.post("/", async (req, res) => {
    try {
      const { name, email, comment, rating } = req.body;
  
      if (!name || !email || !comment || !rating) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }
  
      const newComment = new Comment({
        name,
        email,
        comment,
        rating,
      });
  
      const savedComment = await newComment.save();
      res.json(savedComment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });