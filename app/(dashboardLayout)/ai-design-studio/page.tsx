"use client";

import assets from "@/assets";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";

const CreateAdPage = () => {
  const [businessName, setBusinessName] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [bgDescription, setBgDescription] = useState("");
  const [selectedBg, setSelectedBg] = useState(0);
  const [previewCount, setPreviewCount] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleGeneratePreview = () => {
    if (previewCount > 0) {
      setPreviewCount(previewCount - 1);
      setPreviewImage(assets.images.cover); // simulate generating preview image
    }
  };

  const handlePublishClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="">
      <Grid container spacing={4} columns={{ xs: 2, sm: 1, md: 1 }}>
        {/* Create Ad Section */}

        <Grid>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md ">
            <Typography variant="h6" gutterBottom>
              Create AD
            </Typography>
            <div className="flex gap-3 flex-wrap mb-4">
              <Button variant="outlined">Use Default</Button>
              <Button variant="outlined">Custom</Button>
            </div>

            <TextField
              fullWidth
              label="Business Name"
              variant="outlined"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Offer Description"
              multiline
              rows={2}
              variant="outlined"
              value={offerDescription}
              onChange={(e) => setOfferDescription(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Background Image Description"
              multiline
              rows={2}
              variant="outlined"
              value={bgDescription}
              onChange={(e) => setBgDescription(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Typography variant="subtitle1" gutterBottom>
              Select Background Image
            </Typography>
            <div className="flex gap-3 flex-wrap mb-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-20 h-20 border-2 rounded-md cursor-pointer flex items-center justify-center ${
                    selectedBg === index
                      ? "border-green-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedBg(index)}
                >
                  <Image
                    src={assets.images.cover}
                    alt="bg"
                    width={60}
                    height={60}
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <Typography variant="body2" color="primary">
                {previewCount} Preview left
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={handleGeneratePreview}
              >
                Generate Preview
              </Button>
            </div>
          </div>
        </Grid>

        {/* Preview Section */}
        <Grid>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <Typography variant="h6" gutterBottom>
              Preview
            </Typography>
            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center mb-4">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Preview"
                  width={400}
                  height={200}
                  className="rounded object-cover w-full h-full"
                />
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No Preview Generated Yet
                </Typography>
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-end gap-3">
              <Button variant="outlined" sx={{ border: "none" }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handlePublishClick}
              >
                Publish
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Confirmation Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent className="text-center">
          <div className="flex justify-center mb-2">
            <BsExclamationCircleFill className="text-red-500 text-4xl" />
          </div>
          <Typography>
            Do you wish to publish this ad image?
            <br />
            or would like to use your {previewCount} remaining previews?
          </Typography>
        </DialogContent>
        <DialogActions>
          <div className="flex gap-4 mb-4 mr-5">
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="outlined"
              sx={{ border: "none" }}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm} color="success" variant="contained">
              Confirm
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent className="text-center">
          <Box className="text-green-500 text-4xl mb-2 flex justify-center">
            <Image src={assets.images.success} alt="✅" />
          </Box>
          <Typography variant="h6" gutterBottom>
            Congratulations!
          </Typography>
          <Typography>
            Your advertisement has been successfully submitted for review.
          </Typography>
        </DialogContent>
        <DialogActions className="mb-4 mr-5">
          <Button
            onClick={() => setIsSuccessModalOpen(false)}
            color="success"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateAdPage;
