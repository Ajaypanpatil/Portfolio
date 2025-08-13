import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  tags: [String],
  description: String,
  stats: [
    {
      label: String,
      value: String
    }
  ],
  links: [
    {
      label: String,
      url: String
    }
  ],
  badge: String
});

export default mongoose.model("Project", projectSchema);
