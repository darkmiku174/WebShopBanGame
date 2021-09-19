import asyncHandler from "express-async-handler";
import Golf from "../models/sampleModel";

const getAllGolf = asyncHandler(async (req, res) => {
  const data = await Golf.find({});
  res.json(data);
});

export { getAllGolf };
